# Iron Man — Level 2

![JavaScript](https://img.shields.io/badge/JavaScript-p5.js-FB7D24?logo=p5dotjs&logoColor=white)
![Game](https://img.shields.io/badge/type-browser%20prototype-4C8EDA)

A p5.js platform-style prototype. Guide Iron Man through a scrolling scene, collect diamonds for points, avoid spikes that reduce the score, and interact with falling bricks as platforms.

## Controls and scoring

- Left and right arrows move horizontally.
- Up arrow applies jump velocity.
- Collecting a diamond adds one point.
- Contact with a spike removes one point.
- Bricks are generated as falling platforms.

The current sketch draws the score on the canvas. It does not store a high score between sessions.

## How it works

The sketch loads local images and creates sprite groups for bricks, diamonds, and obstacles. The draw loop handles input, gravity, spawning, collisions, and score rendering. Separate generator functions control when items appear and where they enter the scene.

## Architecture

Keyboard input → Iron Man movement/gravity → obstacle and collectible groups → collision/score updates → canvas

## Start locally

Open index.html in a browser. Keep images/, CSS/, and lib/ in place. No build or package installation is configured; use a local static server if file URL restrictions prevent asset loading.

## Project layout

- index.html — browser entry point
- sketch.js — gameplay, score, spawning, and collision logic
- images/ — character, background, bricks, diamonds, and spikes
- lib/ — p5.js/p5.play libraries
- CSS/ — page styling

## Limitations

This is a prototype and has no persistent progress, game-over screen, or automated test suite.