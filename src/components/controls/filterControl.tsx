import React, { useContext } from 'react';
import { getAllFilterTypes } from '../../data/filterTypes';
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import StyledSelect from "../styled/controlSelect";
import StyledRange from "../styled/controlRange";

import { KeyboardContext, UpdateKeyboardContext } from "../../hooks/keyboardContext";

const StyledFilterControl = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

function FilterControl(){
    const state = useContext(KeyboardContext);
    const setState = useContext(UpdateKeyboardContext);

    const setFilterTypeAndState = (newValue: string) => {
        setState({ ...state, filterType: newValue });
    }

    const setFilterFrequencyAndState = (newValue: number) => {
        setState({ ...state, filterFrequency: newValue });
    }

    const setFilterQAndState = (newValue: number) => {
        setState({ ...state, filterQ: newValue });
    }

    const { filterFrequency, filterQ } = state;

    const setFilterTypeFromEvent = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setFilterTypeAndState(e.target.value);
    }

    const setFilterFrequencyFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setFilterFrequencyAndState(Number(e.currentTarget.value));
    }

    const setFilterQFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setFilterQAndState(Number(e.currentTarget.value));
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
            <StyledRange type='range' id='filter-freq-id' className='filter-freq' min='40' max='20000' value={filterFrequency}
                onInput={(e) => setFilterFrequencyFromEvent(e)}
            >
            </StyledRange>
                  <StyledLabel>
                        Q
                </StyledLabel>
            <StyledRange type='range' id='filter-q-id' className='filter-q' min='0.001' max='20' step='0.01' value={filterQ}
                onInput={(e) => setFilterQFromEvent(e)}
            >
            </StyledRange>
        </StyledFilterControl>
    )
}

export default FilterControl