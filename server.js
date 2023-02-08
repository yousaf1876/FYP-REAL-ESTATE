const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();

//MiddleWare
app.use(cors());

app.use(express.json());

//API ENDPOINTS CONSTANTS
const HouseListingRoute = require("./Routes/HouseUpload/HouseSaleOrRent");
const ListHouseFecthRoute = require("./Routes/ListedHouseFetch/HouseFetch");
// const ContactFormRoute = require("./Routes/EmailRoute/Email");
const RegisterRoute = require("./Routes/RegisterRoute/Register");
const LoginRoute = require("./Routes/LoginRoute/Login");
// const userController = require("./Controllers/userController");
const userRoutes = require("./Routes/userRoutes")
//API ENDPOINTS
app.use(HouseListingRoute);
app.use(ListHouseFecthRoute);
// app.use(ContactFormRoute);
app.use(RegisterRoute);
app.use(LoginRoute);
app.use(userRoutes);

//Setting up for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "./client", "build", "index.html")
    );
  });
}

//SERVER'S ENTRY POINT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
