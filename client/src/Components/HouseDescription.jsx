import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import houseDescriptionAction from "../store/Actions/HouseDescription";
import screenLoader from "../images/screenLoad.gif";
import HotelIcon from "@material-ui/icons/Hotel";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import BathtubIcon from "@material-ui/icons/Bathtub";
import "../StyleSheet/HouseDescription.css";
export const HouseDescription = () => {
  const form = useRef();
  const houseID = window.location.href.split("/")[5];
  const dispatch = useDispatch();
  const { loading, error, houseDescription } = useSelector(
    (state) => state.houseDetails
  );

  useEffect(() => {
    dispatch(houseDescriptionAction(houseID));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ul0m0d6', 'template_7vjw60u', form.current, 'Us90Zz9MaEtwhZHpd')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
          alert("Message Sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="House__detailContainer">
      {loading ? (
        <img src={screenLoader} alt="House Details" />
      ) : error ? (
        <h1>SORRY SERVER IS CURRENTLY DOWN :(</h1>
      ) : (
        <div className="House__details">
          {houseDescription.map((house) => {
            return (
              <div className="House__detail" key={house._id}>
                <img src={house.house_properties.houseImage} alt="House" />
                <div className="info">
                  <h4 className="house__price">{`R${house.house_properties.housePrice}`}</h4>
                  <h4 className="houseBedsAndState">{`${house.house_properties.bedroomNumber} Bedroom house in ${house.house_location.province} for ${house.house_properties.sale_or_rent}`}</h4>
                  <h4 className="house__location">{`House located in: ${house.house_location.citystreet}`}</h4>
                  <div className="more__info">
                    <div className="bedRoomCount">
                      <HotelIcon />
                      <h5>{house.house_properties.bedroomNumber}</h5>
                    </div>
                    <div className="showersCount">
                      <BathtubIcon />
                      <h5>{house.house_properties.bathroomNumber}</h5>
                    </div>
                    <div className="parkingSpace">
                      <DriveEtaIcon />
                      <h5>{house.house_properties.garages}</h5>
                    </div>
                  </div>
                </div>
                <div className="House__textDetail">
                  <h4>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam tempore, ullam nulla architecto dolorem soluta
                    labore esse minus in reiciendis, eius deleniti officia
                    ratione voluptate atque illo ab assumenda odit dolor! Beatae
                    debitis distinctio libero?
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="Contact__agentForm">
        <form className="Contact__AgentForm" ref={form}>
          <h3>Contact Agent</h3>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            required
          />
          <br />
          <label>Subject</label>
          <input
            type="text"
            name="user_subject"
            placeholder="Enter the subject of message"
            required
          />
          <br />
          <label>Message</label>
          <textarea
            name="message"
            cols="30"
            rows="5"
            required
          ></textarea>
          <br />

          <button onClick={sendMessage}>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default HouseDescription;
