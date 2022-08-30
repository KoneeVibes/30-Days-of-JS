const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// fetch the json file below
fetch(endpoint)

// convert the file to a json format
    .then (i => i.json())

// push the json file into the cities array
    .then (i => cities.push(...i))

function findMatches(wordToMatch, cities){
    return cities.filter(i => {
        const regex = new RegExp(wordToMatch, 'gi');
        return i.city.match(regex) || i.state.match(regex);
    })
}

// console.log(findMatches('Bos', cities))

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
    const matchArray = findMatches(this.value, cities)
    // console.log(matchArray)
    const html = matchArray.map(i => {
        const regex = new RegExp(this.value, 'gi')
        const cityName = i.city.replace(regex, `<span class='hl'>${this.value}</span>`)
        const stateName = i.state.replace(regex, `<span class='hl'>${this.value}</span>`)
        return `
        <li>
            <span class='name'>${cityName}, ${stateName}</span>
            <span class='population'>${numberWithCommas(i.population)}</span>
        </li>`
    }).join('');
    suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)