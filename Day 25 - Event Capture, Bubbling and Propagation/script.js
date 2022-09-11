const divs = document.querySelectorAll('div');

function logText (e){
    console.log(this.classList.value);

    // To stop bubbling
    e.stopPropagation()
}

divs.forEach(div => div.addEventListener('click', logText, {
    // set capture to true to trigger the event from top to bottom
    // default value is false and that triggers the event from bottom to top (bubbling)
   capture: true,

    //  sets the event to only trigger once  
   once: true
}))