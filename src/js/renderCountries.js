const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');

export function renderManyCountries(arr) {
  countryInfoRef.innerHTML = '';
  countryListRef.innerHTML = arr
    .map(
      ({ name, flags }) =>
        /*html*/ `<li><img src='${flags.svg}' width='30', height='20'> ${name.official}</li>`
    )
    .join('');
}

export function renderSingleCountry({
  name,
  capital,
  population,
  flags,
  languages,
}) {
  countryListRef.innerHTML = '';
  countryInfoRef.innerHTML = /*html*/ `<img src='${
    flags.svg
  }' width='60', height='40'>
  <h2 class='big-country-name'>${name.official}</h2>
  <ul class='country-props-list'>
    <li class='country-prop'><b>Capital: </b>${capital}</li>
    <li class='country-prop'><b>Population: </b>${population}</li>
    <li class='country-prop'><b>Languages: </b>${Object.values(languages).join(
      ' '
    )}</li>
  </ul>`;
}

export function clearCountries() {
  countryListRef.innerHTML = '';
  countryInfoRef.innerHTML = '';
}
