# 3 Body Problem

## Introduction

3 Body problem is part of the N-body problem, which is a general term for problems that involve finding the motion of N bodies that are all interacting with each other gravitationally. The 3 body problem is the special case where N = 3. The 3 body problem is a special case because it is the smallest number of bodies that can exhibit chaotic behavior. The 3 body problem is also the simplest case of the N body problem that cannot be solved analytically. This means that we cannot find a general solution to the problem. We can only find solutions for specific initial conditions.

## Installation

To run the simulation, simply clone the repository and open the `index.html` file in your browser. Alternatively, you can visit the [GitHub Pages](https://ghostscypher.github.io/3_body_problem/src/index.html) for this repository.

## Implementation

The implementation uses euler's method to approximate the solution to the 3 body problem. The implementation is based on the [Coding Train](https://www.youtube.com/watch?v=BAejnwN4Ccw&ab_channel=TheCodingTrain) video on the 3 body problem. The basic idea is that we have 3 bodies, each with a mass, position, velocity, and acceleration. We then calculate the acceleration of each body based on the gravitational force between the bodies. We then use the acceleration to calculate the velocity and position of each body. We then repeat this process for each time step. The time step is the amount of time that passes between each calculation. The smaller the time step, the more accurate the simulation will be, but the longer it will take to run. The larger the time step, the less accurate the simulation will be, but the faster it will run. The time step is a trade off between accuracy and speed. In addition we make sure we don't attract a body to itself.

## Demo

<img src="https://raw.githubusercontent.com/ghostscypher/3_body_problem/output/demo.gif" alt="Travelling Salesman Problem">

## References

1. [N-body problem](https://en.wikipedia.org/wiki/N-body_problem)
2. [P5 JS](https://p5js.org/)
3. [P5 JS Reference](https://p5js.org/reference/)
4. [P5 JS Examples](https://p5js.org/examples/)
5. [P5 JS Web Editor](https://editor.p5js.org/)
7. [Coding train - P5 JS Tutorials](https://www.youtube.com/user/shiffman/playlists?view=50&sort=dd&shelf_id=14)
8. [The Nature of Code](https://natureofcode.com/)
9. [The Coding Train](https://thecodingtrain.com/)
10. [The Coding Train - 2.6 Mutual Attraction - The Nature of Code](https://www.youtube.com/watch?v=GjbKsOkN1Oc&ab_channel=TheCodingTrain)