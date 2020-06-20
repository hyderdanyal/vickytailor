import React, { useState } from "react";
import ContactImg from "../images/contact.jpg";
import Footer from "../components/footer";
import Header from "../components/Header/Header";
import LeftHeader from "../components/Header/leftheader";
import "../Styles/homeStyle.css";
import { render } from "@testing-library/react";
/* eslint-disable react-hooks/rules-of-hooks */


export default function contact() {
    let [fname, setFName] = useState("");
    let [lname, setLName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [service, setService] = useState("");
    let [address, setAddress] = useState("")
    let [city, setCity] = useState("")
    let [message, setMessage] = useState("")
    return (
        <>
            <Header
                brand="Vicky Tailor"
                leftLinks={<LeftHeader />}
                // rightLinks={<HeaderLinks />}
                fixed
                color="black"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }} />
            <div style={{
                backgroundImage: `url(${ContactImg})`,
                height: '40vh',
                width: "100%",
                backgroundPosition: "0% 35%",
                // position: 'relative',
                // backgroundPosition: "center center",
                backgroundSize: "cover",
                // margin: "0",
                top: "100px",
                // padding: "0",
                // border: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundRepeat: 'no-repeat'
            }}>
                <h2 class="heading1"> <font color="fead03">Contact Us</font></h2>
            </div>
            <div style={{ paddingLeft: "3vw", paddingRight: "3vw" }}>
                <h2 class="heading" > <font color="grey"> Ways to get in Touch? </font> </h2>
                <div style={{ backgroundColor: "blue", width: "50%", display: "inline-grid" }}><p>
                    <bold><h2>Gurgaon,Haryana</h2></bold>{"\n"}
                    <h4> Mayfield Garden, Sector 51 Gurgaon, Haryana, India</h4>{"\n"}
                    <h4>95828990XX</h4>{"\n"}
                    <h4>info@vickytailor.com</h4>
                </p></div>
                <div style={{ backgroundColor: "blue", width: "50%", float: "right" }}>
                    <bold><h2>Vijaynagar, Bangalore</h2></bold>{"\n"}
                    <h4>  Near Vijaynagar Pipeline road J.P. park  Jain Temple, Vijaynagar, Bangalore, 560040</h4>{"\n"}
                    <h4>95828990XX</h4>{"\n"}
                    <h4>info@vickytailor.com</h4>
                </div>
            </div>
            <div style={{ paddingLeft: "4vw", paddingRight: "4vw", marginTop: "3vh" }}>
                Book An Appointment
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">First Name</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="First Name" value={fname}
                                onChange={e => setFName(e.target.value)} />
                            {/* <alert>{fname}</alert> */}
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Last Name</label>
                            <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name" value={lname}
                                onChange={e => setLName(e.target.value)} />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">E-mail</label>
                        <input type="email" class="form-control" id="inputAddress" placeholder="xyz@email.com" value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Phone Number</label>
                        <input type="number" class="form-control" id="inputAddress2" placeholder="9983***" value={phone}
                            onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">Service</label>
                        <select id="inputState" class="form-control" value={service} onChange={e => setService(e.target.value)}>
                            <option selected>Choose...</option>
                            <option>Gents</option>
                            <option>Ladies</option>
                            <option>Kids</option>
                        </select>
                        <alert>{service}</alert>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={address}
                            onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">City</label>
                        <select id="inputState" class="form-control" value={city}
                            onChange={e => setCity(e.target.value)}>
                            <option selected>Choose...</option>
                            <option>Haryana</option>
                            <option>Bangalore</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <div class="form-group col-md-6">
                                <label for="inputPassword5">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={() => {
                        try {
                            fetch(`http://127.0.0.1:5000/appointment?fname=${fname}&lname=${lname}&email=${email}&phone=${phone}&service=${service}
                            &address=${address}&city=${city}&message=${message}`)
                            alert("we'll contact you soon")
                            window.location.href = "/contact"
                        } catch (err) {
                            console.log(err)
                        }
                    }}>Submit</button>

                    {/* <input type="submit" name="" value="Submit" onClick={()=> {
                                        try {
                                            
                                            fetch(`${process.env.REACT_APP_API_ADDRESS}/feedback?name=${name}&email=${email}&msg=${message}`)
                                            alert('Feedback Submitted, Thank You!');
                                             window.location.href="/profile"
                                            
                                        } catch (err) {
                                            console.log(err)
                                        }
                                    }} ></input> */}
                </form>
            </div>
            <Footer></Footer>

        </>
    )
}