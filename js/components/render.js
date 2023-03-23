import createCard from "./createCard.js";

/**
 * users est un tableau de donnée
 */
function render(users) {
	let html = "";

	for (let i = 0; i < users.length; i++) {
		// html = html + createCard(users[i]);
		html += createCard(users[i]);
	}

	/**
	 * Boucle forEach.
	 * users.forEach(user => html += createCard(user));
	 *
	 * Boucle for .. of.
	 * 	for (const user of users) {
		    html += createCard(user);
	    }
	 */

	return html;
}

export default render;
