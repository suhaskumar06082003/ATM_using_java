import React, { useState } from "react";
import "./opt.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loadingToggleAction,
} from "../../store/actions/AuthActions"; 

function Otpreceive(props){
  
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  console.log("sent");
  const dispatch = useDispatch();
  console.log("here");

  const history = useHistory();
  async function onSighUp(e) {
    e.preventDefault();

    console.log("hello");
   // if (e) return;
    dispatch(loadingToggleAction(true));
 // dispatch(otpAction(email, otp, props.history));

    try {
      const res = await axios.post("/api/auth/verify", {
        email,
        otp
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
     console.log("sent");
     history.push('/login');
     console.log("Reveived");
   
  }
  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>Verification</h3>
            <p>Please enter the opt sent via email.</p>
          </div>
        </div>
        <form method="POST" onSubmit={onSighUp}>
          <div className="login-form">
          <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
             <input type="submit" class="btn btn-primary"/>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otpreceive;
