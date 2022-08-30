const pressed = [];
const secretCode = 'konee';

window.addEventListener('keyup', (e) => {
    // console.log(e.key)
    // console.log(secretCode.length)
    pressed.push(e.key);
    console.log(pressed)
    // don't seem to get the right size of array right with the code below, help me;
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

    pressed.join('').includes(secretCode)? cornify_add():""
})