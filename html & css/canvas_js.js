const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = "blue";
// ctx.fillRect(200, 20, 150, 100);
// ctx.strokeStyle = "green";
// ctx.lineWidth = 4;
// ctx.strokeRect(100, 200, 150, 100);
// ctx.clearRect(25, 25, 140, 90);
// ctx.font = "30px Arial";
// ctx.strokeStyle = "purple";
// ctx.fillText("canvas", 400, 50);
// ctx.strokeText("canvas", 400, 100);

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "coral";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.rect(300, 50, 150, 150);
// ctx.fillStyle = "teal";
// ctx.fill();

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;
// ctx.beginPath();
// ctx.arc(centerX, centerY, 195, 0, Math.PI * 2);
// ctx.moveTo(centerX + 100, centerY);
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);
// ctx.moveTo(centerX - 60, centerY - 80);
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);
// ctx.moveTo(centerX + 100, centerY - 80);
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);
// ctx.stroke();

// const circle = {
// 	x: 200,
// 	y: 200,
// 	size: 30,
// 	dx: 5,
// 	dy: 4,
// };
// function drawCircle() {
// 	ctx.beginPath();
// 	ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
// 	ctx.fillStyle = "purple";
// 	ctx.fill();
// }
// function update() {
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	drawCircle();
// 	circle.x += circle.dx;
// 	circle.y += circle.dy;
// 	if (circle.x + circle.size > canvas.width || circle.x + circle.size < 60) {
// 		circle.dx *= -1;
// 	}
// 	if (circle.y + circle.size > canvas.height || circle.y + circle.size < 60) {
// 		circle.dy *= -1;
// 	}
// 	requestAnimationFrame(update);
// }
// update();

const player = {
	w: 50,
	h: 70,
	x: 20,
	y: 200,
	speed: 5,
	dx: 0,
	dy: 0,
};
const image = document.getElementById("source");
function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawPlayer() {
	ctx.drawImage(image, player.x, player.y, player.w, player.h);
}
function newPos() {
	player.x += player.dx;
	player.y += player.dy;
	detectWalls();
}
function detectWalls() {
	if (player.x < 0) {
		player.x = 0;
	}
	if (player.x + player.w > canvas.width) {
		player.x = canvas.width - player.w;
	}
	if (player.y + player.h > canvas.height) {
		player.y = canvas.height - player.h;
	}
	if (player.y < 0) {
		player.y = 0;
	}
}
function update() {
	clear();
	drawPlayer();
	newPos();
	requestAnimationFrame(update);
}

function keyDown(e) {
	if (e.key === "ArrowRight") {
		moveRight();
	} else if (e.key === "ArrowLeft") {
		moveLeft();
	} else if (e.key === "ArrowUp") {
		moveUp();
	} else if (e.key === "ArrowDown") {
		moveDown();
	}
	console.log(e.key);
}
function moveUp() {
	player.dy = -player.speed;
}
function moveLeft() {
	player.dx = -player.speed;
}
function moveRight() {
	player.dx = player.speed;
}
function moveDown() {
	player.dy = player.speed;
}
function keyUp(e) {
	if (
		e.key == "ArrowUp" ||
		e.key == "ArrowDown" ||
		e.key == "ArrowRight" ||
		e.key == "ArrowLeft"
	) {
		player.dx = 0;
		player.dy = 0;
	}
}
update();
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
