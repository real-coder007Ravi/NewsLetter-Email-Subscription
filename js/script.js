// const scriptURL =
// 	"https://script.google.com/macros/s/AKfycbyfWRs9bTdQaf8bAYWXIEnXj3sQnGstAuSa46-E5auToTqXGZMYIWM7tWtQ8hPExohX/exec";
// const form = document.forms["submit-to-google-sheet"];
// const msg = document.getElementById("msg");
// form.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	fetch(scriptURL, { method: "POST", body: new FormData(form) })
// 		.then((response) => {
// 			msg.innerHTML = "Thank You For Subscribing!";
// 			setTimeout(function () {
// 				msg.innerHTML = "";
// 			}, 5000);
// 			form.reset();
// 		})
// 		.catch((error) => console.error("Error!", error.message));
// });

const scriptURL =
	"https://script.google.com/macros/s/AKfycbzTrG9REisOKYZ3SmZudlqZCRrJZ5q3oS3nZTN5jK1JRUiJwggI7szMS1to1VlbdSin/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
	e.preventDefault();
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			msg.innerHTML = "Thank You For Subscribing!";
			setTimeout(function () {
				msg.innerHTML = "";
			}, 5000);
			form.reset();
		})
		.catch((error) => console.error("Error!", error.message));
});
