import React, { useEffect } from "react";
import MenImg from "../../images/men.jpg";
import Footer from "../../components/footer";
// import Header from "../../components/Header/Header";
// import LeftHeader from "../../components/Header/leftheader";
import "../../Styles/homeStyle.css";
import Table from "react-bootstrap/Table"
// import SpinnerButton from "../../components/CustomButtons/ButtonCounter"
import Div from "../../images/div.jpg"
import Counter from '../../components/counter'
import { connect } from 'react-redux'
import { Button } from "@material-ui/core";
import { addToCart } from '../../components/actions/cartActions'
import { Link } from 'react-router-dom'
// import { Session } from 'bc-react-session'

// var counter
function men(props) {

    // counter = [{ id: 1 }]
    // Session.start('cart', {
    //     payload: {
    //         id: counter
    //     },
    //     expiration: 3600000
    // })
    // Session.set('cart', counter)
    // console.log('SESSION', Session.get('cart'))
    const getitem = JSON.parse(localStorage.getItem("data"))
    // console.log("Get data at index 0 ", getitem[0].id)

    // useEffect(() => {
    //     let id=document.getElementById

    // })
    // const handleStart = (id) => {

    //     // console.log('TEST', getitem[i].id)

    // }
    // console.log(props.items)
    // var quantity = localStorage.getItem('Quantity')
    // console.log("hahaha", quantity)
    // const handleClick = (id) => {
    //     props.addToCart(id)
    //     // console.log("props", addToCart(id))

    // }
    let itemList = props.items.map(item => {
        let lsitemcount = 0
        console.log("item id", item.id)
        console.log("getdata", getitem)
        if (getitem !== null) {
            let localStorageItem = getitem.find(lsitem => lsitem.id === item.id)

            console.log("Item present in LS", localStorageItem, "This is Mr. ID", item.id)
            if (localStorageItem) {
                lsitemcount = localStorageItem.value
            }
        }



        // for (var i in getitem) {
        //     if (getitem[i].id === item.id) {
        //         console.log('TEST', getitem[i].id, getitem[i].value)
        //         counter = getitem[i].value
        //         console.log('COUNTER', counter)

        //         // console.log('PHASE1', document.getElementById(String(id)))
        //     }
        //     else {
        //         counter = 0
        //     }
        // }
        // console.log("babababa", item.id)
        return (
            <Table>
                <tbody>
                    <tr>
                        <td>{item.title}</td>
                        <td> Rs. {item.price}</td>

                        <Counter id={item.id} value={lsitemcount}
                        // value={item.id} 
                        // counter={counter}
                        ></Counter>
                    </tr>
                </tbody>
            </Table>
            // <div className="card" key={item.id}>
            //     {/* <div className="card-image"> */}
            //     {/* <img src={item.img} alt={item.title} /> */}
            //     <span className="card-title">{item.title}</span>

            //     {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span> */}
            //     {/* </div > */}

            //     {/* <div className="card-content"> */}
            //     {/* <p>{item.desc}</p> */}
            //     <p><b>Price: Rs.{item.price}</b></p>
            //     <Button onClick={handleClick(item.id)}>Add</Button>
            //     {/* </div> */}
            // </div >
        )
    })

    return (
        <>

            {/* <Header
                brand="Vicky Tailor"
                leftLinks={<LeftHeader />}
                // rightLinks={<HeaderLinks />}
                fixed
                color="black"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }} /> */}
            <div style={{
                backgroundImage: `url(${MenImg})`,
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
                <h2 class="heading1"> <font color="fead03">Custom Tailoring for Men</font></h2>
            </div>
            <div style={{
                backgroundImage: `url(${Div})`
                , backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", backgroundPosition: "top right",
                paddingLeft: "8vw", paddingRight: "8vw"
            }}>
                <h2 class="heading">Custom Tailoring for Men</h2>
                <div >
                    <div className="box">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Add to Cart</th>
                                </tr>
                            </thead>

                        </Table>
                        {itemList}
                    </div>
                    <Link to='/Cart'><Button> Go to Cart</Button></Link>


                    {/* <Table striped bordered hover size="lg">
                        <thead>
                        <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Add to Cart</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td>Simple shirt</td>
                        <td>600 Rs</td>
                        <Counter value='1'  ></Counter>
                        </tr>
                        <tr>
                        <td>Simple coat</td>
                                <td>3000 Rs</td>
                                <Counter value='2'></Counter>
                                </tr>
                                <tr>
                                <td>Waist coat</td>
                                <td>1000 Rs</td>
                                <Counter value='3'></Counter>
                                </tr>
                                <tr>
                                <td>2 peice suit</td>
                                <td>3500 Rs</td>
                                <td><Counter value='4' /></td>
                                </tr>
                                <tr>
                                <td>3 peice suit</td>
                                <td>4500 Rs</td>
                                <td><Counter value='5' /></td>
                                </tr>
                                <tr>
                                <td>Tuxedo suit</td>
                                <td>4000 Rs</td>
                                <td><Counter value='6' /></td>
                                </tr>
                                <tr>
                                <td>Pathani </td>
                                <td>1350 Rs</td>
                                <td><Counter value='7' /></td>
                                </tr>
                                <tr>
                                <td>Kurta payjama</td>
                                <td>1200 Rs</td>
                                <td><Counter value="8" /></td>
                                </tr>
                                
                                
                                </tbody>
                            </Table> */}
                </div>
            </div>
            <Footer></Footer>
        </>
    )

}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(men)