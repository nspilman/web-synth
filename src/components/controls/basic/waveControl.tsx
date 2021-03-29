import React, { Dispatch } from 'react';
import { getAllWaveTypes } from "../../../data/waveforms";
import styled from "styled-components";
import StyledLabel from "../../styled/controlLabels";
import StyledSelect from "../../styled/controlSelect";
import { useDispatch, useSelector } from 'react-redux';
import { AudioControllerAction, basicActionTypes, createSetWave } from '../../../store/actions/audioControllerAction';
import { AppState } from '../../../store/reducers';

const StyledWaveControl = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
function WaveControl() {
    const { basic } = useSelector((state: AppState) => state);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();
    const { waveForm } = basic;
    const waveTypeOptions = getAllWaveTypes();

    const setWave = (wave: OscillatorType) => {
        const payload: AudioControllerAction = createSetWave(wave);
        dispatch(payload)
    }

    return (
        <StyledWaveControl id="WaveControl">
            <StyledLabel>WAVEFORM</StyledLabel>
            <StyledSelect id="wave-select-id" className="wave-select"
                onChange={(e) => setWave(e.target.value as OscillatorType)}
                value={waveForm}
            >
                {waveTypeOptions.map(waveform => <option value={waveform} key={waveform}>{waveform}</option>)}
            </StyledSelect>
        </StyledWaveControl>
    )
}

export default WaveControl