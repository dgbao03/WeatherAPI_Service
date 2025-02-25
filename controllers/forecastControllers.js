import ForecastService from '../services/forecastServices.js';

export const getForecast = async (req, res) => {
    try {
        const cityName = req.query.city;
        if (cityName === undefined) {
            return res.send("Home Page of Forecast Weather API Wrapper Service!");
        } 

        if (cityName === ""){
            return res.status(400).json({ message : 'City name is required! Please provide a city name!' });
        }
    
        const forecastResult = await ForecastService.getForecast(cityName);
        return res.status(200).json(forecastResult);
    } catch (error) {
        if (error.message === "404-NOTFOUND") {
            return res.status(404).json({ message : 'City not found! Please try again!' });
        }

        return res.status(500).json({ message : 'Internal Server Error! Please try again!' });
    }
}