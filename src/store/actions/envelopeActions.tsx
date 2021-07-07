import { AudioControllerAction } from ".";

export enum envelopeActionTypes {
  SET_ATTACK = "ENV_SET_ATTACK",
  SET_DECAY = "ENV_SET_DECAY",
  SET_RELEASE = "ENV_SET_RELEASE",
  SET_SUSTAIN = "ENV_SET_SUSTAIN",
}

export const createSetAttackMs = (newAttack: number): AudioControllerAction => {
  return {
    type: envelopeActionTypes.SET_ATTACK,
    payload: newAttack,
  };
};

export const createSetDecayMs = (newDecay: number): AudioControllerAction => {
  return {
    type: envelopeActionTypes.SET_DECAY,
    payload: newDecay,
  };
};

export const createSetSustain = (newSustain: number) => {
  return {
    type: envelopeActionTypes.SET_SUSTAIN,
    payload: newSustain,
  };
};

export const createSetRelease = (newRelease: number) => {
  return {
    type: envelopeActionTypes.SET_RELEASE,
    payload: newRelease,
  };
};
