// ADSR envelope
class Envelope {
    attack: number // in seconds
    decay: number // in seconds
    sustain: number // in gain
    release: number // in seconds
    maxValue: number
    minValue: number
    paramToModify: AudioParam
    audioContext: AudioContext

    constructor(
        paramToModify: AudioParam,
        maxValue: number,
        minValue: number,
        audioContext: AudioContext) {

        this.attack = 0.01; // 10ms
        this.decay = 0.1; // 100ms
        this.sustain = 1.0;
        this.release = 0.01; // 10ms
        this.maxValue = maxValue;
        this.minValue = minValue;
        this.paramToModify = paramToModify;
        this.audioContext = audioContext;
    }

    setAttackTimeInSec(attack: number) {
        this.attack = attack;
    }

    setDecayTimeInSec(decay: number) {
        this.decay = decay;
    }

    setSustainGain(sustain: number) {
        this.sustain = sustain;
    }

    setReleaseTimeInSec(release: number) {
        this.release = release;
    }

    onNoteOn() {
        // cancel any existing envelope
        this.paramToModify.cancelScheduledValues(0);

        // reset envelope
        var now = this.audioContext.currentTime;
        this.paramToModify.value = this.minValue;

        // ramp up to attack
        this.paramToModify.linearRampToValueAtTime(this.maxValue, now + this.attack);

        // ramp down to sustain
        this.paramToModify.linearRampToValueAtTime(this.sustain, now + this.attack + this.decay);
    }

    onNoteOff(stopOscCallback: (playingOsc: OscillatorNode[]) => void, playingOsc: OscillatorNode[]) {
        // cancel any current ramping but hold value
        this.paramToModify.cancelAndHoldAtTime(0);

        // ramp down to release
        var now = this.audioContext.currentTime;
        this.paramToModify.linearRampToValueAtTime(this.minValue, now + this.release);

        // stop oscillator
        setTimeout(stopOscCallback, this.release * 1000, playingOsc);
    }

    setMaxValue(maxValue: number) {
        this.maxValue = maxValue;
    }

    setMinValue(minValue: number) {
        this.minValue = minValue;
    }
}

export default Envelope;