import { combineReducers } from "redux";
import envelopeReducer from "./envelopeReducer";
import filterReducer from "./filterReducer";
import oscillatorReducer from "./oscillatorReducer";
import basicReducer from "./basicReducer";
import isPlayingReducer from "./isPlayingReducer";

const rootReducer = combineReducers({
  envelope: envelopeReducer,
  filter: filterReducer,
  oscillator: oscillatorReducer,
  basic: basicReducer,
  isPlaying: isPlayingReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
