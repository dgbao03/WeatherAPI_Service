import axios from 'axios';
import dotenv from 'dotenv';
import { cp } from 'fs';

// dotenv.config({ path: '../.env'});
dotenv.config();

export const getOpenWeatherAPI = async (city) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_TOKEN}`);
        return response.data;
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error("404-NOTFOUND");
        }

        throw error;
    }
}

export const getOpenWeatherForecastAPI = async (city) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPEN_WEATHER_TOKEN}`);
        return response.data;
    } catch (error) {
        if (error.response.status === 404) {
            throw new Error("404-NOTFOUND");
        }

        throw error;
    }

}
