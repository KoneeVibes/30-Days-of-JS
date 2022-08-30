// start with strings, numbers and booleans
let age = 200;
let age2 = age;
console.log(age, age2)

age = 100;
console.log(age, age2)

let name = 'konee'
let name2 = name
console.log(name, name2)

name = 'ofofonono'
console.log(name, name2)
// Let's say we have an array
console.clear()
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
const team = players;
console.log(players, team)

// however what happens when we update that array?
team[3] = 'konee'
console.log(players, team)
console.clear()

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
let team2 = players.slice()
team2 [2] = 'konee'
console.log(players, team2)

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players]
console.clear()

const team5 = Array.from(players)

// now when we update it, the original one isn't changed
team4[0] = 'konee'
console.log(team4, players)
// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
console.clear()
const captain = person;
captain.number = 99;
console.log(person, captain)

// how do we take a copy instead?

const cap2 = Object.assign({}, person, {number: 99, age: 22})
console.log(cap2, person)

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
console.clear()
const konee = {
    name: 'konee',
    age: 21,
    social: {
        twitter: 'koneevibes',
        facebook: 'ofofonono umoren'
    }
}

const nickname = Object.assign({}, konee)
nickname.name = 'vibes'
console.log(nickname)

console.clear()
nickname.social.twitter = 'morrykuzi'
console.log(konee, nickname)