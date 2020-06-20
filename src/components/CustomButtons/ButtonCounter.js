import React from "react"
import "../../Styles/ButtonCounter.css"

var numbers
var num

export default function SpinnerButton() {

    React.useEffect(() => {
        numbers = document.getElementById('box');
        console.log('ggdd', numbers)
        for (let i = 0; i < 100; i++) {
            var span = document.createElement('span');
            span.textContent = i;
            numbers.appendChild(span);
        }
        num = numbers.getElementsByTagName('span');
    })
    var index = 0;

    function nextNum() {
        num[index].style.display = 'none';
        index = (index + 1) % num.length;
        num[index].style.display = 'initial';
    }
    function prevNum() {
        num[index].style.display = 'none';
        index = (index - 1 + num.length) % num.length;
        num[index].style.display = 'initial';
    }
    return (
        <>
            <div class="container">
                <span class="next" onClick={nextNum}></span>
                <span class="previous" onClick={prevNum}></span>
                <div id='box'></div>
            </div>
        </>
    )
}