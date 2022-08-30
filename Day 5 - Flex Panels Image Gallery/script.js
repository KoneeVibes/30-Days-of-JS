const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open')
}

function toggleActive(e){
    // console.log(e.propertyName);
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

// panels.forEach(i => {
//     i.addEventListener('click', e => {
//         e.target.classList.toggle('open')
//     })
// })

panels.forEach(i => {
    i.addEventListener('click', toggleOpen)
})

panels.forEach(i => {
    i.addEventListener('transitionend', toggleActive)
})
