export const EnvelopeStage = {
    ATTACK: "attack",
    DECAY: "decay",
    SUSTAIN: "sustain",
    RELEASE: "release",
    NONE: "none"
}

// ADSR envelope
class Envelope {
    attack: number // in seconds
    decay: number // in seconds
    sustain: number // in gain
    release: number // in seconds
    stage: string
    gainNode: GainNode
    audioContext: AudioContext

    constructor(gainNode: GainNode, audioContext: AudioContext) {
        this.attack = 0.5; // 10ms
        this.decay = 0.1; // 100ms
        this.sustain = 0.2;
        this.release = 1.0; // 10ms
        this.stage = EnvelopeStage.NONE;
        this.gainNode = gainNode;
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

    canPlayNewOverlappingNote() {
        return this.stage == EnvelopeStage.RELEASE || this.stage == EnvelopeStage.NONE;
    }

    onNoteOn() {
        // cancel any existing envelope
        this.gainNode.gain.cancelScheduledValues(0);

        // reset envelope
        var now = this.audioContext.currentTime;
        this.gainNode.gain.value = 0;

        // ramp up to attack
        this.gainNode.gain.linearRampToValueAtTime(1.0, now + this.attack);
        this.stage = EnvelopeStage.ATTACK;

        // ramp down to sustain
        this.gainNode.gain.linearRampToValueAtTime(this.sustain, now + this.attack + this.decay);
        setTimeout(this.setStage.bind(this), (now + this.attack) * 1000, EnvelopeStage.DECAY);
    }

    onNoteOff(stopOscCallback: () => void) {
        // cancel any current ramping but hold value
        this.gainNode.gain.cancelAndHoldAtTime(0);

        // ramp down to release
        var now = this.audioContext.currentTime;
        this.gainNode.gain.linearRampToValueAtTime(0, now + this.release);
        this.stage = EnvelopeStage.RELEASE;

        // stop oscillator
        setTimeout(stopOscCallback, this.release * 1000);

        // set stage
        setTimeout(this.setStage.bind(this), this.release * 1000, EnvelopeStage.NONE);
    }

    setStage(stage: string) {
        this.stage = stage;
    }
}

export default Envelope;