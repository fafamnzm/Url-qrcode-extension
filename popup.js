const QRCode = require("qrcode");
const canvas = document.getElementById("canvas");

// document.getElementById("url").value = window.location.href;

// let url = document.getElementById("url").value;

// function updateUrl() {
// 	url = document.getElementById("url").value;
// 	generateCode();
// }

// function generateCode() {
// 	QRCode.toCanvas(canvas, url, function (error) {
// 		if (error) console.error(error);
// 	});
// }

QRCode.toCanvas(canvas, window.location.href, function (error) {
	if (error) console.error(error);
});

// module.exports.generateCode = generateCode;
// module.exports.updateUrl = updateUrl;
