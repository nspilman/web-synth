import { keyNames } from "../../data/notes";
import {
  playNoteAction,
  playNoteActionTypes,
} from "../actions/playNoteActions";

const initialState: Map<keyNames, boolean> = new Map([
  ["C", false],
  ["Db", false],
  ["D", false],
  ["Eb", false],
  ["E", false],
  ["F", false],
  ["Gb", false],
  ["G", false],
  ["Ab", false],
  ["A", false],
  ["Bb", false],
  ["B", false],
]);

const FilterReducer = (state = initialState, action: playNoteAction) => {
  var newState = new Map(state);
  switch (action.type) {
    case playNoteActionTypes.PLAY_NOTE:
      action.setAudioController(action.payload);
      newState.set(action.payload, true);
      return newState;
    case playNoteActionTypes.STOP_NOTE:
      action.setAudioController(action.payload);
      newState.set(action.payload, false);
      return newState;
    default:
      return state;
  }
};
export default FilterReducer;
