# Iron Man — Level 2

A p5.js platform-style game prototype. Guide Iron Man through a scrolling scene, collect diamonds to increase the score, avoid spikes that reduce it, and use falling bricks as platforms.

## Controls and scoring

- Left and right arrows: move horizontally
- Up arrow: jump
- Collecting a diamond adds one point.
- Touching a spike removes one point.
- Bricks act as platforms as the character falls.

The sketch displays the score on the canvas. This is a prototype with no separate game-over screen or persistent high score.

## Implementation

sketch.js loads local images and creates sprite groups for bricks, diamonds, and obstacles. The frame loop handles keyboard movement, gravity, spawning, collision response, and score rendering. Spawn intervals and horizontal positions are defined in generator functions.

## Run

Open index.html in a browser. Keep images/, lib/, and CSS/ at their existing paths. No package installation or build command is included.

## Stack

HTML, CSS, JavaScript, p5.js, and p5.play.