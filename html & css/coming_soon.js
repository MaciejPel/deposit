const countdown = document.querySelector(".countdown");

const launchDate = new Date("Jan 1, 2021 14:00:00").getTime();

const intval = setInterval(() => {
	const now = new Date().getTime();
	const distance = launchDate - now;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	countdown.innerHTML = `
    <div>${days}<span>days</span></div>
    <div>${hours}<span>hours</span></div>
    <div>${mins}<span>mins</span></div>
    <div>${seconds}<span>seconds</span></div>`;
	if (distance < 0) {
		clearInterval(intval);
		countdown.getElementsByClassName.color = "#17a2b8";
		countdown.innerHTML = "Launched!";
	}
}, 1000);
