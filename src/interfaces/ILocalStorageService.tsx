export default interface ILocalStorageService {
    getNumberByKey: (key : string) => number | undefined,
    setValueByKey: (key : string, value : string) => void
}