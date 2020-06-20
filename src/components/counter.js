import React, { useState, useEffect } from 'react'

let data = []
const getitem = JSON.parse(localStorage.getItem("data"))
if (getitem) {
    data = getitem
}


// var counter
const Counter = (props) => {
    console.log("VLAUES", props.value, "ID", props.id)
    let [count, setCount] = useState(props.value)
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
        if (count > 0) {

            setCount(count - 1)
            let a = count - 1
            console.log(props.value, ' quantity in cart ', a)
            let cart = {
                id: props.value,
                value: a
            }
            console.log("cart decrease", cart)
            let b = data.filter(data1 => data1.id === props.value)

            if (b.length > 0) {
                cart.value = a
                // console.log("value", cart.value)
                // localStorage.setItem(props.value, cart.value)
                // let index = data.findIndex(element => element.id === props.value)
                let index = props.value
                // console.log("id", index)
                const valueatindex = data.findIndex(element => element.id === props.value)
                // console.log("indexx", valueatindex)
                // let indexval = data[valueatindex]
                // console.log("indexvalue", indexval)
                data[valueatindex] = {
                    id: index,
                    value: cart.value
                }
                localStorage.setItem("data", JSON.stringify(data))



                console.log("Data exists", data)
            }
        }
        else {
            console.log("No data")
        }

    }
    const increase = () => {

        setCount(count + 1)
        let a = count + 1

        console.log(props.value, ' quantity in cart ', a)
        let cart = {
            id: props.value,
            value: a
        }
        let b = data.filter(data1 => data1.id === props.value)

        if (b.length > 0) {
            cart.value = a
            // console.log("value", cart.value)
            // localStorage.setItem(props.value, cart.value)
            // let index = data.findIndex(element => element.id === props.value)
            let index = props.value
            // console.log("id", index)
            const valueatindex = data.findIndex(element => element.id === props.value)
            // console.log("indexx", valueatindex)
            // let indexval = data[valueatindex]
            // console.log("indexvalue", indexval)
            data[valueatindex] = {
                id: index,
                value: cart.value
            }
            localStorage.setItem("data", JSON.stringify(data))



            console.log("Data exists", data)
        }
        // console.log("set", s)
        else {
            data.push(cart)
            localStorage.setItem("data", JSON.stringify(data))
            console.log("data1", data)
        }
    }
    return (
        <div>
            <button onClick={decrease}>-</button>
            <text>{count}</text>
            <button onClick={increase}>+</button>
        </div>
    )
}
export default Counter