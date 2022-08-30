const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setSecondHand(){
    const dateToday = new Date();
    const secondNow = dateToday.getSeconds(); 
    const secondsDeg = ((secondNow/60)*360) + 90 ;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`

    
    const minNow = dateToday.getMinutes(); 
    const minDeg = ((minNow/60)*360) + 90 ;
    minHand.style.transform = `rotate(${minDeg}deg)`


    const hourNow = dateToday.getHours(); 
    const hourDeg = ((hourNow/12)*360) + 90 ;
    hourHand.style.transform = `rotate(${hourDeg}deg)`
    console.log(hourNow);
}

setInterval(setSecondHand, 1000)
