enum waveforms {
    SINE,
    SQUARE,
    SAWTOOTH,
    TRIANGLE,
}

export default waveforms

export const getAllWaveTypes = () : string[] =>{
    return Object.keys(waveforms)
    .map(waveform => waveform)
}

export const maxWaveformsDialValue : number = Object
                                    .values(waveforms)
                                    .filter(value => typeof value === 'string').length - 1;


export const getWave = (waveId: waveforms) : OscillatorType => {
    switch(waveId){
        case waveforms.SQUARE:
            return 'square'
        case waveforms.SAWTOOTH:
            return 'sawtooth'
        case waveforms.TRIANGLE:
            return 'triangle'
            case waveforms.SINE:
            default:
                return 'sine';
    }
}