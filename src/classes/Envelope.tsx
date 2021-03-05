// ADSR envelope
class Envelope {
    attack: number // in seconds
    decay: number // in seconds
    sustain: number // in gain
    release: number // in seconds
    paramToControl: AudioParam
    audioContext: AudioContext

    constructor(paramToControl: AudioParam, audioContext: AudioContext) {
        this.attack = 0.01; // 10ms
        this.decay = 0.1; // 100ms
        this.sustain = 1.0;
        this.release = 0.01; // 10ms
        this.paramToControl = paramToControl;
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
        this.paramToControl.cancelScheduledValues(0);

        // reset envelope
        var now = this.audioContext.currentTime;
        this.paramToControl.value = 0;

        // ramp up to attack
        this.paramToControl.linearRampToValueAtTime(1.0, now + this.attack);

        // ramp down to sustain
        this.paramToControl.linearRampToValueAtTime(this.sustain, now + this.attack + this.decay);
    }

    onNoteOff(stopOscCallback: (playingOsc: OscillatorNode[]) => void, playingOsc: OscillatorNode[]) {
        // cancel any current ramping but hold value
        this.paramToControl.cancelAndHoldAtTime(0);

        // ramp down to release
        var now = this.audioContext.currentTime;
        this.paramToControl.linearRampToValueAtTime(0, now + this.release);

        // stop oscillator
        setTimeout(stopOscCallback, this.release * 1000, playingOsc);
    }
}

export default Envelope;