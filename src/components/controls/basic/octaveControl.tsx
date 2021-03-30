import React, { Dispatch } from 'react';
import styled from "styled-components";
import StyledLabel from "../../styled/controlLabels";
import StyledButton from "../../styled/controlButton";
import { useDispatch, useSelector } from 'react-redux';
import { AudioControllerAction } from '../../../store/actions';
import { AppState } from '../../../store/reducers/';
import { createSetOctave } from '../../../store/actions/basicActions';

const StyledOctaveControl = styled.div`
display:flex;
flex-direction:column;
width:200px;
align-items:center;
`

const minOctave = 0;
const maxOctave = 8;

function OctaveControl() {
    const { basic } = useSelector((state: AppState) => state);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();
    const { octave } = basic;

    const setOctave = (newOctave : number) => {  
        const payload: AudioControllerAction = createSetOctave(newOctave);
        dispatch(payload)
    }

    const decrementOctave = () => {
        if(octave !== minOctave){
            const newOctave = octave - 1;
            setOctave(newOctave)
        }
    }

    const incrementOctave = () => {
        if(octave !== maxOctave){
            const newOctave = octave + 1;
            setOctave(newOctave)
        }
    }  

    return (
        <StyledOctaveControl id="OctaveControl">
            <StyledLabel>OCTAVE : {octave}</StyledLabel>
            <div className = 'octave-buttons-wrapper'
                style={{flexDirection:'row', display:'flex'}}
            >
            <StyledButton className="lower-octave"
                onClick={() : void => decrementOctave()}
            >
                 -
            </StyledButton>
            <StyledButton className="upper-octave"
                onClick={() : void => incrementOctave()}
            >
                 +
            </StyledButton>
            </div>
        </StyledOctaveControl>
    )
}

export default OctaveControl