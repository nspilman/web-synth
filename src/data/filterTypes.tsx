const lowpass = 'lowpass'
const highpass = 'highpass'

const filterTypes =  {
    lowpass,
    highpass
}

export default filterTypes

export const getAllFilterTypes = () : string[] =>{
    return Object.keys(filterTypes);
}