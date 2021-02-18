const lowpass = 'lowpass' as BiquadFilterType
const highpass = 'highpass' as BiquadFilterType

const filterTypes =  {
    lowpass,
    highpass
}

export default filterTypes

export const getAllFilterTypes = () : string[] =>{
    return Object.keys(filterTypes);
}