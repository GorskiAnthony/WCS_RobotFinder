// ES5 = require
// const createCard = require("./createCard");

import render from "./components/render.js";
import robots from "./helpers/datas.js";
// import createCard from "./components/createCard.js";

const CARDS = document.querySelector(".cards");
const FILTER = document.querySelector("#search");

FILTER.addEventListener("keyup", (event) => {
	// console.log(event.target.value)
	// doc : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	const robotsSearch = robots.filter((robot) =>
		robot.name.toLowerCase().includes(event.target.value.toLowerCase())
	);

	// proposition:
	//(robot) => robot.name.toLowerCase().contains(event.target.value.toLowerCase())
	CARDS.innerHTML = render(robotsSearch);
});

CARDS.innerHTML = render(robots);
