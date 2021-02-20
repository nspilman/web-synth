export default interface IAudioContextParameters {
    gain : number,
    filterType : string,
    filterFreq : number,
    waveForm : OscillatorType
    octave : number,
    distortionAmount: number,
    numOscillators: number,
    oscillatorUnisonDetune: number
}