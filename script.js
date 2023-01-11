"use strict";
const wrapper = document.querySelector(".wrapper"),
	countdown = document.querySelector(".countdown"),
	timerSet = document.querySelector(".countdown span"),
	qrInput = document.querySelector(".form input"),
	generateBtn = document.querySelector(".form button"),
	qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
	let qrValue = qrInput.value;
	let timer = +(timerSet.dataset.timer);
	if (!qrValue) return; //if the input is empty then return form here
	generateBtn.innerText = "Generating QR Code ...";
	//getting a QR code of user entered value using the qrserver
	// api and passing the api returned img src to qrImg
	qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
	qrImg.addEventListener("load", () => {
		setTimeout(() => {
			wrapper.classList.add("active");
			countdown.classList.add("active");
			generateBtn.innerText = "This is your code";
		}, 1000);
	});

	setTimeout(() => {
		qrInput.value = "";
		generateBtn.innerText = "Generate QR Code";
		wrapper.classList.remove("active");
		countdown.classList.remove("active");
	}, timer * 1000);

	const initCounter = setInterval(() => {
		if (timer > 0) {
			timer--;
			return timerSet.innerHTML = `${timer}`;
		}
	}, 1000);
});


qrInput.addEventListener("keyup", () => {
	if (!qrInput.value) {
		wrapper.classList.remove("active");
	}
});