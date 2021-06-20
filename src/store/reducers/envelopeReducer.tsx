import { AudioControllerAction } from "../actions";
import { envelopeActionTypes } from "../actions/envelopeActions";
import getDefaultContextWrapperValues from "../../hooks/getDefaultContextWrapperValues";
import IAudioContextParameters from "../../interfaces/IAudioContextParameters";
import IEnvelopeParameters from "../../interfaces/IEnvelopeParameters";

const { envelopeParameters }: IAudioContextParameters =
  getDefaultContextWrapperValues();
const EnvelopeReducer = (
  state: IEnvelopeParameters = envelopeParameters,
  action: AudioControllerAction
) => {
  switch (action.type) {
    case envelopeActionTypes.SET_ATTACK:
      action.setAudioController(action.payload);
      return {
        ...state,
        attackMs: action.payload,
      };
    case envelopeActionTypes.SET_DECAY:
      action.setAudioController(action.payload);
      return {
        ...state,
        decayMs: action.payload,
      };
    case envelopeActionTypes.SET_SUSTAIN:
      action.setAudioController(action.payload);
      return {
        ...state,
        sustain: action.payload,
      };

    case envelopeActionTypes.SET_RELEASE:
      action.setAudioController(action.payload);
      return {
        ...state,
        releaseMs: action.payload,
      };
    default:
      return state;
  }
};
export default EnvelopeReducer;
