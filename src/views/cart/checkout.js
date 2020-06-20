import React, { useState } from "react";
import CartImg from "../../images/cart.jpg";
import Footer from "./../../components/footer";
import Header from "./../../components/Header/Header";
import LeftHeader from "./../../components/Header/leftheader";
import "../../Styles/homeStyle.css";
/* eslint-disable react-hooks/rules-of-hooks */

const checkout = () => {
    let [fname, setFName] = useState("");
    let [lname, setLName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [address, setAddress] = useState("")
    let [city, setCity] = useState("")
    let [zip, setZip] = useState("")
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
                backgroundImage: `url(${CartImg})`,
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
                <h2 class="heading1"> <font color="fead03">Checkout</font></h2>
            </div>
            <div style={{
                backgroundColor: "pink"
            }}>
                Have an account <a href="/login">Login</a>
            </div>
            <div style={{
                backgroundColor: "pink"
            }}>
                Create an account <a href="/register">Register</a>
            </div>
            <div>
                Purchase as a guest
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">First Name</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="First Name" value={fname}
                                onChange={e => setFName(e.target.value)} />
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
                        <label for="inputAddress2">ZipCode</label>
                        <input type="number" class="form-control" id="inputAddress2" placeholder="400306" value={zip}
                            onChange={e => setZip(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary"
                    // onClick={() => {
                    // try {
                    //     fetch(`http://127.0.0.1:5000/feedback?fname=${fname}&lname=${lname}&email=${email}&phone=${phone}&service=${service}
                    //     &address=${address}&city=${city}&message=${message}`)
                    //     alert("we'll contact you soon")
                    //     window.location.href = "/contact"
                    // } catch (err) {
                    //     console.log(err)
                    // }
                    // }}
                    >Place Order</button>

                </form>
            </div>
            <Footer></Footer>
        </>
    )
}
export default checkout