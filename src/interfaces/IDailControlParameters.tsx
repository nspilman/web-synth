
export default interface IDialParameterControl {
    min : number,
    title: string,
    max : number,
    localStorageKey : string,
    defaultValue : number,
    factor? : number,
}