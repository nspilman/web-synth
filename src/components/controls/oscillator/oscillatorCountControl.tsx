
import React, { Dispatch } from 'react'
import StyledButton from "../../styled/controlButton";
import StyledLabel from "../../styled/controlLabels";
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction, oscillatorActionTypes } from '../../../store/actions/audioControllerAction';
import { AppState } from '../../../store/reducers';

function OscillatorCountControl(){
    const minNumOscillators = 1; 
    const maxNumOscillators = 2; 

    const { count } = useSelector((state: AppState) => state.oscillator);
    const { audioContext } = useSelector((state: AppState) => state);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

    const setCount = (count: number) => {
        const payload: AudioControllerAction = {
            type: oscillatorActionTypes.SET_COUNT,
            payload: count,
            setAudioController: () => audioContext.setNumOscillators(count),
        }
        dispatch(payload)
    }

    const decrementNumOscillators = () => {
        if(count !== minNumOscillators){
            const newCount = count - 1;
            setCount(newCount)
        }
    }

    const incrementNumOscillators = () => {
        if(count !== maxNumOscillators){
            const newCount = count + 1;
            setCount(newCount)
        }   
    }

    return( 
        <div>
        <StyledLabel>OSCILLATORS : {count}</StyledLabel>
            <div className='num-oscillators-buttons-wrapper'
                style={{ flexDirection: 'row', display: 'flex' }}
            >
                <StyledButton className="lower-num-oscillators"
                    onClick={(): void => decrementNumOscillators()}
                >
                    -
                </StyledButton>
                <StyledButton className="upper-num-oscillators"
                    onClick={(): void => incrementNumOscillators()}
                >
                    +
                </StyledButton>
            </div>
        </div>
    )
}

export default OscillatorCountControl;