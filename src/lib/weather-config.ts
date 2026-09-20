// Shared coordinates and request shape for the visitor-facing forecast block.
export const WEATHER_LATITUDE = 10.2914389;
export const WEATHER_LONGITUDE = 123.899131;
export const WEATHER_TIMEZONE = 'Asia/Manila';
export const WEATHER_FORECAST_DAYS = 7;

export const WEATHER_CURRENT_FIELDS = [
  'temperature_2m',
  'apparent_temperature',
  'relative_humidity_2m',
  'wind_speed_10m',
  'wind_gusts_10m',
  'precipitation',
  'weather_code',
  'is_day',
];

export const WEATHER_DAILY_FIELDS = [
  'weather_code',
  'temperature_2m_max',
  'temperature_2m_min',
  'apparent_temperature_max',
  'precipitation_sum',
  'precipitation_probability_max',
  'wind_speed_10m_max',
  'wind_gusts_10m_max',
  'uv_index_max',
  'sunrise',
  'sunset',
];

export function weatherRequestUrl(): string {
  const params = new URLSearchParams({
    latitude: String(WEATHER_LATITUDE),
    longitude: String(WEATHER_LONGITUDE),
    current: WEATHER_CURRENT_FIELDS.join(','),
    daily: WEATHER_DAILY_FIELDS.join(','),
    timezone: WEATHER_TIMEZONE,
    forecast_days: String(WEATHER_FORECAST_DAYS),
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}
