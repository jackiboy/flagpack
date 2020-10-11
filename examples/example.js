async function getCountries() {
	return fetch('../src/_variables.scss')
		.then(res => res.text())
		.then(response => {
			var countries = response.match(/"[\w\-]*"/g).map(c => c.replace(/"/g, ''));
			console.log(countries);
			return countries;
		})
		.catch(console.error);
}

function renderCountries(countries) {
	var countriesEl = document.getElementById('countries');
	countriesEl.textContent = '';

	var template = document.getElementsByTagName("template")[0];
	var clon = template.content.cloneNode(true);

	countries.forEach(country => {
		var countryEl = template.content.cloneNode(true);
		const nameEl = countryEl.querySelectorAll('.name')[0];
		nameEl.textContent = country.toUpperCase();
		const flagEl = countryEl.querySelectorAll('.fp')[0];
		flagEl.classList.add(country);
		countriesEl.appendChild(countryEl);
	});
}

document.addEventListener('DOMContentLoaded', async (event) => {
	var countries = await getCountries();
	renderCountries(countries);
});