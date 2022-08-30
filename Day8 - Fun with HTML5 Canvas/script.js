const canvas = document.querySelector('#draw')

// console.log(canvas)

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round'
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
// let lastX = 0;
// let lastY = 0;

let hue = 0;
let direction = true;

function draw(e){
    if (!isDrawing) return
        // console.log(isDrawing); 
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; 
        // ctx.lineWidth = hue;
        ctx.beginPath();

        //start point below;
        ctx.moveTo(lastX, lastY);
        // console.log(lastX, lastY)

        // end point below;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke()

        lastX = e.offsetX;
        lastY = e.offsetY;
        hue++;
        if (hue >= 360){
            hue = 0;
        }

        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
            direction = !direction
        }

        if (direction){
            ctx.lineWidth++;
        }else{
            ctx.lineWidth--;
        }
        
};

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX =e.offsetX;
    lastY = e.offsetY;
    // console.log('mouse is down')
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)