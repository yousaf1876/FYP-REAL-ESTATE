import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar.jsx";
import Banner from "./Components/Banner";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import Unit from ".//componentunit/Appunit";
import HouseListing from "./Components/HouseListing";
import Register from "./Components/Register";
import VerifyOTP from "./Components/VerifyOTP";
import Mapdesign from "./Components/Mapdesign";
import Login from "./Components/Login";
import Cost from "./Componentcost/Appcost";
import HouseOnSale from "./Components/HouseOnSale";
import HouseOnRent from "./Components/HouseOnRent";
import "./StyleSheet/App.css";
import HouseDescription from "./Components/HouseDescription";
import FilterSearchResults from "./Components/FilterSearch";
import Contact from "./Components/Contact-us";
import SearchResults from "./Components/SearchResults";
import DesktopNavBar from "./Components/NavBar/DesktopNavBar";

const App = () => {
  const [user, setLoginUser] = useState({});
  return (
    <Router>
      <Switch>
        <Route path="/mapdesign">
          <DesktopNavBar />
          <Mapdesign />
        </Route>
        <Route path="/costcal">
          <DesktopNavBar />
          <Cost />
          <Footer />
        </Route>
        <Route path="/unit-converter">
          <DesktopNavBar />
          <Unit />
          <Footer />
        </Route>
        <Route path="/login-here">
          <DesktopNavBar />
          <Login setLoginUser={setLoginUser} />
          <Footer />
        </Route>
        <Route path="/register-here">
          <DesktopNavBar />
          <Register />
          <Footer />
        </Route>
        <Route path="/verify-otp">
          <DesktopNavBar />
          <VerifyOTP />
          <Footer />
        </Route>
        <Route path="/house/search/:query">
          <NavBar />
          <SearchResults />
          <Footer />
        </Route>
        <Route path="/contact-us">
          <NavBar />
          <Contact />
          <Footer />
        </Route>
        <Route path="/search/results-location/:location">
          <NavBar />
          <FilterSearchResults />
          <Footer />
        </Route>
        <Route path="/house/:location/:id">
          <NavBar />
          <HouseDescription />
          <Footer />
        </Route>
        <Route path="/properties/sale">
          <NavBar />
          <HouseOnSale />
          <Footer />
        </Route>
        <Route path="/properties/rent">
          <NavBar />
          <HouseOnRent />
          <Footer />
        </Route>
        <Route path="/properties/sell">
          <DesktopNavBar />
          {user && user._id && (user.isVerified === true) ? (
            <HouseListing setLoginUser={setLoginUser} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}
          {/* <NavBar /> */}
          {/* <HouseListing /> */}
          <Footer />
        </Route>
        <Route to="/">
          <NavBar />
          <SearchBar />
          <Banner />
          <MainContent />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
