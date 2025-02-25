import WeatherService from '../services/weatherServices.js';

export const getWeather = async (req, res) => {
    try {
        const cityName = req.query.city;
        if (cityName === undefined) {
            return res.send("Home Page of Current Weather API Wrapper Service!");
        } 

        if (cityName === ""){
            return res.status(400).json({ message : 'City name is required! Please provide a city name!' });
        }
    
        const weatherResult = await WeatherService.getWeather(cityName);
        return res.status(200).json(weatherResult);
    } catch (error) {
        if (error.message === "404-NOTFOUND") {
            return res.status(404).json({ message : 'City not found! Please try again!' });
        }

        return res.status(500).json({ message : 'Internal Server Error! Please try again!' });
    }


}