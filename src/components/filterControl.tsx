import React, { useContext } from 'react';
import { getAllFilterTypes } from '../data/filterTypes';
import { setFilterType, setFilterFrequency } from "../hooks/setFilter";
import styled from "styled-components";

import { KeyboardContext, UpdateKeyboardContext } from "../hooks/keyboardContext";

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
        setFilterType(audioContextWrapper, newValue as BiquadFilterType);
        setState({ ...state, filterType: newValue });
    }

    const setFilterFrequencyAndState = (newValue: number) => {
        setFilterFrequency(audioContextWrapper, newValue);
        setState({ ...state, filterFrequency: newValue });
    }

    const { audioContextWrapper, filterType, filterFrequency } = state;

    const setFilterTypeFromEvent = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setFilterTypeAndState(e.target.value);
    }

    const setFilterFrequencyFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setFilterFrequencyAndState(Number(e.currentTarget.value));
    }

    const filterTypeOptions = getAllFilterTypes();

    return (
        <StyledFilterControl>
            <span style={{fontSize:'1.4rem', color:'rgb(230,230,230)'}}>FILTER</span>
            <select style={{height:'2rem',margin:'.2rem .1rem'}} id="filter-select-id" className="filter-select"
                onChange={(e) => setFilterTypeFromEvent(e)}
            >
                {filterTypeOptions.map(filter => <option value={filter} key={filter}>{filter}</option>)}
            </select>
            <input type='range' id='filter-freq-id' className='filter-freq' min='40' max='20000' value={filterFrequency}
                onInput={(e) => setFilterFrequencyFromEvent(e)}
            >
            </input>
        </StyledFilterControl>
    )
}

export default FilterControl