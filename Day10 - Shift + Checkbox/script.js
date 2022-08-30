const checkBoxes = document.querySelectorAll(".inbox input[type='checkbox']");

// console.log(checkBoxes);

let lastChecked; 

function handleCheck(e){
    // console.log(e);
    let inBetween = false;
    if (e.shiftKey && this.checked){
        // console.log('does it work') 
        checkBoxes.forEach(checkBox => {
            // console.log(checkBox)
            if (checkBox === this || checkBox === lastChecked){
                inBetween = !inBetween; 
                // console.log('begins here')
            }

            if (inBetween){
                checkBox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('click', handleCheck)
})