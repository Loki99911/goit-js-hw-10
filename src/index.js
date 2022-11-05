import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { cleanAll, moreTwoLesTen, equelOne } from './js/filterCounties';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const cardEl = document.querySelector('.country-info');

listEl.style.listStyle = "none";

inputEl.addEventListener('input', debounce(onInputEvent, 1500));

function onInputEvent(event) {
  const counrtyEntry = event.target.value.trim();
  if (counrtyEntry === '') {
    cleanAll(listEl,cardEl);
    return;
  }
  fetchCountries(counrtyEntry)
    .then(countries => {
      if (countries.length > 10) {
        cleanAll(listEl,cardEl);
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (countries.length <= 10 && countries.length >= 2) {
        cleanAll(listEl,cardEl);
        moreTwoLesTen(countries, listEl);
      }
      if (countries.length === 1) {
        cleanAll(listEl,cardEl);
        equelOne(countries, cardEl);
      }
    })
    .catch(error => {
      cleanAll(listEl,cardEl);
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
