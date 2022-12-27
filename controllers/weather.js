const fetch = require('node-fetch');
const User = require("../models/User");

module.exports = {
    getWeather: async (req, res) => {
        const results = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=74.0060&appid=a02bb1f0e937f830f317146e41e69bee')
       const data = await results.json();
        console.log(data);

        res.render("../views/weather.ejs", {weather: data})
      }
    }