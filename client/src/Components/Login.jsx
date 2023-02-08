import React, { useState } from 'react';
import "../StyleSheet/Login.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = ({ setLoginUser }) => {

  const history = useHistory()
  const [mobilenum, setMobilenum] = useState("");
  const [password, setPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();
    const dev_url = "http://127.0.0.1:5000/api/login"
    const data = new FormData();
    data.append("mobilenum", mobilenum);
    data.append("password", password);
    if(mobilenum && password) {
      axios
      .post(dev_url, data)
      .then((response) => {
        alert(response.data.message);
        setLoginUser(response.data.user)
        history.push("/properties/sell")
        // alert("Logged in successfully-press OK. You can list your property now. ")
      })

      .catch((error) => {
        console.log(error);
      });
    }else {
      alert("Invalid Input")
    }
  }

    return (
      <div className='Login__container'>
          <form className='Login__form'>
              <h1>LOGIN PLEASE</h1>
              <label>Mobile Number</label>
              <input type="email" placeholder='Enter Your Phone number (without zero)' onChange={(e) => setMobilenum(e.target.value)}/>
              <label>Password</label>
              <input type="password" placeholder='Enter Your Passwoord' onChange={(e) => setPassword(e.target.value)}/>
              <button type='submit' onClick={Login}>LOGIN</button>
              <div>OR IF NOT REGISTERED</div>
              <button onClick={() => history.push("/register-here")}>REGISTER</button>
          </form>
      </div>
    );
  };
  
  export default Login