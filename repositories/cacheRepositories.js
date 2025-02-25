import { get } from 'http';
import redis from 'redis';
import dotenv from 'dotenv';
import { getOpenWeatherAPI, getOpenWeatherForecastAPI } from './openWeatherRepositories.js';

dotenv.config();

const createRedisClient = async () => {
    const redisClient = redis.createClient();
    redisClient.on("error", (err) => console.error("Redis Error:", err));
    await redisClient.connect();
    return redisClient;
}

export const getWeatherCached = async (city) => {
    try {
        city = city.toLowerCase();

        const redisClient = await createRedisClient();
        let weatherData = await redisClient.get(`weather-${city}`);

        if (!weatherData) {
            weatherData = await getOpenWeatherAPI(city);
            await redisClient.setEx(`weather-${city}`, Number(process.env.EXPIRATION_TIME), JSON.stringify(weatherData));
            await redisClient.quit();
            return weatherData;
        } else {
            await redisClient.quit();
            return JSON.parse(weatherData);
        }
    } catch (error) {
        console.error("Redis Error: " + error);
        throw error;
    }
}

export const getForecastCached = async (city) => {
    try {
        city = city.toLowerCase();

        const redisClient = await createRedisClient();
        let forecastData = await redisClient.get(`forecast-${city}`);

        if (!forecastData) {
            forecastData = await getOpenWeatherForecastAPI(city);
            await redisClient.setEx(`forecast-${city}`, Number(process.env.EXPIRATION_TIME), JSON.stringify(forecastData));
            await redisClient.quit();
            return forecastData;
        } else {
            await redisClient.quit();
            return JSON.parse(forecastData);
        }
    } catch (error) {
        console.error("Redis Error: " + error);
        throw error;
    }
} 
