const cleanAll = function (elemOne, elementTwo) {
  clean(elemOne);
  clean(elementTwo);
  return;
};
const moreTwoLesTen = function (countries, elemOne) {
  const string = countries
    .map(
      country =>
        `<li><img src="${country.flags.svg}" alt="Flag img" width = "25" >${country.name.official}</li>`
    )
    .join(' ');
  elemOne.insertAdjacentHTML('beforeend', string);
  return;
};

const equelOne = function (countries, elementTwo) {
  const string = countries.map(
    country =>
      `<p><img src="${country.flags.svg}" alt="Flag img" width = "50" >${
        country.name.official
      }</p>
        <p><b>Capital:</b>${country.capital}</p>
        <p><b>Population:</b>${country.population}</p>
        <p><b>Languages:</b>${Object.values(country.languages)}</p>`
  );
  elementTwo.insertAdjacentHTML('beforeend', string);
  return;
};

function clean(element) {
  element.innerHTML = '';
}
export { cleanAll, moreTwoLesTen, equelOne };
