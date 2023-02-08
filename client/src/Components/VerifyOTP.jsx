import axios from "axios";
import React from "react";
import "../StyleSheet/verifyotp.css"
import { useLocation, useHistory } from "react-router-dom";

function VerifyOTP() {
  const [otp, setOtp] = React.useState("");
  const location = useLocation();
  const history = useHistory();

  //   console.log(location.state);

  //verify otp
  const verifyOTP = () => {
    const sendotp_url = "http://127.0.0.1:5000/verifyotp";

    axios
      .post(sendotp_url, {
        id: location.state.id,
        otpcode: otp,
        phoneNumber: location.state.phoneNumber,
      })
      .then((response) => {
        console.log("OTP===", response.data);
        if (response.data.status === "success") {
          alert("OTP verified successfully");
          history.push("/");
        } else {
          alert("OTP not matched");
        }
      })
      .catch((error) => {
        console.log("OTP===", error);
      });
  };

  return (
    <div className="otpcontainer">
      <form className="otp_form">
      <h1>Verify OTP</h1>
      <br />
      {/* <label className="osotp">OTP</label> */}
      <input 
      // className="otpcenter"
        type="text"
        placeholder="Enter OTP"
        onChange={(e) => setOtp(e.target.value)}
        value={otp}
      />
      <br />
      <button  onClick={() => verifyOTP()}>Verify OTP</button>
      </form>
    </div>
  );
}

export default VerifyOTP;
