/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer";
// import image from "../../img/login.jpg";
// import Firebase from "../../firebase";
import { withRouter, Redirect } from "react-router-dom";
// import { Session } from 'bc-react-session';
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import firebase from "firebase"
import Collapse from "../../components/collapsingmenu"
import "../../Styles/login.css"


// const session = Session.get();

const RegisterPage = (props) => {
  // if (session.isValid === true) {

  //   return <Redirect to="/dashboard" />
  // }
  // else {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpState, setOTPState] = useState(false)
  const [otp, setOTP] = useState('')

  const [changepassState, setChangepassState] = useState(false)
  const [changepass, setChangepass] = useState("")


  //   const uiConfig = {
  //     signInFlow: "popup",
  //     signInOptions: [
  //       {
  //         provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //         scopes: [
  //           'email'
  //         ]
  //       },
  //       {
  //         provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //         scopes: [

  //           'email'
  //         ]
  //       }],
  //     callbacks: {
  //       signInSuccessWithAuthResult: function (result) {


  //         Session.start({
  //           payload: {

  //           },
  //           expiration: 86400000,

  //         })


  //         window.location.assign('/dashboard')
  //         return false
  //       }
  //     }
  //   }



  return (
    <>
      <div class="login">
        <Header
          absolute
          color="transparent"
          brand="The Next Chapter"
        />

        <div>
          <div class="form" method="post">
            <h2>Login</h2>
            <br></br>
            <div class="logo"></div>
            <div class="input">
              <div class="inputBox">
                <label> Email </label>
                <input type="email" id="email" name="email" value={email}
                  onChange={e => setEmail(e.target.value)} placeholder="example@xyz.com"
                  width="100%"></input>

              </div>
              <div class="inputBox">
                <label> Password </label>
                <input type="password" value={password} name="password" id="password"
                  placeholder="********" onChange={e => setPassword(e.target.value)}></input>
              </div>
              <div class="inputBox">

                <input type="submit" name="" value="Sign In"
                  onClick={login}
                ></input>
              </div>
            </div>
            <p class="forget">Forgot Password ?
            {/* // onClick={resetPassword} */}
              <Collapse >
                <input type="email" id="email" name="email" value={email}
                  onChange={e => setEmail(e.target.value)} placeholder="example@xyz.com"
                  width="100%"></input>
                <p>Send OTP ?</p>
                <button onClick={Changepass}>Send OTP</button>
              </Collapse>
            </p>
            <br></br>
            {otpState ? (<>
              <p>OTP Sent! Enter your OTP</p>
              <input type='number' value={otp} onChange={e => setOTP(e.target.value)} ></input>
              <button type="submit" onClick={validateOTP}>Submit</button>
            </>) : (null)}

            <br></br>
            {
              changepassState ? (<>
                <p>Enter new Password</p>
                <input type='String' value={changepass} onChange={e => setChangepass(e.target.value)} ></input>
                <button type="submit"
                  onClick={submitpass}
                >Submit</button>

              </>
              ) : (null)
            }
            <p class="register">Don't have an account? <a href="/register"> Register! </a></p>

          </div>


        </div>
      </div>


      <Footer />

    </>
  );


  // function resetPassword() {
  //   var auth = Firebase.auth;
  //       expiration: 86400000,
  //   var emailAddress = email;
  //   auth.sendPasswordResetEmail(emailAddress).then(function () {
  //     alert(`Email sent to ${emailAddress}. Please check your inbox`);
  //   }).catch(function (error) {
  //     alert("Error:", error);
  //   })
  // }
  function submitpass() {
    console.log(email)
    try {
      if (changepass.length < 6) {
        alert("Password too short")
      } else {
        console.log('TESTPASS', changepass, email)
        fetch(`http://127.0.0.1:5000/changepass?password=${changepass}&email=${email}`)
          .then(res => res.json())
          .then(data => (data))
        window.location.href = "/login"

      }
    } catch (err) {
      console.log(err)
    }
  }
  function validateOTP() {
    try {
      fetch(`http://127.0.0.1:5000/validateotp?otp=${otp}&email=${email}`)
        .then(res => res.json())
        .then(data => {
          if (data === true) {
            console.log(data)

            setChangepassState(true)
          }

          else {
            console.log(data)

            alert('Incorrect OTP')
          }
        })
    } catch{ }
  }
  function Changepass() {
    try {
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        alert("Invalid Email Address")
      } else {

        fetch(`http://127.0.0.1:5000/forgot?email=${email}`)
          .then(res => res.json())
          .then(data => {
            if (data === true) {
              setOTPState(true)
            }
            else {
              alert(' User not found! \n Register or recheck your Email id')
            }
          })
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function login() {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      alert("Invalid Email Address")
    }
    else if (password.length < 6) {
      alert("Password is too short")
    }
    else {
      try {

        await fetch(`http://127.0.0.1:5000/login?email=${email}&password=${password}`)
          .then(res => res.json())
          .then(data => alert(data))

      } catch (err) {
        console.log(err)
      }
    }
  }
  // async function login() {

  //   try {

  //     await Firebase.login(email, password);
  //     Session.start({
  //       payload: {

  //       },

  //     });

  //     window.location.href = '/dashboard';

  //   } catch (error) {
  //     alert(error.message);
  //   }
  //   }
  // }
}
export default withRouter(RegisterPage);



