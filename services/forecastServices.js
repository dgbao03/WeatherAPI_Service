import { getForecastCached } from "../repositories/cacheRepositories.js";

class ForecastService {
    static async getForecast(city) {
        try {
            const forecastData = await getForecastCached(city);
            return forecastData;
        } catch (error) {
            throw error;
        }
    }
}

export default ForecastService;