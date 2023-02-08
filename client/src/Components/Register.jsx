import React, { useState } from "react";
import "../StyleSheet/Register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [mobilenum, setMobilenum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    const dev_url = "http://127.0.0.1:5000/api/register";
    const sendotp_url = "http://127.0.0.1:5000/loginotp";
    const data = new FormData();
    const otpData = new FormData();
    data.append("name", name);
    data.append("mobilenum", mobilenum);
    otpData.append("phonenumber", mobilenum);
    data.append("password", password);
    data.append("confirmpassword", confirmpassword);

    if (name && mobilenum && password && password === confirmpassword) {
      axios
        .post(dev_url, data)
        .then((response) => {
          console.log("Register ===========", response);
          alert(response.data.mesage);
          // Yousuf bhai: add code here to check if user was created successfully or not then send otp to user's mobile number
          axios
            .post(sendotp_url, { phonenumber: mobilenum })
            .then((response) => {
              console.log("OTP===", response.data);
              if (response.data.status === "success") {
                alert("OTP sent successfully");
                history.push({
                  pathname: "/verify-otp",
                  state: { id: response.data.id, phoneNumber: mobilenum },
                });
              } else {
                alert("OTP not sent");
              }
            })
            .catch((error) => {
              console.log("OTP===", error);
            });
        })
        .catch((error) => {
          console.log("Register ===========", error);
          alert(error);
        });
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <div className="Register__container">
      <form className="Register__form">
        <h1>REGISTER PLEASE</h1>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Your First Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Mobile Number</label>
        <input
          type="number"
          placeholder="Enter Your Mobile Number (without 0)"
          onChange={(e) => setMobilenum(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Passwoord"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Your Password"
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <button type="submit" onClick={register}>
          REGISTER
        </button>
        <div>OR IF ALREADY REGISTERED</div>
        <button type="submit" onClick={() => history.push("/login-here")}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Register;
