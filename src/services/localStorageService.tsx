import ILocalStorageService from "../interfaces/ILocalStorageService";

const localStorageService : ILocalStorageService = {
    getNumberByKey : (key : string) => {
        const value = localStorage.getItem(key);
        if(value){
            return JSON.parse(value);
        }
    },
    setValueByKey : (key : string, value :string) => {
        localStorage.setItem(key,value);
    }
}

export default localStorageService;