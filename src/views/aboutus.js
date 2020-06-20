import React from "react";
import AboutImg from "../images/aboutus.jpg";
import Div from "../images/div.jpg"
import Footer from "../components/footer";
import Header from "../components/Header/Header";
import LeftHeader from "../components/Header/leftheader";
import "../Styles/homeStyle.css";

export default function aboutus() {
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
                backgroundImage: `url(${AboutImg})`,
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
                <h2 class="heading1"> <font color="fead03">About Us</font></h2>
            </div>
            <div style={{
                position: "relative", alignItems: "center", justifyContent: "center", backgroundImage: `url(${Div})`
                , backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", backgroundPosition: "top right",
                paddingLeft: "4vw", paddingRight: "4vw"
            }}>
                <h2 class="heading">Who Are We?</h2>{"\n"}
                <font class="content">Vicky Tailor is an online boutique which take care of all stitching requirements of men, women and kids, be it alterations or fresh stitching or customisation or redo of old saree. We provide doorstep services without any minimum price requirements. We have wide range of fabrics and accessories. Our motive is to make relations not customers. So until and unless our customers are not satisfied with our work, we keep on giving them services.
                Our model of tailoring is not like others who work only for money, we give value to your money and time.</font>

                <div style={{ width: "50%", display: "inline-grid", float: "left" }}>
                    <font class="content">We have a team of the experienced tailor and visionary designers, who can create a perfect outfit with pinch of your taste in it. Even after delivery of outfit, if there is any alteration, we do it again, and deliver it again.

                    We have a separate team for maternity and kids outfits. Maternity outfit are very rarely available, and office going mothers face problem, so in order to resolve their problem we have come out with this section, who takes care of all small needs of pregnant women and new mothers. Same with small kids, it is very difficult to find a dream outfit for small kids, here also we have different section to deal with. You just need to make a call and call a designer at your place, she will create an outfit for you at your doorstep, and home comfort.

                    Tailor junction will full fill all boutique requirements at your home comfort, infact you will get wide range of fabrics and accessories at one click. Our tailor will show you fabric samples and colors that you can choose at doorstep and ask them to get it stitched.
                    </font></div>
                <div style={{ width: "50%", float: "right", paddingInlineStart: "0%" }}>
                    <img src="http://tailorjunction.com/wp-content/uploads/2018/03/formal-wear.jpg" height="500px" width="400px"></img>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}