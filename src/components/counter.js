import React, { useState, useEffect } from 'react'
import Cart from "../views/cart/cart"
// import cart from '../views/cart/cart'
import { Session } from 'bc-react-session';

let userId="46bec7ca-1dde-42e4-924f-42f5af09c55b"
let data = []
const session = Session.get();

if(session.isValid){
    console.log("propss",userId)
    fetch(`http://127.0.0.1:5000/getcart?userid=${userId}`)
          .then(res => res.json())
          .then(data => {
          })
}
else{
   console.log("propss",userId)
const getitem = JSON.parse(localStorage.getItem("data"))
}

// var counter
const Counter = (props) => {
    
    // if (getitem) {
    //     data = getitem
    // }
    // console.log("VLAUES", props.value, "ID", props.id)
    let [count, setCount] = useState(props.value)
    let [cartValue,setCartValue]=useState([])
    // useEffect(() => {

    //     for (var i in getitem) {
    //         if (getitem[i].id === props.value) {
    //             counter = getitem[i].value
    //             setCount(counter)
    //         }
    //         else {
    //             counter = 0
    //             setCount(counter)
    //         }
    //     }
    // })

    // useEffect(() => {
    //     if (props.counter > 0)
    //         setCount(props.counter)
    // })
    const decrease = () => {
        if (count > 1) {

            setCount(count - 1)
            let a = count - 1
            // console.log(props.value, ' quantity in cart ', a)
            let cart = {
                id: props.id,
                value: a
            }
            // console.log("cart decrease", cart)
            let b = data.filter(data1 => data1.id === props.id)

            if (b.length > 0) {
                cart.value = a
                // console.log("value", cart.value)
                // localStorage.setItem(props.value, cart.value)
                // let index = data.findIndex(element => element.id === props.value)
                let index = props.id
                // console.log("id", index)
                const valueatindex = data.findIndex(element => element.id === props.id)
                // console.log("indexx", valueatindex)
                // let indexval = data[valueatindex]
                // console.log("indexvalue", indexval)
                data[valueatindex] = {
                    id: index,
                    value: cart.value
                }
                localStorage.setItem("data", JSON.stringify(data))



                // console.log("Data exists", data)
            }
        }
        else if(count === 1){
            console.log("0 hai")
            setCount(count - 1)
            let a = count - 1
            
            let cart = {
                id: props.id,
                value: a
            }
            
            let b = data.filter(data1 => data1.id === props.id)
            // console.log("bbb",b)
            // localStorage.setItem("b", JSON.stringify(b))
            // localStorage.removeItem("b")
            if (b.length > 0) {
                cart.value = a
                let index = props.id
                const valueatindex = data.findIndex(element => element.id === props.id)
                    data[valueatindex] = {
                    id: index,
                    value: cart.value
                }
                // localStorage.setItem("valueatidex", JSON.stringify(data[valueatindex]))
                let aa= data.splice(valueatindex)
                // localStorage.setItem("delete", JSON.stringify(aa))
                localStorage.setItem("data", JSON.stringify(data))
            }
            window.location.reload(true)
            // CartPage
        }
        else {
            
            console.log("No data")
        }

    }
    const increase = () => {

        setCount(count + 1)
        let a = count + 1

        // console.log(props.id, ' quantity in cart ', a)
        let cart = {
            id: props.id,
            value: a
        }
        let b = data.filter(data1 => data1.id === props.id)

        if (b.length > 0) {
            cart.value = a
            // console.log("value", cart.value)
            // localStorage.setItem(props.value, cart.value)
            // let index = data.findIndex(element => element.id === props.value)
            let index = props.id
            // console.log("id", index)
            const valueatindex = data.findIndex(element => element.id === props.id)
            // console.log("indexx", valueatindex)
            // let indexval = data[valueatindex]
            // console.log("indexvalue", indexval)
            data[valueatindex] = {
                id: index,
                value: cart.value
            }
            localStorage.setItem("data", JSON.stringify(data))



            // console.log("Data exists", data)
        }
        // console.log("set", s)
        else {
            data.push(cart)
            localStorage.setItem("data", JSON.stringify(data))
            // console.log("data1", data)
        }
    }
    return (
        <div>
            <button onClick={decrease}>-</button>
            {/* <input value={count}></input> */}
            <text>{count}</text>
            <button onClick={increase}>+</button>
        </div>
    )
}
export default Counter