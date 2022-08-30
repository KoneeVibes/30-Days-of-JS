// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function filterInventors(i){
    if (i.year >= 1500 && i.year < 1599)
    return true
}

const answerOne = inventors.filter(filterInventors)
console.table(answerOne);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const answerTwo = inventors.map(i => {
    return i.first + " " + i.last
})

console.table(answerTwo)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const answerThree = inventors.sort(function(a, b){
    if (a.year > b.year){
        return 1;
    } 
    else{
        return -1;
    }
})
console.table(answerThree)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const answerFour = inventors.reduce(function(accumulator, currentValue){
    return accumulator + (currentValue.passed - currentValue.year);
}, 0)

console.log(answerFour)

// 5. Sort the inventors by years lived
const answerFive = inventors.sort((a, b) => {
    if ((a.passed - a.year) < (b.passed - b.year)){
        return 1;
    }
    else{
        return -1;
    }
})

console.table(answerFive)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-content-ltr');
// const links = Array.from(category.querySelector('a'));

// const text = links.map(i => {
//    return i.textContent
// })

// const answerSix = text.filter(i => {
//     if (i.includes('de')){
//         return true
//     }
// })

// 7. sort Exercise
// Sort the people alphabetically by last name

const answerSeven = people.sort((a, b) => {
    const [aLast, aFirst] = a.split(', ')
    const [bLast, bFirst] = b.split(', ')
    if (aLast > bLast){
        return 1;
    }
    else{
        return -1;
    }
})

console.table(answerSeven)
// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const answerEight = data.reduce((accumulator, currentItem) => {
    if (!accumulator[currentItem]){
        accumulator[currentItem] = 0;
    }
    accumulator[currentItem]++ ;
    return accumulator
}, {})

console.log(answerEight)