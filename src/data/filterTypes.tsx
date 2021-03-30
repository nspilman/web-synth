enum filterTypes {
    LOWPASS,
    HIGHPASS
}

export default filterTypes

export const getAllFilterTypes = () : string[] =>{
    return Object.keys(filterTypes);
}

export const maxFilterTypeDialValue : number = Object
                                    .values(filterTypes)
                                    .filter(value => typeof value === 'string').length - 1;

export const getFilterType = (filterTypeId: filterTypes) : BiquadFilterType | undefined => {
    switch(filterTypeId){
        case filterTypes.LOWPASS:
            return 'lowpass';
        case filterTypes.HIGHPASS:
            return 'highpass';
        default:
            break;
    }
}
