import { getNoteArray } from "../data/notes";
import masterGainNode from "./masterGainNode";
import filterNode from "./filterNode";
import OscillatorWrapper from "./OscillatorWrapper"
import IAudioContextParameters from "../interfaces/IAudioContextParameters"
import WaveshaperNodeWrapper from "./waveshaperNode";

class AudioContextWrapper {
    audioContext : AudioContext
    masterGainNode : GainNode
    filterNode : BiquadFilterNode
    waveshaperNode : WaveshaperNodeWrapper
    oscilators: OscillatorWrapper[]
    waveform : OscillatorType
    octave : number

    constructor(defaultParameters : IAudioContextParameters){
        const { gain, filterType, filterFreq, waveForm, octave } = defaultParameters
        this.audioContext = new window.AudioContext();

        this.masterGainNode = masterGainNode(this.audioContext, gain);
        this.filterNode = filterNode(this.audioContext, filterType, filterFreq);
        this.waveshaperNode = new WaveshaperNodeWrapper(this.audioContext);

        this.filterNode.connect(this.waveshaperNode.waveshaperNode);
        this.waveshaperNode.waveshaperNode.connect(this.masterGainNode);

        this.masterGainNode.connect(this.audioContext.destination);
        this.waveform = waveForm;
        this.octave = octave;

        this.oscilators = getNoteArray().map(
        note => new OscillatorWrapper(
            note.noteName,
            note.octave, 
            this.audioContext)
        )
    }

    playNote(note : string){
        const oscWrapper = this.oscilators.find(osc => osc.octave == this.octave && osc.note == note);
        if(!oscWrapper){
            return
        }
        oscWrapper.play(this.filterNode, this.waveform)
    }

    stopNote(note : string){
        const oscWrapper = this.oscilators.find(osc => osc.octave == this.octave && osc.note == note);
        if(!oscWrapper){
            return
        }
        oscWrapper.stop();
    }

    setGain(newGain : number){
        this.masterGainNode.gain.value = newGain;
    }

    setFilterType(newType : BiquadFilterType) {
        this.filterNode.type = newType;
    }

    setFilterFreq(newFreq : number) {
        this.filterNode.frequency.value = newFreq;
    }

    setDistortionAmount(newAmount: number) {
        this.waveshaperNode.setCurveForAmount(newAmount);
    }
}

export default AudioContextWrapper;