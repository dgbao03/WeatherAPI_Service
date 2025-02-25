import express  from 'express';
import dotenv from 'dotenv';
import { getWeather } from './controllers/weatherControllers.js';
import { getForecast } from './controllers/forecastControllers.js';
import { dot } from 'node:test/reporters';

const app = express();

dotenv.config();

// Routes Handler
app.get('/', (req, res) => {
    res.send('Hello this is Weather API Wrapper Service!');
});

app.get('/weather', getWeather);

app.get('/forecast', getForecast);

// Start the Server
app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is running on http://localhost:' + process.env.SERVER_PORT);
})