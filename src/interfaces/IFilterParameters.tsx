import filterTypes from "../data/filterTypes";

export default interface IFilterParameters {
    type : filterTypes,
    freq : number,
    q : number,
}