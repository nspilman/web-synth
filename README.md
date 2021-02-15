# Welcome to Web Synth!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Standard `react`/`node` scripts run as standard - 
* `npm start`
* `npm test`
* `npm run build`

## Architecure of as right now - 
* Currently we have our `classes/audioContextWrapper.js` file as our main audio controller. It is what is responsible for creating oscilators, playing, stopping and destroying them, based on calling `playNote(note,octave)` and `stopNote(note,octave)`.
* 
* our `keyboard.tsx` is the `React` component responsible for instantiating its own `audioContextWrapper` and calling `playNote` and `stopNote` on it via user input of click events. 

Right now the `keyboard` passes 

