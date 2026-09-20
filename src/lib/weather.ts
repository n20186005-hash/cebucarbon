import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { weatherRequestUrl } from './weather-config';

export type WeatherDay = {
  date: string;
  weekdayIndex: number;
  code: number;
  tempMax: number | null;
  tempMin: number | null;
  feelsMax: number | null;
  precipitation: number | null;
  precipitationProbability: number | null;
  windMax: number | null;
  gustMax: number | null;
  uvIndexMax: number | null;
};

export type WeatherCurrent = {
  temp: number | null;
  feelsLike: number | null;
  humidity: number | null;
  wind: number | null;
  gust: number | null;
  precipitation: number | null;
  code: number;
  isDay: boolean;
};

export type WeatherSnapshot = {
  observedAt: string | null;
  fetchedAt: string;
  current: WeatherCurrent | null;
  sunrise: string | null;
  sunset: string | null;
  days: WeatherDay[];
};

type CacheEnvelope = {
  fetchedAtMs: number;
  snapshot: WeatherSnapshot;
};

const CACHE_TTL_MS = 30 * 60 * 1000;
const CACHE_FILE = join(process.cwd(), 'node_modules', '.cache', 'cebucarbon-weather.json');
const REQUEST_TIMEOUT_MS = 8000;

let memoryCache: CacheEnvelope | null = null;

function toNumber(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function pick(source: Record<string, unknown> | undefined, key: string, index: number): number | null {
  const list = source?.[key];
  if (!Array.isArray(list)) return null;
  return toNumber(list[index]);
}

function localTime(value: unknown): string | null {
  return typeof value === 'string' && value.length >= 16 ? value.slice(11, 16) : null;
}

function normalize(raw: unknown): WeatherSnapshot | null {
  if (!raw || typeof raw !== 'object') return null;
  const data = raw as Record<string, unknown>;
  const daily = (data.daily ?? {}) as Record<string, unknown>;
  const dates = Array.isArray(daily.time) ? (daily.time as string[]) : [];
  if (!dates.length) return null;

  const current = (data.current ?? {}) as Record<string, unknown>;
  const days: WeatherDay[] = dates.map((date, index) => ({
    date,
    weekdayIndex: Number.isNaN(Date.parse(date)) ? 0 : new Date(`${date}T00:00:00`).getDay(),
    code: pick(daily, 'weather_code', index) ?? 0,
    tempMax: pick(daily, 'temperature_2m_max', index),
    tempMin: pick(daily, 'temperature_2m_min', index),
    feelsMax: pick(daily, 'apparent_temperature_max', index),
    precipitation: pick(daily, 'precipitation_sum', index),
    precipitationProbability: pick(daily, 'precipitation_probability_max', index),
    windMax: pick(daily, 'wind_speed_10m_max', index),
    gustMax: pick(daily, 'wind_gusts_10m_max', index),
    uvIndexMax: pick(daily, 'uv_index_max', index),
  }));

  const sunrise = Array.isArray(daily.sunrise) ? daily.sunrise[0] : null;
  const sunset = Array.isArray(daily.sunset) ? daily.sunset[0] : null;

  return {
    observedAt: typeof current.time === 'string' ? current.time : null,
    fetchedAt: new Date().toISOString(),
    current:
      current.temperature_2m === undefined && current.weather_code === undefined
        ? null
        : {
            temp: toNumber(current.temperature_2m),
            feelsLike: toNumber(current.apparent_temperature),
            humidity: toNumber(current.relative_humidity_2m),
            wind: toNumber(current.wind_speed_10m),
            gust: toNumber(current.wind_gusts_10m),
            precipitation: toNumber(current.precipitation),
            code: toNumber(current.weather_code) ?? 0,
            isDay: current.is_day !== 0,
          },
    sunrise: localTime(sunrise),
    sunset: localTime(sunset),
    days,
  };
}

function readDiskCache(): CacheEnvelope | null {
  try {
    if (!existsSync(CACHE_FILE)) return null;
    return JSON.parse(readFileSync(CACHE_FILE, 'utf8')) as CacheEnvelope;
  } catch {
    return null;
  }
}

function writeDiskCache(envelope: CacheEnvelope): void {
  try {
    mkdirSync(dirname(CACHE_FILE), { recursive: true });
    writeFileSync(CACHE_FILE, JSON.stringify(envelope, null, 2));
  } catch {
    /* Cache persistence is best-effort only. */
  }
}

async function requestSnapshot(): Promise<WeatherSnapshot | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(weatherRequestUrl(), { signal: controller.signal });
    if (!response.ok) return null;
    return normalize(await response.json());
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function getWeather(): Promise<WeatherSnapshot | null> {
  const now = Date.now();

  if (memoryCache && now - memoryCache.fetchedAtMs < CACHE_TTL_MS) {
    return memoryCache.snapshot;
  }

  const disk = readDiskCache();
  if (disk && now - disk.fetchedAtMs < CACHE_TTL_MS) {
    memoryCache = disk;
    return disk.snapshot;
  }

  const snapshot = await requestSnapshot();
  if (snapshot) {
    memoryCache = { fetchedAtMs: now, snapshot };
    writeDiskCache(memoryCache);
    return snapshot;
  }

  if (disk) {
    memoryCache = disk;
    return disk.snapshot;
  }

  return null;
}
