// JavaScript Document


const locatieButton = document.querySelector("header nav section:nth-of-type(1) button");
const locatieList = document.querySelector("header nav section:nth-of-type(1) ul");

const locatieButton2 = document.querySelector("header nav section:nth-of-type(2) button");
const locatieList2 = document.querySelector("header nav section:nth-of-type(2) ul");

const hamburger = document.querySelector("header nav > button");
const hamburgerShow = document.querySelector("header nav > ul");

const deVideoButton = document.querySelector("main section:nth-of-type(1) >button");
const deVideo = document.querySelector("main section:nth-of-type(1) >video");
const deVideoButtonImg = document.querySelector("main section:nth-of-type(1) >button img");



locatieButton.onclick = toggleLocaties;

function toggleLocaties() {
    locatieList.classList.toggle("is-open");
}

locatieButton2.onclick = toggleLocaties2;

function toggleLocaties2() {
    locatieList2.classList.toggle("open");
}

hamburger.onclick = menu;

function menu() {
	hamburgerShow.classList.toggle("uitklap");

	if (hamburgerShow.classList.contains("uitklap")) {
		hamburger.querySelector("img").src = 'images/kruis.png';
		hamburger.querySelector("img").alt = 'kruis';
	} else {
		hamburger.querySelector("img").src = 'images/hamburger.png';
		hamburger.querySelector("img").alt = 'hamburger';
	}
}



deVideoButton.onclick = toggleVideo;

function toggleVideo() {
	if ( deVideo.paused === true){
		deVideo.play();
		deVideoButtonImg.src = 'images/pause.png';
		deVideoButtonImg.alt = 'pause';
	}
	else {
		deVideo.pause();
		deVideoButtonImg.src = 'images/play.png';
		deVideoButtonImg.alt = 'play';
	}
}