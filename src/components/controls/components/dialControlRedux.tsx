
import React from 'react'
import StyledLabel from "../../styled/controlLabels";
import ControlKnob from "./controlKnob";

type Props = {
    parameters : {
        min : number,
        max: number,
        value: number,
        title: string,
    },
    setValue : (value: number) => void;
}

function DialControl(props : Props){
    const { min, 
            max, 
            title, 
            value, 
        } = props.parameters;
    
    const { setValue } = props;

    const localSetvalue = (value: number) =>{
         setValue(value)
    }

    return( 
        <div>
            <StyledLabel>
                {title}
            </StyledLabel>
            <ControlKnob
                min={ min }
                max={ max }
                value={ value }
                setValue={ localSetvalue }
            />
        </div>
    )
}

export default DialControl;