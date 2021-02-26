import React, { useContext } from 'react';
import { KeyboardContext, UpdateKeyboardContext } from "../../hooks/keyboardContext";
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import StyledButton from "../styled/controlButton";
import StyledRange from "../styled/controlRange";


const StyledOscillatorsControl = styled.div`
    display:flex;
    flex-direction:column;
    width:200px;
    align-items:center;
`

const minNumOscillators = 1;
const maxNumOscillators = 2;

function OscillatorsControl() {
    const state = useContext(KeyboardContext);
    const setState = useContext(UpdateKeyboardContext);
    const { numOscillators, oscillatorUnisonDetune, noiseGain } = state;
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

    const setNoiseGainState = (newGain: number) => {
        setState({ ...state, noiseGain: newGain });
    }

    const setOscillatorUnisonDetuneFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setOscillatorUnisonDetuneAndState(Number(e.currentTarget.value));
    }

    const setNoiseGainFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setNoiseGainState(Number(e.currentTarget.value));
    }

    return (
        <StyledOscillatorsControl id="OscillatorsControl">
            <StyledLabel>OSCILLATORS : {numOscillators}</StyledLabel>
            <div className = 'num-oscillators-buttons-wrapper'
                style={{flexDirection:'row', display:'flex'}}
            >
                <StyledButton className="lower-num-oscillators"
                    onClick={() : void => decrementNumOscillators()}
                >
                    -
                </StyledButton>
                <StyledButton className="upper-num-oscillators"
                    onClick={() : void => incrementNumOscillators()}
                >
                    +
                </StyledButton>
            </div>
            <br/>
            <StyledLabel>
                        UNISON DETUNE
            </StyledLabel>
            <StyledRange type='range' id='oscillator-unison-detune-id' className='oscillator-unison-detune' min='0' max='100' value={oscillatorUnisonDetune}
                onInput={(e) => setOscillatorUnisonDetuneFromEvent(e)}
            >
            </StyledRange>
            <br />
            <StyledLabel>
                        NOISE LEVEL
            </StyledLabel>
            <StyledRange type='range' id='noise-gain-id' className='noise-gain' min='0' max='1' step='0.01' value={noiseGain}
                onInput={(e) => setNoiseGainFromEvent(e)}
            >
            </StyledRange>
        </StyledOscillatorsControl>
    )
}

export default OscillatorsControl