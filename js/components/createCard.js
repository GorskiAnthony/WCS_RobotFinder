// Your code
/*
    Methode 1
    function createCard(data) => 
        name = data.name
        street = data.address.street
        namecompany = data.company.name
    Methode 2 ✅
    function createCard({ name, email, ... }) 
*/

function createCard({
	name,
	email,
	liveco,
	address: {
		street,
		suite,
		city,
		zipcode,
		geo: { lat, lng },
	},
	phone,
	company: { name: companyName, catchPhrase },
}) {
	return `
    <div class="user-info"> 
        <p><strong>Nom d'utilisateur :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p>
            <strong>Adresse :</strong> ${street}, ${suite},
            ${city}, ${zipcode},
        </p>
        <p><strong>Liveco :</strong> ${liveco}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Nom de l'entreprise :</strong> ${companyName}</p>
        <p>
            <strong>Slogan de l'entreprise :</strong> ${catchPhrase}
        </p>
        <p>
            <strong>Coordonnées géographiques :</strong> ${lat}, ${lng}
        </p>
    </div>`;
}

export default createCard;
