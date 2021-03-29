import { combineReducers } from 'redux'
import envelopeReducer from './envelopeReducer';
import filterReducer from './filterReducer';
import oscillatorReducer from "./oscillatorReducer";
import basicReducer from "./basicReducer";

const rootReducer = combineReducers({
    envelope: envelopeReducer,
    filter: filterReducer,
    oscillator: oscillatorReducer,
    basic: basicReducer
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;