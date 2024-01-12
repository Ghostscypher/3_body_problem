// Simple 3 body simulation
let N = 3;
let bodies = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create bodies as vectors
    for (let i = 0; i < N; i++) {
        bodies.push(
            new Body(
                createVector(random(width), random(height)),
                random(5, 5),
                color(random(255), random(255), random(255))
            )
        );
    }
}

function draw() {
    background(0, 20);

    // Draw bodies
    bodies.forEach(body => {
        body.update();
        body.show();

        // Update positions of bodies based on gravity
        bodies.forEach(other => {
            if (body !== other) {
                body.attract(other);
            }
        });
    });
}