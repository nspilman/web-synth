import React, { useContext } from 'react';
import { KeyboardContext, UpdateKeyboardContext } from "../hooks/keyboardContext";
import setGain from "../hooks/setGain";
import styled from "styled-components";

const StyledGainControl = styled.div`
    display:flex;
    flex-direction:column;
    padding:1rem;
    width:200px;
    align-items:center;
`

const StyledControlButton = styled.div`
    height:2rem;
    width:2rem;
    background-color:rgb(230,230,230);
    margin:.1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover{
        background-color:rgb(90,20,20);
        color:white;
        cursor:pointer;
    }
    &::selection{
        background: transparent;
    }
`

const minGain = 0;
const maxGain = 1;

function GainControl() {
    const state = useContext(KeyboardContext);
    const setState = useContext(UpdateKeyboardContext);

    const setGainAndState = (newValue: number) => {
        setGain(audioContextWrapper, newValue)
        setState({ ...state, gain: newValue })
    }

    const { audioContextWrapper, gain } = state;

    const decrementGain = () => {
        const newValue = (gain - 0.1 < minGain) ? minGain : gain - 0.1;
        setGainAndState(newValue)
    }

    const incrementGain = () => {
        const newValue = (gain + 0.1 > maxGain) ? maxGain : gain + 0.1;
        setGainAndState(newValue)
    }

    return (
        <StyledGainControl id="GainControl">
            <span style={{ fontSize: '1.4rem', color: 'rgb(230,230,230)' }} >GAIN : {gain.toFixed(1)}</span>
            <div className='octave-buttons-wrapper'
                style={{ flexDirection: 'row', display: 'flex' }}
            >
                <StyledControlButton className="lower-octave"
                    onClick={(): void => decrementGain()}
                >
                    -
            </StyledControlButton>
                <StyledControlButton className="upper-octave"
                    onClick={(): void => incrementGain()}
                >
                    +
            </StyledControlButton>
            </div>
        </StyledGainControl>
    )
}

export default GainControl