const BASE_URL = 'https://restcountries.com/v3.1/name';

export default function fetchCountriesByName(name) {
  return fetch(`${BASE_URL}/${name}`).then(parseResponseJSON);
}

function parseResponseJSON(response) {
  if (!response.ok) {
    throw new Error('Oops, there is no country with that name');
  }

  return response.json();
}
