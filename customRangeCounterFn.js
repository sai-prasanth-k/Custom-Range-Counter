let startBtnElement = document.getElementById("startBtn");
let counterTextElement = document.getElementById("counterText");

let fromUserInputElement = document.getElementById("fromUserInput");
let toUserInputElement = document.getElementById("toUserInput");


function counterFn(fromVal, toVal) {
    let currentIntCount = fromVal;
    counterTextElement.textContent = currentIntCount;
    let timerId = setInterval(function() {
        if (currentIntCount < toVal) {
            currentIntCount += 1;
            counterTextElement.textContent = currentIntCount;
        }else {
            clearInterval(timerId);
        }
    },1000);
}

function counterRange() {
    let fromUserVal = fromUserInputElement.value;
    let toUserVal = toUserInputElement.value;
    
    if (fromUserVal === "" || toUserVal === "") {
        alert("Enter the value");
        return;
    }else {
        let fromUserValInt = parseInt(fromUserVal);
        let toUserValInt = parseInt(toUserVal);
        counterFn(fromUserValInt, toUserValInt);
    }
}

startBtnElement.addEventListener("click", counterRange);