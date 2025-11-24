// JavaScript Document
console.log("hi");


const locatieButton = document.querySelector("header nav section:nth-of-type(1) button");
const locatieList = document.querySelector("header nav section:nth-of-type(1) ul");

const locatieButton2 = document.querySelector("header nav section:nth-of-type(2) button");
const locatieList2 = document.querySelector("header nav section:nth-of-type(2) ul");

const hamburger = document.querySelector("header nav > button");
const hamburgerShow = document.querySelector("header nav > ul");


// locatieButton.onpointerenter = toggleLocaties;
locatieButton.onclick = toggleLocaties;
// locatieButton.onpointerleave = toggleLocaties;

function toggleLocaties() {
    locatieList.classList.toggle("is-open");
}

// locatieButton2.onpointerenter = toggleLocaties2;
locatieButton2.onclick = toggleLocaties2;
// locatieButton2.onpointerleave = toggleLocaties2;

function toggleLocaties2() {
    locatieList2.classList.toggle("open");
}

hamburger.onclick = menu;

function menu() {
    hamburgerShow.classList.toggle("uitklap");
}