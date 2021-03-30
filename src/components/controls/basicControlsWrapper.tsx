import React, { Dispatch } from 'react';
import styled from "styled-components";
import DialControl from "./components/dialControl"
import OctaveControl from './basic/octaveControl';
import WaveControl from './basic/waveControl';
import GainControl from "./basic/gainControl";
import { AppState } from "../../store/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction } from "../../store/actions";
import { createSetDistortion } from "../../store/actions/basicActions";

import { 
    distortionParameters, 
} from "../../data/dialControlParmeters"

const StyledEnvelopeControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function BasicControlsWrapper(){
   const { distortion } = useSelector((state: AppState) => state.basic);
   const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

   const setDistortionAmount = (newDistortion : number) => {
    {
        const payload: AudioControllerAction = createSetDistortion(newDistortion)
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