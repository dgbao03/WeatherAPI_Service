import { getWeatherCached } from '../repositories/cacheRepositories.js';

class WeatherService {
    static async getWeather(city) {
        try {
            const weatherData = await getWeatherCached(city);
            return weatherData;
        } catch (error) {
            throw error;
        }
    }
}

export default WeatherService;