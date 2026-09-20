export type WeatherWetness = 'dry' | 'light' | 'wet';

export type WeatherLabel = {
  icon: string;
  ceb: string;
  fil: string;
  wetness: WeatherWetness;
};

const labels: Record<number, WeatherLabel> = {
  0: { icon: '☀', ceb: 'Tin-aw', fil: 'Maaliwalas', wetness: 'dry' },
  1: { icon: '🌤', ceb: 'Hapit tin-aw', fil: 'Halos maaliwalas', wetness: 'dry' },
  2: { icon: '⛅', ceb: 'Medyo madag-umon', fil: 'Bahagyang maulap', wetness: 'dry' },
  3: { icon: '☁', ceb: 'Madag-umon', fil: 'Maulap', wetness: 'dry' },
  45: { icon: '🌫', ceb: 'Gabon', fil: 'Hamog', wetness: 'dry' },
  48: { icon: '🌫', ceb: 'Gabon nga may yelo', fil: 'Makapal na hamog', wetness: 'dry' },
  51: { icon: '🌦', ceb: 'Gamay nga ambon', fil: 'Magaan na ambon', wetness: 'light' },
  53: { icon: '🌦', ceb: 'Ambon', fil: 'Ambon', wetness: 'light' },
  55: { icon: '🌦', ceb: 'Dasok nga ambon', fil: 'Makapal na ambon', wetness: 'light' },
  56: { icon: '🌧', ceb: 'Ambon nga bugnaw', fil: 'Malamig na ambon', wetness: 'light' },
  57: { icon: '🌧', ceb: 'Dasok nga ambon nga bugnaw', fil: 'Makapal na malamig na ambon', wetness: 'light' },
  61: { icon: '🌧', ceb: 'Gamay nga ulan', fil: 'Magaan na ulan', wetness: 'light' },
  63: { icon: '🌧', ceb: 'Ulan', fil: 'Ulan', wetness: 'wet' },
  65: { icon: '🌧', ceb: 'Kusog nga ulan', fil: 'Malakas na ulan', wetness: 'wet' },
  66: { icon: '🌧', ceb: 'Ulan nga bugnaw', fil: 'Malamig na ulan', wetness: 'light' },
  67: { icon: '🌧', ceb: 'Kusog nga ulan nga bugnaw', fil: 'Malakas na malamig na ulan', wetness: 'wet' },
  71: { icon: '🌨', ceb: 'Gamay nga niyebe', fil: 'Magaan na niyebe', wetness: 'light' },
  73: { icon: '🌨', ceb: 'Niyebe', fil: 'Niyebe', wetness: 'light' },
  75: { icon: '❄', ceb: 'Kusog nga niyebe', fil: 'Malakas na niyebe', wetness: 'wet' },
  77: { icon: '🌨', ceb: 'Gagmay nga niyebe', fil: 'Mga butil ng niyebe', wetness: 'light' },
  80: { icon: '🌦', ceb: 'Ulan-ulan', fil: 'Paminsan-minsang ulan', wetness: 'light' },
  81: { icon: '🌧', ceb: 'Kanunay nga ulan-ulan', fil: 'Madalas na pag-ulan', wetness: 'wet' },
  82: { icon: '⛈', ceb: 'Kusog nga ulan-ulan', fil: 'Malakas na pag-ulan', wetness: 'wet' },
  85: { icon: '🌨', ceb: 'Ulan-ulan nga niyebe', fil: 'Paminsan-minsang niyebe', wetness: 'light' },
  86: { icon: '❄', ceb: 'Kusog nga niyebe-ulan', fil: 'Malakas na niyebe', wetness: 'wet' },
  95: { icon: '⛈', ceb: 'Thunderstorm', fil: 'Thunderstorm', wetness: 'wet' },
  96: { icon: '⛈', ceb: 'Thunderstorm nga may yelo', fil: 'Thunderstorm na may yelo', wetness: 'wet' },
  99: { icon: '⛈', ceb: 'Kusog nga thunderstorm nga may yelo', fil: 'Malakas na thunderstorm na may yelo', wetness: 'wet' },
};

export function weatherLabel(code: number): WeatherLabel {
  return labels[code] ?? { icon: '☁', ceb: 'Madag-umon', fil: 'Maulap', wetness: 'dry' };
}

/** Serialised into the page so the visitor-side refresh uses the same wording. */
export function weatherLabelMap(): Record<string, WeatherLabel> {
  return Object.fromEntries(Object.entries(labels).map(([code, label]) => [code, label]));
}
