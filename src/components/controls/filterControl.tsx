import React, { useContext } from 'react';
import { getAllFilterTypes } from '../../data/filterTypes';
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import StyledSelect from "../styled/controlSelect";
import ControlKnob from "./components/controlKnob"
import IKeyboardContextSignature from "../../interfaces/IKeyboardContextSignature";

import { KeyboardContext, UpdateKeyboardContext } from "../../hooks/keyboardContext";

const StyledFilterControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function FilterControl() {
    const state: IKeyboardContextSignature = useContext(KeyboardContext);
    const { audioContextParameters } = state;
    const newAudioContextParameters = { ...audioContextParameters };
    const newFilterParameters = { ...newAudioContextParameters.filterParameters };
    const setState = useContext(UpdateKeyboardContext);

    const setFilterTypeAndState = (newValue: string) => {
        newFilterParameters.type = newValue as BiquadFilterType;
        newAudioContextParameters.filterParameters = newFilterParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const setFilterFrequencyAndState = (newValue: number) => {
        newFilterParameters.freq = newValue;
        newAudioContextParameters.filterParameters = newFilterParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const setFilterQAndState = (newValue: number) => {
        newFilterParameters.q = newValue;
        newAudioContextParameters.filterParameters = newFilterParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const { freq, q } = audioContextParameters.filterParameters;

    const setFilterTypeFromEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterTypeAndState(e.target.value);
    }

    const filterTypeOptions = getAllFilterTypes();

    return (
        <StyledFilterControl>
            <StyledLabel>
                FILTER
            </StyledLabel>
            <StyledSelect id="filter-select-id" className="filter-select"
                onChange={(e) => setFilterTypeFromEvent(e)}
            >
                {filterTypeOptions.map(filter => <option value={filter} key={filter}>{filter}</option>)}
            </StyledSelect>
            <StyledLabel>
                FREQUENCY
            </StyledLabel>
            <ControlKnob
                min={40}
                max={20000}
                value={freq}
                setValue={setFilterFrequencyAndState}
            />
            <StyledLabel>
                Q
            </StyledLabel>
            <ControlKnob
                min={1}
                max={20000}
                value={q}
                setValue={setFilterQAndState}
            />
        </StyledFilterControl>
    )
}

export default FilterControl