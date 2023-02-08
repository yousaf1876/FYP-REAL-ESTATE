const router = require("express").Router();
const { request, response } = require("express");
const mongoose = require("mongoose");
const User = require("../../Models/User")
const Formidable = require("formidable");
const { Model } = require("mongoose");

const mongoURI = process.env.MONGO_URI;
mongoose.connect(
  mongoURI,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      return console.log(error);
    }
    return console.log("Connection to MongoDB was Successful");
  }
);


    router.post("/api/register", async (request, response) => {
      const form = new Formidable.IncomingForm();
      form.parse(request, (error, fields, files) => {
        const {
         name,
         mobilenum,
         password,
        } = fields;
        User.findOne({mobilenum: mobilenum}, (error, user) => {
          console.log(error);
          if(user){
            response.send({mesage: "User Already Registered"})
          } else{
            const newRegisterForm = new User({
              
                name,
                mobilenum,
                password,
             
            });
            const savedForm =  newRegisterForm.save();
            // return response.status(200).json(savedForm);
            response.send({mesage: "User registered successfully"})
          }
        })
          }
        );
      });





module.exports = router;  

































    
