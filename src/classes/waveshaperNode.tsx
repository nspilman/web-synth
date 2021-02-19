class WaveshaperNodeWrapper {
    sampleRate: number
    waveshaperNode: WaveShaperNode
    curveCache: Float32Array[]

    constructor(audioContext: AudioContext) {
        this.sampleRate = audioContext.sampleRate;
        this.waveshaperNode = audioContext.createWaveShaper();
        this.waveshaperNode.oversample = '4x';
        this.curveCache = []
        for (var i = 0; i <= 10; i++) {
            this.curveCache.push(this.createDistortionCurve(audioContext, i * 1.0 / 10));
        }

        this.waveshaperNode.curve = this.curveCache[0];
    }

    setCurveForAmount(amount: number) {
        this.waveshaperNode.curve = this.curveCache[amount];
    }

    createDistortionCurve(audioContext: AudioContext, amount: number) {
        var curve = new Float32Array(audioContext.sampleRate);
        for (var i = 0; i < curve.length; i++) {
    
            // -1 at i = 0
            // 0 at i = (sampleRate / 2)
            // 1 at i = sampleRate
            var x = (2 * i / audioContext.sampleRate) - 1;
            curve[i] = (amount * this.distort(x)) + ((1.0 - amount) * x);
        }
    
        return curve;
    }
    
    distort(sample: number) {
        if (sample == 0) {
            return 0;
        }
    
        var sign = sample > 0 ? 1 : -1;
        var newVal = sign * (1 - Math.exp(sign * sample));
        return newVal;
    }
}

export default WaveshaperNodeWrapper;