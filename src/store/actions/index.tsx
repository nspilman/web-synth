import { envelopeActionTypes } from "./envelopeActions";
import { filterActionTypes } from "./filterActions";
import { basicActionTypes } from "./basicActions";
import { oscillatorActionTypes } from "./oscillatorActions";

interface IAudioControllerAction<T> {
  readonly type:
    | envelopeActionTypes
    | filterActionTypes
    | oscillatorActionTypes
    | basicActionTypes;
  payload: number;
}

export type AudioControllerAction = IAudioControllerAction<
  number | OscillatorType | BiquadFilterType
>;
