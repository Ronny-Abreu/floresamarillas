function setup() {
    createCanvas(600, 600);
    background(0);
    noLoop();
}

function draw() {
    translate(width / 2, height / 2 - 50);
    
    // Texto encima de la flor
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Flor Amarilla, no seas espectadora", 0, -250);

    // Dibujar los pétalos
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 18; j++) {
            let c = color(255, 255, 0); // Amarillo
            fill(c);
            noStroke();
            rotate(PI / 8);
            ellipse(0, 50, 150 - j * 6, 90);
        }
    }

    // Dibujar la parte central de la flor
    fill(139, 69, 19); // Marrón
    noStroke();
    let phi = 137.508 * (PI / 180);
    for (let i = 0; i < 200; i++) {
        let r = 4 * sqrt(i);
        let theta = i * phi;
        let x = r * cos(theta);
        let y = r * sin(theta);
        ellipse(x, y, 5, 5);
    }
}

document.getElementById("BCreacionFlor").addEventListener("click", function() {
    console.log("Creación de la flor iniciada...");
    cargarScript("./floresamarillas.js");
});

function cargarScript(src) {
    let script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    document.body.appendChild(script);
}
