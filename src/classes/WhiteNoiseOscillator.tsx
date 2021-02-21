class WhiteNoiseOscillator {
    isPlaying: boolean
    buffer: AudioBuffer
    gain: GainNode
    playingOsc: AudioBufferSourceNode
    audioContext: AudioContext

    constructor(audioContext: AudioContext, initialGain: number, nodeToConnect: AudioNode) {
        this.audioContext = audioContext;
        var bufferSize = audioContext.sampleRate * 2;
        this.buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        var output = this.buffer.getChannelData(0);
        for (var i = 0; i < bufferSize; i++) {
            // generate random value between -1 and 1
            output[i] = Math.random() * 2 - 1;
        }

        this.gain = audioContext.createGain();
        this.gain.gain.value = initialGain;
        this.gain.connect(nodeToConnect);

        this.playingOsc = audioContext.createBufferSource();
        this.isPlaying = false;
    }

    setGain(newGain: number) {
        this.gain.gain.value = newGain;
    }

    play() {
        if (this.isPlaying) {
            return;
        }

        this.playingOsc = this.audioContext.createBufferSource();
        this.playingOsc.buffer = this.buffer;
        this.playingOsc.loop = true;
        this.playingOsc.connect(this.gain);

        this.playingOsc.start();
        this.isPlaying = true;
    }

    stop() {
        if (!this.isPlaying) {
            return;
        }

        this.playingOsc.stop();
        this.playingOsc.disconnect();
        this.isPlaying = false;
    }
}

export default WhiteNoiseOscillator;