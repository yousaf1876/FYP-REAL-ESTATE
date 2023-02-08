const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../../Models/User")
const Formidable = require("formidable");


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

router.post("/api/login", async (request, response) => {
  const form = new Formidable.IncomingForm();
  form.parse(request, (error, fields, files) => {
    const {
     mobilenum,
     password,
    } = fields;
    User.findOne({mobilenum: mobilenum}, (error, user) => {
      if(user){
        if(password===user.password){
          response.send({message: "Login successful", user: user});
        } else {
          response.send({message: "Password is wrong"});

        }
      } else{
        response.send({message: "User Not Registered"})
      }
    })
      }
    );
  });

    module.exports = router;  
  



