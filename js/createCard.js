// Your code
function createCard(data) {
	let html = `
    <!-- CARD EXAMPLE -->
    <div class="user-info">
        <p><strong>Nom d'utilisateur :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p>
            <strong>Adresse :</strong> ${data.address.street}, ${data.address.suite},
            ${data.address.city}, ${data.address.zipcode}
        </p>
        <p><strong>Téléphone :</strong> ${data.phone}</p>
        <p><strong>Nom de l'entreprise :</strong> ${data.company.name}</p>
        <p>
            <strong>Slogan de l'entreprise :</strong> ${data.company.catchPhrase}
        </p>
        <p>
            <strong>Coordonnées géographiques :</strong> ${data.address.geo.lat}, ${data.address.geo.lng}
        </p>
    </div>
    <!-- END CARDS EXEMPLE -->`;

	return html;
}

function displayHTML(users) {
	let html = "";
	users.forEach((user) => {
		html += createCard(user);
	});
	return html;
}

export default displayHTML;
