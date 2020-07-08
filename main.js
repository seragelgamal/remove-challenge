// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let array = [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // draw bar graph
    ctx.fillStyle = 'orange';
    ctx.strokeStyle = 'grey';
    for (let i = 0; i < array.length; i++) {
        ctx.fillRect(i * (cnv.width / array.length), cnv.height - array[i], cnv.width / array.length, array[i]);
        ctx.strokeRect(i * (cnv.width / array.length), cnv.height - array[i], cnv.width / array.length, array[i]);
    }


    // Request another Animation Frame
    requestAnimationFrame(draw);
}

document.addEventListener('keydown', keyDownHandler);

function keyDownHandler(e) {
    console.log(e.code);
    if (e.code == 'Digit1') {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == 400) {
                array.splice(i, 1);
                i--;
            }
        }
    } else if (e.code == 'Digit2') {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == 200) {
                array.splice(i, 1);
                i--;
            }
        }
    }
}