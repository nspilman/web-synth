import React from "react";
import { StyledDialControl, StyledLabel } from "../../styled/control";
import ControlKnob from "./controlKnob";
import IDialControlParameters from "../../../interfaces/IDailControlParameters";

type Props = {
  parameters: IDialControlParameters;
  value: number;
  setValue: (value: number) => void;
};

function DialControl(props: Props) {
  const { min, max, title, factor = 1 } = props.parameters;

  const { value, setValue } = props;

  const localSetvalue = (value: number) => {
    setValue(value / factor);
  };

  return (
    <StyledDialControl>
      <StyledLabel>{title}</StyledLabel>
      <ControlKnob
        min={min * factor}
        max={max * factor}
        value={value * factor}
        setValue={localSetvalue}
      />
    </StyledDialControl>
  );
}

export default DialControl;
