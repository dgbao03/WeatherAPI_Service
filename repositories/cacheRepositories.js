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
    return await getOrSetCache("weather", city, getOpenWeatherAPI);
}

export const getForecastCached = async (city) => {
    return await getOrSetCache("forecast", city, getOpenWeatherForecastAPI);
} 

const getOrSetCache = async (keyPrefix, city, fetchFunction) => {
    try {
        city = city.toLowerCase();

        const redisClient = await createRedisClient();
        let data = await redisClient.get(`${keyPrefix}-${city}`);

        if (!data) {
            data = await fetchFunction(city)
            await redisClient.setEx(`${keyPrefix}-${city}`, Number(process.env.EXPIRATION_TIME), JSON.stringify(data));
            await redisClient.quit();
            return data;
        } else {
            await redisClient.quit();
            return JSON.parse(data);
        }
    } catch (error) {
        throw error;
    }
}