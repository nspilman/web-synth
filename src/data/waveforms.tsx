const sine = 'sine' as OscillatorType;
const square = 'square' as OscillatorType;
const sawtooth = 'sawtooth' as OscillatorType;
const triangle = 'triangle' as OscillatorType;
 
const waveforms =  {
    sine,
    square,
    sawtooth,
    triangle
}

export default waveforms

export const getAllWaveTypes = () : OscillatorType[] =>{
    return Object.keys(waveforms).map(waveform => waveform as OscillatorType);
}