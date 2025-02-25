# WeatherAPI

## Project Description
* A weather API server built with Node.js and Express.js.
* It provides a robust and efficient way to access weather data by leveraging both an external weather service and a Redis caching mechanism.
*  The project is designed with a 3-layer architecture (Controller, Service, Repository) to promote code organization, maintainability, and testability.

## Technical Stack

* Programming Language: JavaScript
* Backend: NodeJS and ExpressJS
* Caching: Redis
* External Service: OpenWeatherAPI
* Implemented the 3-layer architecture for server structure

## How to run code?
* You'll need to have Node.js and npm installed on your system.
* Clone the project repository to your local machine.
 ``` properties
git clone https://github.com/dogiabao03/University_DigitialContact_Website
```
* Install the required dependencies by running npm install.
``` properties
npm install
```
* Before starting the server, make sure you have a Redis instance running.
* Create a .env file with the following required information: SERVER_PORT, OPEN_WEATHER_TOKEN (obtainable from the OpenWeather website), and EXPIRATION_TIME."
* Now you're ready to run the server!
``` properties
npx nodemon app.js
```

## License
MIT License

Copyright (c) 2025 BaoDo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 

