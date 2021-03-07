import React, { useContext } from 'react';
import { getAllWaveTypes } from "../../data/waveforms";
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import StyledSelect from "../styled/controlSelect";
import IKeyboardContextSignature from "../../interfaces/IKeyboardContextSignature";

import { KeyboardContext, UpdateKeyboardContext } from "../../hooks/keyboardContext";

const StyledWaveControl = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

function WaveControl(){
    const state : IKeyboardContextSignature = useContext(KeyboardContext);
    const setState = useContext(UpdateKeyboardContext);

    const { audioContextParameters } = state;
    const newAudioContextParameters = { ...audioContextParameters }
    
    const setWave = (e : React.ChangeEvent<HTMLSelectElement>) =>{
        newAudioContextParameters.waveForm = e.target.value as OscillatorType; 
        setState({...state,
            audioContextParameters : newAudioContextParameters })
    }

    const waveTypeOptions = getAllWaveTypes();
    return (
        <StyledWaveControl id="WaveControl">
            <StyledLabel>WAVEFORM</StyledLabel>
            <StyledSelect id="wave-select-id" className="wave-select"
                onChange={(e) => setWave(e)}
            >
                {waveTypeOptions.map(waveform => <option value={waveform} key={waveform}>{waveform}</option>)}
            </StyledSelect>
        </StyledWaveControl>
    )
}

export default WaveControl