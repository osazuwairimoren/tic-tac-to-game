// DOM values
let inputs = document.querySelectorAll(".inputs");
let checker = document.querySelector(".checker");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");
let input5 = document.querySelector("#input5");
let input6 = document.querySelector("#input6");
let input7 = document.querySelector("#input7");
let input8 = document.querySelector("#input8");
let input9 = document.querySelector("#input9");
let turns = document.querySelectorAll(".turns");
let turnss = document.querySelector("#turns");
let restart = document.querySelector("#restart");
let win = document.querySelector("#wins");
let cpuMode = document.querySelector("#cpuMode");
let stopp = document.querySelector(".stop");

// restart game
restart.addEventListener("click", function () {
    location.reload();
});

// for next players turn
let inputArrays = ["O"];
let interval;
let timeOut;
// automatic checker
function checkInputs() {
    if (inputArrays.length > 4) {
        interval = setInterval(() => {
            checker.click();
        }, 500);
    }
}
// for next players turn and changing color of inputs
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function () {
        if (inputArrays[inputArrays.length - 1] == "X") {
            inputs[i].value = "O";
            inputArrays.push("O");
            inputs[i].style.color = "yellow";
            turns[0].innerHTML = "X";
        } else if (inputArrays[inputArrays.length - 1] == "O") {
            inputs[i].value = "X";
            inputArrays.push("X");
            inputs[i].style.color = "green";
            turns[0].innerHTML = "O";
        }
        inputs[i].disabled = true;
        checkInputs();
    });

    // computer playing mode
    let cpuPlayingMode = false;
    let timeOut;
    // random shuffled array to make computer unpredictable
    //////////// ill create an array of numbers 0 - 8, then ill find
    // an algorithm for shuffling the array thrn push it into a new array...
    // then ill index the array in my cpuclick function like it is already
    // shuffle array function
    function shuffleArray(arr) {
        let newArr = arr.sort(() => {
            return 0.5 - Math.random();
        });
        return newArr;
    }
    let noramlArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let randomArray = shuffleArray(noramlArray);
    function cpuClick() {
        timeOut = setTimeout(() => {
            if (inputs[randomArray[0]].disabled !== true) {
                inputs[randomArray[0]].click();
            } else if (inputs[randomArray[1]].disabled !== true) {
                inputs[randomArray[1]].click();
            } else if (inputs[randomArray[2]].disabled !== true) {
                inputs[randomArray[2]].click();
            } else if (inputs[randomArray[3]].disabled !== true) {
                inputs[randomArray[3]].click();
            } else if (inputs[randomArray[4]].disabled !== true) {
                inputs[randomArray[4]].click();
            } else if (inputs[randomArray[5]].disabled !== true) {
                inputs[randomArray[5]].click();
            } else if (inputs[randomArray[6]].disabled !== true) {
                inputs[randomArray[6]].click();
            } else if (inputs[randomArray[7]].disabled !== true) {
                inputs[randomArray[7]].click();
            } else if (inputs[randomArray[8]].disabled !== true) {
                inputs[randomArray[8]].click();
            }
            stopp.click();
        }, 10);
    }
    // toggle cpu playing mode state
    cpuMode.addEventListener("click", function () {
        inputs[i].onclick = cpuClick;
        cpuPlayingMode = !cpuPlayingMode;
    });
    // automatically stop(inplemented manually)
    stopp.addEventListener("click", function () {
        clearTimeout(timeOut);
    });
    // general win validation/checking
    function winValidation() {
        setTimeout(() => {
            win.style.color = "white";
            clearInterval(interval);
            inputs[i].disabled = true;
            if (
                cpuPlayingMode === true &&
                inputArrays[inputArrays.length - 1] !== "X"
            ) {
                turnss.innerHTML = "CPU";
                clearInterval(interval);
            } else if (
                cpuPlayingMode !== true &&
                inputArrays[inputArrays.length - 1] !== "O"
            ) {
                turnss.innerHTML = "X";
                clearInterval(interval);
            }
        }, 100);
        setTimeout(() => {
            restart.click();
        }, 7000);
    }
    // checking if inputs correspond
    checker.addEventListener("click", function () {
        // checking if win is valid (not winning if inputs are empty)
        if (
            input1.value == input2.value &&
            input1.value == input3.value &&
            input1.value.length !== 0
        ) {
            input1.style.backgroundColor = "blue";
            input2.style.backgroundColor = "blue";
            input3.style.backgroundColor = "blue";
            if (cpuPlayingMode === false) {
                turnss.innerHTML = input1.value;
            }
            winValidation();
        } else if (
            input3.value == input6.value &&
            input3.value == input9.value &&
            input3.value.length !== 0
        ) {
            input3.style.backgroundColor = "blue";
            input6.style.backgroundColor = "blue";
            input9.style.backgroundColor = "blue";
            if (cpuPlayingMode === false) {
                turnss.innerHTML = input3.value;
            }
            winValidation();
        } else if (
            input9.value == input8.value &&
            input9.value == input7.value &&
            input9.value.length !== 0
        ) {
            input7.style.backgroundColor = "blue";
            input8.style.backgroundColor = "blue";
            input9.style.backgroundColor = "blue";
            if (cpuPlayingMode === false) {
                turnss.innerHTML = input7.value;
            }
            winValidation();
        } else if (
            input7.value == input4.value &&
            input7.value == input1.value &&
            input7.value.length !== 0
        ) {
            input1.style.backgroundColor = "blue";
            input4.style.backgroundColor = "blue";
            input7.style.backgroundColor = "blue";
            if (cpuPlayingMode === false) {
                turnss.innerHTML = input1.value;
            }
            winValidation();
        } else if (
            input1.value == input5.value &&
            input1.value == input9.value &&
            input1.value.length !== 0
        ) {
            input1.style.backgroundColor = "blue";
            input5.style.backgroundColor = "blue";
            input9.style.backgroundColor = "blue";
            if (cpuPlayingMode === false) {
                turnss.innerHTML = input1.value;
            }
            winValidation();
        } else if (
            input3.value == input5.value &&
            input3.value == input7.value &&
            input3.value.length !== 0
        ) {
            input3.style.backgroundColor = "blue";
            input5.style.backgroundColor = "blue";
            input7.style.backgroundColor = "blue";
            if (cpuPlayingMode === false) {
                turnss.innerHTML = input3.value;
            }
            winValidation();
        } else if (
            input2.value == input5.value &&
            input2.value == input8.value &&
            input2.value.length !== 0
        ) {
            input2.style.backgroundColor = "blue";
            input5.style.backgroundColor = "blue";
            input8.style.backgroundColor = "blue";
            if (cpuPlayingMode === false) {
                turnss.innerHTML = input2.value;
            }
            winValidation();
        } else if (
            input4.value == input5.value &&
            input4.value == input6.value &&
            input4.value.length !== 0
        ) {
            input4.style.backgroundColor = "blue";
            input5.style.backgroundColor = "blue";
            input6.style.backgroundColor = "blue";
            if (cpuPlayingMode === false) {
                turnss.innerHTML = input4.value;
            }
            winValidation();
        }
    });
}
