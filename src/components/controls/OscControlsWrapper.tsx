import React, { Dispatch } from 'react';
import styled from "styled-components";
import OscillatorCountControl from "./oscillator/oscillatorCountControl"
import DialControl from "./components/dialControl"
import { AppState } from "../../store/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction, oscillatorActionTypes } from "../../store/actions/audioControllerAction";

import { 
    noiseLevelParameters, 
    oscDetuneParameters, 
} from "../../data/dialControlParmeters"

const StyledOscillatorsControl = styled.div`
    display:flex;
    align-items:center;
`

function OscillatorsControl() {
    const { detune, noiseGain } = useSelector((state: AppState) => state.oscillator);
    const { audioContext } = useSelector((state: AppState) => state);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

    const setDetune = (freq: number) => {
        const payload: AudioControllerAction = {
            type: oscillatorActionTypes.SET_DETUNE,
            payload: freq,
            setAudioController: () => audioContext.setOscillatorUnisonDetune(freq / (oscDetuneParameters.factor ?? 1)),
        }
        dispatch(payload)
    }

    const setNoise = (noise: number) => {
        const payload: AudioControllerAction = {
            type: oscillatorActionTypes.SET_NOISE,
            payload: noise,
            setAudioController: () => audioContext.setNoiseGain(noise / (noiseLevelParameters.factor ?? 1)),
        }
        dispatch(payload)
    }

    return (
        <StyledOscillatorsControl id="OscillatorsControl">
            <OscillatorCountControl/>
            <DialControl
               parameters={oscDetuneParameters}
               value={detune}
               setValue={(value) => setDetune(value)} />
         <DialControl
               parameters={noiseLevelParameters}
               value={noiseGain}
               setValue={(value) => setNoise(value)} />
        </StyledOscillatorsControl>
    )
}

export default OscillatorsControl