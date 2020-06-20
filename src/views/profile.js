import React from "react"
import ProfileImg from "../images/profile.jpg";
import Footer from "./../components/footer";
import Header from "./../components/Header/Header";
import LeftHeader from "./../components/Header/leftheader";
import "../Styles/homeStyle.css";
/* eslint-disable react-hooks/rules-of-hooks */




const profile = () => {
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
                backgroundImage: `url(${ProfileImg})`,
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
            <div>
                Track Orders
                Edit Profile
                Edit Address
                Edit Details
            </div>

        </>
    )
}
export default profile