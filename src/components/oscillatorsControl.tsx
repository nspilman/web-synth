import React, { useContext } from 'react';
import { KeyboardContext, UpdateKeyboardContext } from "../hooks/keyboardContext";
import styled from "styled-components";

const StyledOscillatorsControl = styled.div`
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

const minNumOscillators = 1;
const maxNumOscillators = 2;

function OscillatorsControl() {
    const state = useContext(KeyboardContext);
    const setState = useContext(UpdateKeyboardContext);
    const { numOscillators, oscillatorUnisonDetune } = state;
    const updateContext = useContext(UpdateKeyboardContext);

    const decrementNumOscillators = () => {
        const newValue = (numOscillators - 1 < minNumOscillators) ? minNumOscillators : numOscillators - 1;
        updateContext({...state,numOscillators:newValue})
    }

    const incrementNumOscillators = () => {
        const newValue = (numOscillators + 1 > maxNumOscillators) ? maxNumOscillators : numOscillators + 1;
        updateContext({...state,numOscillators:newValue})
    }

    const setOscillatorUnisonDetuneAndState = (newValue: number) => {
        setState({ ...state, oscillatorUnisonDetune: newValue });
    }

    const setOscillatorUnisonDetuneFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setOscillatorUnisonDetuneAndState(Number(e.currentTarget.value));
    }

    return (
        <StyledOscillatorsControl id="OscillatorsControl">
            <span style = {{fontSize:'1.4rem', color:'rgb(230,230,230)'}}>OSCILLATORS : {numOscillators}</span>
            <div className = 'num-oscillators-buttons-wrapper'
                style={{flexDirection:'row', display:'flex'}}
            >
                <StyledControlButton className="lower-num-oscillators"
                    onClick={() : void => decrementNumOscillators()}
                >
                    -
                </StyledControlButton>
                <StyledControlButton className="upper-num-oscillators"
                    onClick={() : void => incrementNumOscillators()}
                >
                    +
                </StyledControlButton>
            </div>
            <br/>
            <span style={{
                        fontSize:'1.0rem', 
                        color:'rgb(230,230,230)'
                    }}>
                        UNISON DETUNE
            </span>
            <input type='range' id='oscillator-unison-detune-id' className='oscillator-unison-detune' min='0' max='100' value={oscillatorUnisonDetune}
                onInput={(e) => setOscillatorUnisonDetuneFromEvent(e)}
            >
            </input>
        </StyledOscillatorsControl>
    )
}

export default OscillatorsControl