const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsList = document.querySelector('#bands')

function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim()
}


const sortedBands = bands.sort((a, b) => {
        if (strip(a) > strip(b)){
            return 1;
        }else{
            return -1;
        }
    })

// can also be written as;
// const sortedBands = bands.sort((a, b) => (a > b)? 1:-1)

console.log(sortedBands)

bandsList.innerHTML = sortedBands.map(band => {
    return `<li>${band}</li>`
}).join('');