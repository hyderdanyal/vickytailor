import React from "react";
import LadiesImg from "../../images/ladies.jpg";
import Footer from "../../components/footer";
import Header from "../../components/Header/Header";
import LeftHeader from "../../components/Header/leftheader";
import "../../Styles/homeStyle.css";
import Table from "react-bootstrap/Table"
import { Button } from "react-bootstrap";
import Div from '../../images/div.jpg'

export default function ladies() {
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
                backgroundImage: `url(${LadiesImg})`,
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
                <h2 class="heading1"> <font color="fead03">Custom Tailoring for Women</font></h2>
            </div>
            <div style={{
                backgroundImage: `url(${Div})`
                , backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", backgroundPosition: "top right",
                paddingLeft: "8vw", paddingRight: "8vw"
            }}>
                <h2 class="heading">Custom Tailoring for Women</h2>
                <div>
                    <Table class="table" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Add to Cart</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Simple kurti without lining</td>
                                <td>450 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple kurti with lining</td>
                                <td>650 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple salwar suit without lining</td>
                                <td>600 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple salwar suit with kurti lining</td>
                                <td>850 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple salwar suit with full lining</td>
                                <td>1200 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple pant suit without lining</td>
                                <td>950 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple pant suit with half lining</td>
                                <td>1200 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple pant suit with full lining</td>
                                <td>1500 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple blouse</td>
                                <td>550 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple blouse with lining</td>
                                <td>750 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple skirt umbrella cut</td>
                                <td>1200 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple anarkali dress</td>
                                <td>2500 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Simple lehenga choli</td>
                                <td>3500 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td>Saree fall pico</td>
                                <td>350 Rs</td>
                                <td><Button>Add to Cart</Button></td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}