import './css/styles.css';
//Повертає парсений JSON країн(и) за ім'ям
import fetchCountriesByName from './js/fetchCountries';
import { renderManyCountries } from './js/renderCountries';
import { renderSingleCountry } from './js/renderCountries';
import { clearCountries } from './js/renderCountries';

import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

const DEBOUNCE_DELAY = 500;

const inputRef = document.querySelector('#search-box');
inputRef.addEventListener(
  'input',
  debounce(onCountryNameInput, DEBOUNCE_DELAY)
);

function onCountryNameInput(event) {
  const targetName = event.target.value.trim();
  if (!targetName) return clearCountries();

  fetchCountriesByName(targetName)
    .then(reflectOnTheResponse)
    .catch(handleError);
}

function reflectOnTheResponse(countryArr) {
  if (countryArr.length > 10)
    Notify.info('Too many matches found. Please enter a more specific name.');
  else if (countryArr.length > 1) {
    renderManyCountries(countryArr);
  } else {
    renderSingleCountry(countryArr[0]);
  }
}

function handleError({ message }) {
  clearCountries();
  Notify.failure(message);
}
