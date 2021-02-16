const sine = 'sine'
const square = 'square'
const sawtooth = 'sawtooth'
const triangle = 'triangle'

const waveforms =  {
    sine,
    square,
    sawtooth,
    triangle
}

export default waveforms

export const getAllWaveTypes = () : string[] =>{
    return Object.keys(waveforms);
}