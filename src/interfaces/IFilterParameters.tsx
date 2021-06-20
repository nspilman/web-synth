import filterTypes from "../data/filterTypes";

export default interface IFilterParameters {
  typeId: filterTypes;
  freq: number;
  q: number;
}
