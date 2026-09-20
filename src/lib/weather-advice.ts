/**
 * Tourist-facing advice engine.
 *
 * It turns raw forecast numbers into short, actionable sentences for visitors and
 * returns only ids — the wording itself lives in the bilingual content files, so
 * the same rules run on the server (first paint) and in the browser (refresh).
 */

export type AdviceInput = {
  code: number;
  temp: number | null;
  feelsLike: number | null;
  tempMax: number | null;
  tempMin: number | null;
  humidity: number | null;
  wind: number | null;
  gust: number | null;
  pop: number | null;
  precip: number | null;
  precipNow: number | null;
  uv: number | null;
  wetness: 'dry' | 'light' | 'wet';
};

export type WeatherAdvice = {
  outfit: string[];
  plan: string[];
  gear: string[];
  risk: string[];
  uvWord: string;
  windWord: string;
};

const THUNDER_CODES = new Set([95, 96, 99]);
const HEAVY_CODES = new Set([63, 65, 67, 75, 82, 86, 95, 96, 99]);
const LIGHT_CODES = new Set([51, 53, 55, 56, 57, 61, 66, 71, 73, 77, 80, 85]);
const FOG_CODES = new Set([45, 48]);
const CLEAR_CODES = new Set([0, 1]);
const OVERCAST_CODES = new Set([2, 3]);

const MAX_ITEMS = 3;
const MAX_GEAR_ITEMS = 4;

/** Every id the wording bank must provide, grouped by the block it belongs to. */
export const ADVICE_GROUPS = {
  outfit: [
    'outfit-rain-heavy',
    'outfit-rain-likely',
    'outfit-rain-light',
    'outfit-heat',
    'outfit-humid',
    'outfit-sun',
    'outfit-wind',
    'outfit-diurnal',
    'outfit-cool',
    'outfit-normal',
  ],
  plan: [
    'plan-indoor-first',
    'plan-market-morning',
    'plan-urban-heat',
    'plan-humid-feel',
    'plan-slippery',
    'plan-flood',
    'plan-thunder',
    'plan-seaside-postpone',
    'plan-photo-soft',
    'plan-clear-outdoor',
    'plan-normal',
  ],
  gear: [
    'gear-raincoat',
    'gear-umbrella',
    'gear-folding-umbrella',
    'gear-sunscreen',
    'gear-hat',
    'gear-water',
    'gear-electrolyte',
    'gear-wipes',
    'gear-jacket',
    'gear-mask',
    'gear-basic',
  ],
  risk: ['risk-thunder', 'risk-wind', 'risk-flood', 'risk-heavy-rain', 'risk-heat', 'risk-fog'],
} as const;

function value(input: number | null | undefined): number {
  return typeof input === 'number' && Number.isFinite(input) ? input : 0;
}

/** Beaufort 5 starts around 29 km/h, Beaufort 7 around 50 km/h. */
function windLevel(wind: number | null, gust: number | null): 'calm' | 'breeze' | 'strong' | 'gale' {
  const peak = Math.max(value(wind), value(gust));
  if (peak >= 50) return 'gale';
  if (peak >= 29) return 'strong';
  if (Math.max(value(wind), 0) >= 12) return 'breeze';
  return 'calm';
}

function uvLevel(uv: number | null): 'low' | 'moderate' | 'strong' | 'very-strong' {
  const index = value(uv);
  if (index >= 8) return 'very-strong';
  if (index >= 5) return 'strong';
  if (index >= 3) return 'moderate';
  return 'low';
}

export function buildAdvice(input: AdviceInput): WeatherAdvice {
  const { code, temp, feelsLike, tempMax, tempMin, humidity, pop, precip, precipNow, uv, wetness } = input;

  const thunder = THUNDER_CODES.has(code);
  const heavyCode = HEAVY_CODES.has(code);
  const heavyRain = heavyCode || value(precip) >= 10;
  const wet = wetness === 'wet' || heavyRain || value(precipNow) > 0.5;
  const drizzle = !wet && (wetness === 'light' || LIGHT_CODES.has(code));
  const likelyRain = value(pop) >= 60 || wet;
  const maybeRain = !likelyRain && (value(pop) >= 30 || drizzle);

  /* Thresholds use the same rounded numbers visitors see on the page. */
  const shownMax = tempMax === null ? 0 : Math.round(tempMax);
  const shownTemp = temp === null ? 0 : Math.round(temp);
  const shownFeels = feelsLike === null ? 0 : Math.round(feelsLike);

  const hot = shownMax >= 32 || shownTemp >= 32;
  const extremeHeat = shownMax >= 36 || shownFeels >= 41;
  const muggy = value(humidity) >= 80 && shownMax >= 30;
  const feelsHot = shownFeels >= 38 || shownFeels - shownTemp >= 4;
  const strongUv = value(uv) >= 5;

  const clear = CLEAR_CODES.has(code);
  const overcast = OVERCAST_CODES.has(code);
  const fog = FOG_CODES.has(code);
  const flood = value(precip) >= 25;

  const level = windLevel(input.wind, input.gust);
  const windy = level === 'strong' || level === 'gale';
  const gale = level === 'gale';

  const diurnal =
    typeof tempMax === 'number' &&
    Number.isFinite(tempMax) &&
    typeof tempMin === 'number' &&
    Number.isFinite(tempMin) &&
    tempMax - tempMin > 8;

  const cool = typeof tempMin === 'number' && Number.isFinite(tempMin) && tempMin <= 18;

  const outfit: string[] = [];
  const plan: string[] = [];
  const gear: string[] = [];
  const risk: string[] = [];

  /* --- Risk first: alerts always outrank ordinary advice. --- */
  if (thunder) risk.push('risk-thunder');
  if (gale) risk.push('risk-wind');
  if (flood) risk.push('risk-flood');
  else if (heavyRain) risk.push('risk-heavy-rain');
  if (extremeHeat) risk.push('risk-heat');
  if (fog) risk.push('risk-fog');

  /* --- What to wear --- */
  if (heavyRain) outfit.push('outfit-rain-heavy');
  else if (likelyRain) outfit.push('outfit-rain-likely');
  else if (drizzle) outfit.push('outfit-rain-light');

  if (extremeHeat || hot) outfit.push('outfit-heat');
  if (muggy) outfit.push('outfit-humid');
  if (clear && strongUv) outfit.push('outfit-sun');
  if (windy) outfit.push('outfit-wind');
  if (diurnal) outfit.push('outfit-diurnal');
  else if (cool) outfit.push('outfit-cool');
  if (!outfit.length) outfit.push('outfit-normal');

  /* --- How to plan the visit: safety-relevant plans first --- */
  if (thunder) plan.push('plan-thunder');
  if (likelyRain) plan.push('plan-indoor-first');
  if (flood) plan.push('plan-flood');
  if (wet || drizzle) plan.push('plan-slippery');
  if (windy) plan.push('plan-seaside-postpone');
  if (hot) plan.push('plan-market-morning');
  if (hot || muggy) plan.push('plan-urban-heat');
  if (feelsHot) plan.push('plan-humid-feel');
  if (overcast && !wet) plan.push('plan-photo-soft');
  if (clear && !hot) plan.push('plan-clear-outdoor');
  if (!plan.length) plan.push('plan-normal');

  /* --- What to bring: rain cover first, then heat, then sun --- */
  if (heavyRain) gear.push('gear-raincoat');
  else if (likelyRain) gear.push('gear-umbrella');
  else if (maybeRain) gear.push('gear-folding-umbrella');

  if (hot || feelsHot) gear.push('gear-water');
  if (strongUv && !likelyRain) gear.push('gear-sunscreen');
  if ((strongUv || clear) && !wet) gear.push('gear-hat');
  if (extremeHeat || shownFeels >= 39) gear.push('gear-electrolyte');
  if (likelyRain || maybeRain) gear.push('gear-wipes');
  if (diurnal || cool) gear.push('gear-jacket');
  if (fog) gear.push('gear-mask');
  if (!gear.length) gear.push('gear-basic');

  return {
    outfit: outfit.slice(0, MAX_ITEMS),
    plan: plan.slice(0, MAX_ITEMS),
    gear: gear.slice(0, MAX_GEAR_ITEMS),
    risk,
    uvWord: `uv-${uvLevel(uv)}`,
    windWord: `wind-${level}`,
  };
}
