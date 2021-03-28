import React, { Dispatch } from 'react';
import styled from "styled-components";
import DialControl from "./components/dialControl"
import OctaveControl from './basic/octaveControl';
import WaveControl from './basic/waveControl';
import GainControl from "./basic/gainControl";
import { AppState } from "../../store/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction, basicActionTypes } from "../../store/actions/audioControllerAction";

import { 
    distortionParameters, 
} from "../../data/dialControlParmeters"

const StyledEnvelopeControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function BasicControlsWrapper(){
   const { audioContext } = useSelector((state: AppState) => state);
   const { distortion } = useSelector((state: AppState) => state.basic);
   const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

   const setDistortionAmount = (amount : number) => {
    {
        const payload: AudioControllerAction = {
            type: basicActionTypes.SET_DISTORTION,
            payload: amount,
            setAudioController: () => audioContext.setDistortionAmount(amount / (distortionParameters.factor ?? 1)),
        }
        dispatch(payload)
   }}

   return (
        <StyledEnvelopeControl>
            <WaveControl/>
            <OctaveControl/>
            <GainControl/>
            <DialControl 
                parameters = {distortionParameters}
                value = {distortion}
                setValue = {(newDistortionValue) => setDistortionAmount(newDistortionValue) }
            />
        </StyledEnvelopeControl>
    )
}

export default BasicControlsWrapper