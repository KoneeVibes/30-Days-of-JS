const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const times = timeNodes
    .map(timeNode => timeNode.dataset.time)
    .map(time => {
        // creating an array of minutes and secs
        const [mins, secs] = time.split(':').map(parseFloat);
        // converting the entire time to secs
        return (mins * 60) + secs;
    })
    // using reduce method to add up all the seconds
    .reduce((total, seconds) => {
        return total + seconds
    })

let secondsLeft = times;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600


const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours, mins, secondsLeft)