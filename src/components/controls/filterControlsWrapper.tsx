import React, { useContext } from 'react';
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import DialControl from "./components/dialControl"
import { KeyboardContext } from "../../hooks/keyboardContext";
import IKeyboardContextSignature from '../../interfaces/IKeyboardContextSignature';

import { 
    filterFrequencyParameters, 
    filterQParameters, 
} from "../../data/dialControlParmeters"

const StyledFilterControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function FilterControl() {
   const { audioContextWrapper } :IKeyboardContextSignature = useContext(KeyboardContext);

    return (
        <StyledFilterControl>
            <StyledLabel>
                FILTER
            </StyledLabel>
            <DialControl
                parameters ={filterFrequencyParameters}
                setValue = {(newFreq) => audioContextWrapper.setFilterFreq(newFreq)}
            />
            <DialControl
                parameters ={filterQParameters}
                setValue = {(newQ) => audioContextWrapper.setFilterQ(newQ)}
            />
        </StyledFilterControl>
    )
}

export default FilterControl