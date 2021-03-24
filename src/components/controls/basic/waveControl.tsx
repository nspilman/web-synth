import React, { useContext, useState, useEffect } from 'react';
import { getAllWaveTypes } from "../../../data/waveforms";
import styled from "styled-components";
import StyledLabel from "../../styled/controlLabels";
import StyledSelect from "../../styled/controlSelect";
import IKeyboardContextSignature from "../../../interfaces/IKeyboardContextSignature";

import { KeyboardContext, UpdateKeyboardContext } from "../../../hooks/keyboardContext";

const StyledWaveControl = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

function WaveControl(){
    const state : IKeyboardContextSignature = useContext(KeyboardContext);
    const setState = useContext(UpdateKeyboardContext);
    const localStorageKey = "waveform";
    const waveTypeOptions = getAllWaveTypes();
  
    const { audioContextWrapper }: IKeyboardContextSignature = useContext(KeyboardContext);
    let initialWaveform = localStorage.getItem(localStorageKey) ?? waveTypeOptions[0];

    const [wave, setWave] = useState(initialWaveform);

    useEffect((): void => {
        localStorage.setItem(localStorageKey, wave);
        audioContextWrapper.waveform = wave as OscillatorType;
    })

    return (
        <StyledWaveControl id="WaveControl">
            <StyledLabel>WAVEFORM</StyledLabel>
            <StyledSelect id="wave-select-id" className="wave-select"
                onChange={(e) => setWave(e.target.value)}
            >
                {waveTypeOptions.map(waveform => <option value={waveform} key={waveform}>{waveform}</option>)}
            </StyledSelect>
        </StyledWaveControl>
    )
}

export default WaveControl