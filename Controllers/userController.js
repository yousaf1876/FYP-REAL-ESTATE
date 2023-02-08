require("dotenv").config();
const messagebird = require("messagebird")(process.env.MESSAGEBIRD_API_KEY);
const User = require("../Models/User");

class UserController {
  // Send OTP to User
  static userLogin = async (req, res) => {
    const { phonenumber } = req.body;
    const newPhoneNumber = "92" + phonenumber;
    var params = {
      template: "Your Local Property Consultant Login OTP is %token",
      timeout: 2000,
    };

    messagebird.verify.create(newPhoneNumber, params, (err, response) => {
      if (err) {
        // Could not send OTP e.g. Phone number Invalid
        console.log("OTP Send Error:", err);
        res
          .status(200)
          .send({ status: "failed", message: "Unable to Send OTP" });
      } else {
        // OTP Send Success
        console.log("OTP Send Response:", response);
        res.status(200).send({
          status: "success",
          message: "OTP Send Successfully",
          id: response.id,
        });
      }
    });
  };

  // Verify OTP is correct or Not
  static verifyOTP = async (req, res) => {
    const { id, otpcode, phoneNumber } = req.body;
    messagebird.verify.verify(id, otpcode, async (err, response) => {
      if (err) {
        // Incorrect OTP
        console.log("OTP Verification Error:", err);
        res.status(200).send({ status: "failed", message: "Invalid OTP" });
      } else {
        // Login Success
        console.log("OTP Verification Response:", response);

        // Set user as logged in isVerified
        console.log("phoneNumber", phoneNumber);
        const user = await User.findOne({ mobilenum: phoneNumber });
        console.log("user", user);
        if (user) user.isVerified = true;
        await user.save();
        res.status(200).send({ status: "success", message: "Login Success" });
      }
    });
  };
}

module.exports = UserController;

// class userController {
//     // send otp to user
//     static userLogin = async (req, res) => {
//         const {phonenumber} = req.body
//         const newPhoneNumber = "+92" + phonenumber;
//         var params = {
//             template:'Your Local Property Consultant Login OTP is %token',
//             timeout: 500
//           };

//           messagebird.verify.create(newPhoneNumber, params,
//             (err, response) =>{
//             if (err) {
//                 //e.g invalid phone number
//               console.log("OTP send error: ",err);
//               res.status(200).send({"status": "failed", "message": "Unable to send OTP"})
//             }
//             //OTP Send successfully
//             console.log("OTP send response:",response);
//             res.status(200).send({"status": "success", "message": "OTP send successfully", "id": response.id})
//           });
//     }

//     //verify OTP
//     static verifyOTP = async (req, res,)=>{
//         const {id, otpcode} = req.body
//         messagebird.verify.verify(id, otpcode,
//             (err, response) =>{
//             if (err) {
//                 //Incorrect otp
//               console.log("OTP Verification Error: ",err);
//               res.status(200).send({"status": "failed", "message": "Invalid OTP"})
//             }
//             //otp verified login success
//             console.log("OTP Verification Response: ", response);
//             res.status(200).send({"status": "success", "message": "OTP verified successfully, login success"})
//           });
//     }
// }
// module.exports = userController;
