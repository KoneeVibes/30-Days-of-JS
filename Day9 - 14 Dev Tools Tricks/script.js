const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}   

// Regular
console.log('hello');

// Interpolated

let text = 'poop';

console.log('hello i am a %s string!', 'poop')
console.log(`hello i am a ${text}`)

// Styled

console.log('%c i am some great text', 'font-size: 50px; background-color: red;')

// warning!

console.warn('OH NOOO'); //don't think this works on my browser

// Error :|

console.error('wrong');

// Info

console.info('hello, I am not a teetotaler'); //and this works abit different

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('innit'), 'It does not contain that class');

// clearing

console.clear();

// Viewing DOM Elements

console.dir(dogs)

// Grouping together

dogs.forEach(i => {
    // console.group(`${i.name}`)
    console.groupCollapsed(`${i.name}`)
    console.log(`This is ${i.name}`)
    console.log(`This is ${i.age}`)
    console.log(`This is ${i.age * 7}`)
    console.groupEnd(`${i.name}`)
})

// counting

console.count('konee')
console.count('konee')
console.count('dope')
console.count('konee')
console.count('konee')
console.count('dope')

// timing

console.time('fetching data');

fetch('https://api.github.com/users/wesbos')
    .then(i => i.json)
    .then(i => {
        console.timeEnd('fetching data')
    })