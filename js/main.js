console.log("Hello World!");
import users from "./datas.js";
import displayHTML from "./createCard.js";

const CARDS = document.querySelector(".cards");

CARDS.innerHTML = displayHTML(users);

/**
 * Étape 1 :
 *
 * Dans le fichier createCard, vous allez créer 2 fonctions
 * createCard(data) & displayHtml(users)
 */
