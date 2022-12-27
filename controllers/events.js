const fetch = require('node-fetch');
const Event = require("../models/Event");
const User = require("../models/User");


  module.exports = {
    getEvents: async (req, res) => {
        const results = await fetch('https://data.cityofnewyork.us/resource/bquu-z2ht.json');
       const data = await results.json();
        console.log(data);

        res.render("../views/events.ejs", {arrayOfData: data})
      },

      likeEvent: async (req, res) => {
        try {
const user = await User.findById(req.user._id)
          user.watching.push(req.params.id);
          await user.save()
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }
            res.redirect("/profile");

          });
          console.log("watching");
        } catch (err) {
          console.log(err);
        }
  
 
      },
  }

      
 

  
  
