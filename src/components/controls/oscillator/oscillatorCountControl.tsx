
import React, { Dispatch } from 'react'
import StyledButton from "../../styled/controlButton";
import StyledLabel from "../../styled/controlLabels";
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction, createSetOscCount } from '../../../store/actions/audioControllerAction';
import { AppState } from '../../../store/reducers';

function OscillatorCountControl(){
    const minNumOscillators = 1; 
    const maxNumOscillators = 2; 

    const { count } = useSelector((state: AppState) => state.oscillator);

    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

    const setCount = (count: number) => {
        const payload: AudioControllerAction = createSetOscCount(count);
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