import React from "react";
import BackgroundImage from "../images/cutting_fabric_x1.jpg"
import { Card } from 'react-bootstrap'
import Footer from "../components/footer";
import Header from "../components/Header/Header";
import LeftHeader from "../components/Header/leftheader";
// import HeaderLinks from "../components/Header/HeaderLinks";
import "../Styles/homeStyle.css";
import SpinnerButton from "../components/CustomButtons/ButtonCounter"

async function contact() {
  window.location.href = '/contact';
}

export default function Home() {
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
        }}
      />
      <div style={{
        backgroundImage: `url(${BackgroundImage})`,
        height: '100vh',
        width: "100%",
        // position: 'relative',
        // backgroundPosition: "center center",
        backgroundSize: "cover",
        // margin: "0",
        // padding: "0",
        // border: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundRepeat: 'no-repeat'
      }}>
        <p class="ok">
          <h2 class="heading">Custom Tailoring At Your Doorstep</h2>{"\n"}
            -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

          <h5 class="txt1"> Our highly trained tailors and on time delivery ensures that you get </h5>
          <h5 class="txt" >your garment stitched exactly the way you want it and when you want it.
              </h5>
          <button class="login-btn" onClick={contact}  >Book an Appointment </button>

        </p>
      </div>
      <div>
        <div style={{
          backgroundColor: 'pink',
          // height: '80vh',
          width: "100%",
          display: 'flex',
          alignItems: "center",
          justifyContent: "center"
        }}>
          <p>
            <h2>How Does Vicky Tailor work ?</h2>{"\n"}
            <h3>It's simple, affordable and risk free</h3>{"\n"}
          </p>
        </div>
        <div style={{
          backgroundColor: 'pink',
          // height: '80vh',
          width: "100%",
          display: 'flex',
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Card style={{ width: '20vw' }}>
            <Card.Img variant="top" src="http://tailorjunction.com/wp-content/uploads/2018/02/measure-up.png" />
            <Card.Body>
              <Card.Title>Pick</Card.Title>
              <Card.Text>
                Once you book the appointment, our representative will call you and a time will be scheduled for the pickup, then tailor will take measurements and pick your fabric.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <Card style={{ width: '20vw' }}>
            <Card.Img variant="top" src="http://tailorjunction.com/wp-content/uploads/2018/02/design.png" />
            <Card.Body>
              <Card.Title>Stitch</Card.Title>
              <Card.Text>
                Outfit will be stitched under experts guidance.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <Card style={{ width: '20vw' }}>
            <Card.Img variant="top" src="http://tailorjunction.com/wp-content/uploads/2018/02/get-product-on-your-doorstep.png" />
            <Card.Body>
              <Card.Title>Deliver</Card.Title>
              <Card.Text>
                After stitching the outfit will be delivered at your place, and if there will be any alteration required, the tailor will redo again and redeliver it at your place.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
      <div style={{
        backgroundColor: '#FDAB9F',
        // height: '80vh',
        width: "100%",
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
      }}>
        <p><center><h2>Our Services </h2></center>

          <h3>From everyday clothing such as jeans to men suits or dresses,
            we modify and tailor as per your requests with great results. </h3></p>
      </div>
      <div style={{
        backgroundColor: '#FDAB9F',
        // height: '80vh',
        // width: "100%",
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        paddingInlineStart: "6vw",
        paddingBlockEnd: "2vh"
      }}>
        <div>
          <a href="/Men">
            <img src="http://tailorjunction.com/wp-content/uploads/2018/05/custom-tailoring-for-men.jpg" alt="Men" width="80%" z-index="-1">
            </img></a>

        </div>
        <div>
          <a href="/ladies">
            <img src="http://tailorjunction.com/wp-content/uploads/2018/05/custom-tailoring-services-for-women.jpg" alt="Women" width="80%" z-index="-1">
            </img></a>
        </div>
        <div>
          <a href="/kids">
            <img src="http://tailorjunction.com/wp-content/uploads/2018/05/custom-tailoring-for-kids-2.jpg" alt="Kids" width="80%" z-index="-1">
            </img></a>
        </div>

      </div >
      <Footer></Footer>
    </>
  );
}
