import { API_CONFIG } from "./config";
import type { Coordinates, WeatherData } from "./type";

class WeatherAPI {
  private createUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      appid: API_CONFIG.API_KEY,
      ...params,
    } as Record<string, string>);
    return `${endpoint}?${searchParams.toString()}`;
  }

  // Placeholder for fetchData implementation
  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.statusText}`);
    }
    return response.json();
  }

  // Placeholder for getCurrentWeather implementation
  async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });
    return this.fetchData<WeatherData>(url);
  }

  // Placeholder for getForecast implementation
  async getForecast() {}

  // Placeholder for reverseGeocode implementation
  async reverseGeocode() {}
}
