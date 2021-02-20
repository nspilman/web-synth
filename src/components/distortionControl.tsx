import React, { useContext } from 'react';
import styled from "styled-components";

import { KeyboardContext, UpdateKeyboardContext } from "../hooks/keyboardContext";

const StyledDistortionControl = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

function FilterControl(){
    const state = useContext(KeyboardContext);
    const setState = useContext(UpdateKeyboardContext);

    const setDistortionAmountAndState = (newValue: number) => {
        setState({ ...state, distortionAmount: newValue });
    }

    const { distortionAmount } = state;

    const setDistortionAmountFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setDistortionAmountAndState(Number(e.currentTarget.value));
    }

    return (
        <StyledDistortionControl>
            <span style={{fontSize:'1.4rem', color:'rgb(230,230,230)'}}>DISTORTION</span>
            <input type='range' id='distortion-amount-id' className='distortion-amount' min='0' max='10' value={distortionAmount}
                onInput={(e) => setDistortionAmountFromEvent(e)}
            >
            </input>
        </StyledDistortionControl>
    )
}

export default FilterControl