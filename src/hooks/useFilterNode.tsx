import React from "react";
import { useSelector } from "react-redux";
import filterNode from "../classes/filterNode";
import { getFilterType } from "../data/filterTypes";
import { AppState } from "../store/reducers";

const useFilterNode = (audioContext: AudioContext) => {
  const { typeId, freq } = useSelector((state: AppState) => state.filter);

  return filterNode(audioContext, getFilterType(typeId), freq);
};

export default useFilterNode;
