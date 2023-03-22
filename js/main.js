console.log("Hello World!");
import users from "./datas.js";
import displayHTML from "./createCard.js";

const CARDS = document.querySelector(".cards");
const SEARCH = document.querySelector("#search");

let userSearch = [];

SEARCH.addEventListener("keyup", () => {
	userSearch = users.filter((user) =>
		user.name.toLowerCase().includes(SEARCH.value.toLowerCase())
	);
	CARDS.innerHTML = displayHTML(userSearch);
});

/**
 * Étape 1 :
 *
 * Dans le fichier createCard, vous allez créer 2 fonctions
 * createCard(data) & displayHtml(users)
 *
 * Étape 2 :
 *
 * Récupérer l'input qui permet de rechercher une personne
 * On écoute la valeur et on filtre notre tableau d'utilisateur avec la valeur saisie par l'utilisateur
 */

CARDS.innerHTML = displayHTML(users);
