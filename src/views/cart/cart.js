import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../../components/actions/cartActions'
import Recipe from './Recipe'

class Cart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {
        // console.log('SESS', Session.get('cart'))
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                {/* <p>{item.desc}</p> */}
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}>arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <>
                <br></br><br></br><br></br><br></br>
                <div className="container">
                    <div className="cart">
                        <h5>You have ordered:</h5>
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    </div>
                    <Recipe />
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)


























// import React, { useState } from "react";
// import CartImg from "../../images/cart.jpg";
// import Footer from "./../../components/footer";
// import Header from "./../../components/Header/Header";
// import LeftHeader from "./../../components/Header/leftheader";
// import "../../Styles/homeStyle.css";
// import Table from "react-bootstrap/Table"
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Counter from "../../components/counter"
// import { connect } from 'react-redux'
// import { removeItem, addQuantity, subtractQuantity } from '../../components/actions/cartActions'



// function cart(props) {

//     //to remove the item completely
//     const handleRemove = (id) => {
//         props.removeItem(id);
//     }
//     //to add the quantity
//     const handleAddQuantity = (id) => {
//         props.addQuantity(id);
//     }
//     //to substruct from the quantity
//     const handleSubtractQuantity = (id) => {
//         props.subtractQuantity(id);
//     }
//     // console.log(props.addedItems)
//     let addedItems = props.items.length ?
//         (
//             props.items.map(item => {
//                 return (

//                     <li className="collection-item avatar" key={item.id}>
//                         {/* <div className="item-img"> 
//                                         <img src={item.img} alt={item.img} className=""/>
//                                     </div> */}

//                         <div className="item-desc">
//                             <span className="title">{item.title}</span>
//                             {/* <p>{item.desc}</p> */}
//                             <p><b>Price: {item.price}$</b></p>
//                             <p>
//                                 <b>Quantity: {item.quantity}</b>
//                             </p>
//                             <div className="add-remove">
//                                 <Link to="/cart"><i className="material-icons" onClick={() => { handleAddQuantity(item.id) }}>+</i></Link>
//                                 <br></br>
//                                 <Link to="/cart"><i className="material-icons" onClick={() => { handleSubtractQuantity(item.id) }}>-</i></Link>
//                             </div>
//                             <button className="waves-effect waves-light btn pink remove" onClick={() => { handleRemove(item.id) }}>Remove</button>
//                         </div>

//                     </li>
//                 )
//             })
//         ) :

//         (
//             <p>Nothing.</p>
//         )

//     return (
//         <>

//             <div style={{
//                 backgroundImage: `url(${CartImg})`,
//                 height: '40vh',
//                 width: "100%",
//                 backgroundPosition: "0% 35%",
//                 // position: 'relative',
//                 // backgroundPosition: "center center",
//                 backgroundSize: "cover",
//                 // margin: "0",
//                 top: "100px",
//                 // padding: "0",
//                 // border: "0",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 backgroundRepeat: 'no-repeat'
//             }}>
//                 <h2 class="heading1"> <font color="fead03">Cart</font></h2>
//             </div>
//             <div>
//                 Your Shopping Cart
//                 {/* <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Product</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Total</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <th><Counter></Counter></th>
//                         </tr>
//                         <td></td>
//                     </tbody>
//                 </Table> */}
//                 <div className='cart'>
//                     <ul className='collection'>
//                         {addedItems}
//                     </ul>
//                 </div>
//             </div>
//             <div>
//                 Cart Total={props.total}
//                 <Link to="/checkout"><Button >Proceed to checkout
//                 </Button></Link>
//             </div>
//             <Footer></Footer>
//         </>
//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         items: state.addedItems
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeItem: (id) => { dispatch(removeItem(id)) },
//         addQuantity: (id) => { dispatch(addQuantity(id)) },
//         subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(cart)