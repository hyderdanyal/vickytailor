import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer";
// import image from "../../img/login.jpg";
import { Redirect } from "react-router-dom";
// import Firebase from "../../firebase";
// import { Session } from "bc-react-session";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import firebase from "firebase";


// const session = Session.get();

const LoginPage = (props) => {

  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [setCardAnimation] = React.useState("cardHidden");



  // if (session.isValid === true) {

  //     return <Redirect to="/dashboard" />
  // }
  // else {
  //     const uiConfig = {
  //         signInFlow: "popup",
  //         signInOptions: [
  //             {
  //                 provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //                 scopes: [
  //                     'email'
  //                 ]
  //             },
  //             {
  //                 provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //                 scopes: [

  //                     'email'
  //                 ]
  //             }],
  //         callbacks: {
  //             signInSuccessWithAuthResult: function (currentUser, credential, redirectUrl) {
  //                 Session.start({
  //                     payload: {

  //                     },
  //                     expiration: 86400000,

  //                 })

  //                 window.location.assign('/dashboard')
  //                 return false
  //             }
  //         }
  //     }

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="The Next Chapter"
      />
      <div

        style={{
          // backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          display: "flex",
          alignItems: "center ",
          height: "100%",
          minHeight: "100vh",
          width: "100%",
          objectFit: "cover",
        }}
      >
        <div className="form" method="post"
          style={{ top: '50px' }}>
          <h2>Register</h2>
          <div className="logo"></div>
          <div className="input">
            <div className="inputBox">
              <label> First Name </label>
              <input type="String" id="firstname" name="fname" value={fname}
                onChange={e => setFName(e.target.value)} placeholder="First Name"
                width="100%"></input>


            </div>
            <div className="inputBox">
              <label> Last Name </label>
              <input type="String" id="lastname" name="lname" value={lname}
                onChange={e => setLName(e.target.value)} placeholder="Last Name"
                width="100%"></input>

            </div>
            <div className="inputBox">
              <label> Email </label>
              <input type="email" id="email" name="email" value={email}
                onChange={e => setEmail(e.target.value)} placeholder="example@xyz.com"
                width="100%"></input>

            </div>
            <div className="inputBox">
              <label> Password </label>
              <input type="password" value={password} name="password" id="password"
                placeholder="********" onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className="inputBox">

              <input type="submit" name="" value="Sign Up"
                onClick={onRegister}
              ></input>
            </div>
          </div>
          <br></br>
          <div >
            {/* <StyledFirebaseAuth
                                uiConfig={uiConfig}
                                firebaseAuth={firebase.auth()}
                            /> */}
            <br></br>
            <p className="register">Have an account? <a href="/login"> Login! </a></p>

          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
  async function onRegister() {

    if (fname === '') {
      alert("First name is empty")
    }
    else if (!/^[a-zA-Z]*$/g.test(fname)) {
      alert("First Name is Badly Formatted")
    }
    else if (lname === '') {
      alert("Last name is empty")
    }
    else if (!/^[a-zA-Z]*$/g.test(lname)) {
      alert("Last Name is Badly Formatted")
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      alert("Invalid Email Address")
    }
    else if (password.length < 6) {
      alert("Password is too short")
    }
    else {
      try {

        await fetch(`http://127.0.0.1:5000/register?fname=${fname}&lname=${lname}&email=${email}&password=${password}`)
          .then(res => res.json())
          .then(data => alert(data))

        // alert("Register Successful")
        window.location.href = "/login"
      } catch (err) {
        console.log(err)
      }
    }
    //     if (name === '') {
    //         alert('Name field is empty! Please enter your name.')
    //     }
    //     else {
    //         try {

    //             await Firebase.register(name, email, password);
    //             props.history.replace('/');
    //         } catch (error) {
    //             alert(error.message)
    //         }
    //     }
    //     }
  }
}


export default LoginPage;

