import React, { Dispatch } from 'react';
import styled from "styled-components";
import DialControl from "./components/dialControl"
import { AppState } from "../../store/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction } from "../../store/actions";
import { createSetDistortion, createSetGain, createSetOctave, createSetWave } from "../../store/actions/basicActions";

import { 
    distortionParameters, gainParameters, octaveParameters, waveParameters, 
} from "../../data/dialControlParmeters"

const StyledEnvelopeControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function BasicControlsWrapper(){
   const { distortion, gain, octave, waveformId } = useSelector((state: AppState) => state.basic);
   const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

   const setDistortionAmount = (newDistortion : number) => {
    {
        const payload: AudioControllerAction = createSetDistortion(newDistortion)
        dispatch(payload)
   }}

   const setGain = (newGain : number) => {
    {
        const payload: AudioControllerAction = createSetGain(newGain)
        dispatch(payload)
   }}

   const setOctave = (newOctave : number) => {
    {
        const payload: AudioControllerAction = createSetOctave(newOctave)
        dispatch(payload)
   }
}

   const setWave = (newWaveSelector : number) => {
    {
        const payload: AudioControllerAction = createSetWave(newWaveSelector)
        dispatch(payload)
   }
}

   return (
        <StyledEnvelopeControl>
            <DialControl 
                parameters = {waveParameters}
                value = {waveformId}
                setValue = {(newWave) => setWave(newWave) }
            />
            <DialControl 
                parameters = {octaveParameters}
                value = {octave}
                setValue = {(newOctave) => setOctave(newOctave) }
            />
            <DialControl 
                parameters = {gainParameters}
                value = {gain}
                setValue = {(newGain) => setGain(newGain) }
            />
            <DialControl 
                parameters = {distortionParameters}
                value = {distortion}
                setValue = {(newDistortionValue) => setDistortionAmount(newDistortionValue) }
            />
        </StyledEnvelopeControl>
    )
}

export default BasicControlsWrapper