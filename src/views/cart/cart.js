import React from "react";
import LadiesImg from "../../images/ladies.jpg";
import Footer from "../../components/footer";
import Header from "../../components/Header/Header";
import LeftHeader from "../../components/Header/leftheader";
import "../../Styles/homeStyle.css";
import Table from "react-bootstrap/Table"
import { Button } from "react-bootstrap";
import Div from '../../images/div.jpg'
import Counter from '../../components/counter'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart } from '../../components/actions/cartActions'

function cartpage(props) {
    // console.log('HELLO')
    let total = 0
    // console.log("TOtal",total)
    let womenid=9
    const getitem = JSON.parse(localStorage.getItem("data"))
    let itemList = props.items.map(item => {
        let lsitemcount = 0
        // console.log("item id", item.id)
        // console.log("getdata", getitem)
        if (getitem !== null) {
            let localStorageItem = getitem.find(lsitem => lsitem.id === item.id)

            // console.log("Item present in LS", localStorageItem, "This is Mr. ID", item.id)
            if (localStorageItem) {
                lsitemcount = localStorageItem.value
            }
        }
        if(lsitemcount> 0){
            total=( item.price*lsitemcount)+total
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
            )
        }
        })

    return (
        <>
        <div style={{
                backgroundImage: `url(${LadiesImg})`,
                height: '40vh',
                width: "100%",
                backgroundPosition: "0% 55%",
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
                <h2 class="heading1"> <font color="fead03">Cart</font></h2>
            </div>
            <div style={{
                backgroundImage: `url(${Div})`
                , backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", backgroundPosition: "top right",
                paddingLeft: "8vw", paddingRight: "8vw"
            }}>
                <h2 class="heading">Your Cart</h2>
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
        <h2>Total:
             {total}
        </h2>
        <Button onClick={()=>window.location.reload(true)}>Calculate Total</Button>
                    </div>
                    <Link to='/Cart'><Button> Go to Cart</Button></Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(cartpage)