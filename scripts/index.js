let randomBarsArray = [];
let arraySizeSlider = document.getElementById("array-size-slider");
document.querySelector("#animation-speed-slider").disabled = true;

//Initial array generated when site is opened
generateRandomArray();

//Function to generate an array
function generateRandomArray() {
    randomBarsArray.length = 0;
    const bars = document.querySelector("#bars");

    console.log(bars);
    let arraySize = arraySizeSlider.value;
    bars.innerHTML = "";

    for (let i = 0; i < arraySize; i++) {
        randomBarsArray.push(getRandomInt(5, 700));
    }

    for (let i = 0; i < arraySize; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${randomBarsArray[i] / 1.5}px`;
        bar.classList.add("bar");
        bar.classList.add("bar-item");
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

//Generates random numbers: [5,600]
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Swap function for sort algos
function swap(a, b) {
    let tempHeight = a.style.height;
    a.style.height = b.style.height;
    b.style.height = tempHeight;
}

//Updates generated array when array size is changed
arraySizeSlider.addEventListener("input", generateRandomArray);

//Stores all sorting array methods
const sortTypes = [
    "#insertion-sort",
    "#merge-sort",
    "#quick-sort",
    "#selection-sort",
    "#bubble-sort",
];

//Disables everything except speed and the ongoing sorting algo
function disableInputs() {
    for (i in sortTypes) {
        document.querySelector(sortTypes[i]).disabled = true;
    }
    document.querySelector("#random-button").disabled = true;
    document.querySelector("#array-size-slider").disabled = true;
    document.querySelector("#animation-speed-slider").disabled = false;
}

//Enables all inputs
function enableInputs() {
    for (i in sortTypes) {
        console.log(document.querySelector(sortTypes[i]));
        document.querySelector(sortTypes[i]).disabled = false;
    }
    document.querySelector("#random-button").disabled = false;
    document.querySelector("#array-size-slider").disabled = false;
    document.querySelector("#animation-speed-slider").disabled = true;
}

let waitTime = 250;
function animate(milisec) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, milisec);
    });
}

let animespeed = document.getElementById("animation-speed-slider");
animespeed.addEventListener("input", () => {
    waitTime = 250 / parseInt(animespeed.value);
});
