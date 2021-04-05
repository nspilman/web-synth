import { AudioControllerAction } from ".";
import audioContextService from "../../services/audioContextService";
const audioContext = audioContextService.getInstance();

export enum envelopeActionTypes {
    SET_ATTACK = "ENV_SET_ATTACK",
    SET_DECAY = "ENV_SET_DECAY",
    SET_RELEASE = "ENV_SET_RELEASE",
    SET_SUSTAIN = "ENV_SET_SUSTAIN"
}

export const createSetAttackMs = (newAttack : number) : AudioControllerAction =>
{
    return {
        type: envelopeActionTypes.SET_ATTACK,
        payload: newAttack,
        setAudioController: () => audioContext.setAttackMs(newAttack),
    }
}

export const createSetDecayMs = (newDecay : number) : AudioControllerAction =>
{
    return {
        type: envelopeActionTypes.SET_DECAY,
        payload: newDecay,
        setAudioController: () => audioContext.setDecayMs(newDecay),
    }
}

export const createSetSustain = (newSustain : number) =>
{
    return {
        type: envelopeActionTypes.SET_SUSTAIN,
        payload: newSustain,
        setAudioController: () => audioContext.setSustain(newSustain),
    }
}

export const createSetRelease = (newRelease : number) =>
{
    return {
        type: envelopeActionTypes.SET_RELEASE,
        payload: newRelease,
        setAudioController: () => audioContext.setReleaseMs(newRelease),
    }
}