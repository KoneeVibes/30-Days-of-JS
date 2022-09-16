let countDown;
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds){
    // clear any existing timers
    clearInterval(countDown)
    // what is the time now?
    const now = Date.now();
    // what will the time be after the countdown?
    const then = now + (seconds * 1000);
    displayTimeLeft(seconds);
    displayEndTime(then);

    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)
        if (secondsLeft <= 0){
            // prevent countdown from subsequently running
            clearInterval(countDown)
            // stop the display
            return
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10? '0':''}${remainderSeconds}`
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const min  = end.getMinutes();
    endTime.textContent = `Be Back at ${hour > 12? (hour - 12) : (hour)}:${min < 10? '0': ''}${min}`
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
// a way to select a form element by name;
document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    // also, we can use the name attribute of the nested input tag as a property of the form;
    const min = this.minutes.value;
    timer(min * 60)
    // to clear the textbox;
    this.reset();
})