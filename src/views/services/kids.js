import React from "react";
import KidsImg from "../../images/kids.jpg";
import Footer from "../../components/footer";
import Header from "../../components/Header/Header";
import LeftHeader from "../../components/Header/leftheader";
import "../../Styles/homeStyle.css";
import Div from "../../images/div.jpg"
import Coming from "../../images/comingsoon.jpg"

export default function kids() {
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
                backgroundImage: `url(${KidsImg})`,
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
                <h2 class="heading1"> <font color="fead03">Custom Tailoring for Kids</font></h2>
            </div>
            <div style={{
                position: "relative", alignItems: "center", justifyContent: "center", paddingLeft: "4vw", paddingRight: "4vw",
                backgroundImage: `url(${Coming})`
                , backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", backgroundPosition: "top right",
                paddingLeft: "8vw", paddingRight: "8vw"
            }}>
                <div style={{ top: "40vh", position: "relative" }}>
                    <h2 class="heading2"><center>Custom Tailoring for Kids</center></h2>{"\n"}
                    <font class="content2">It is very difficult to go out with your kid in search of outfit, so here we are providing customised doorstep services for your kids, be it girl or boy. Please check our previous customers outfits also.</font>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}