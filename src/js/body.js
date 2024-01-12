class Body {

    constructor(position, mass, color) {
        this.position = position;
        this.mass = mass;
        this.color = color;

        // this.velocity = p5.Vector.random2D();
        this.velocity = createVector(0, 0);
        // this.velocity.mult(0.5);
        this.acceleration = createVector(0, 0);
        this.radius = sqrt(this.mass) * 2;
    }

    show() {
        stroke(255);
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    attract(body) {
        let force = p5.Vector.sub(this.position, body.position);
        let distance = force.mag();
        let G = 2;

        distance = constrain(distance, 5, 25);
        force.normalize();

        let strength = (G * this.mass * body.mass) / (distance * distance);
        force.setMag(strength);

        body.applyForce(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        // Cap velocity to 5
        this.velocity.limit(5);

        // If velocity is too high, slow down
        if (this.velocity.mag() > 5) {
            this.velocity.mult(0.9);
        }

        // If out of bounds, reverse velocity
        // if (this.position.x > width || this.position.x < 0) {
        //     this.velocity.x *= -1;
        // }

        // if (this.position.y > height || this.position.y < 0) {
        //     this.velocity.y *= -1;
        // }


        // Wrap around
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }
}