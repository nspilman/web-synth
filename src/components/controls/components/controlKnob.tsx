import React, { useState, useEffect } from "react";
import { Donut } from "react-dial-knob";
import colors from "../../../data/colors";
import "../../../App.css";

interface ControlKnobProps {
  value: number;
  setValue: (newValue: number) => void;
  max?: number;
  min?: number;
  step?: number;
  diameter?: number;
}

export default function ControlKnob({
  value,
  setValue,
  max = 10,
  min = 0,
  diameter = 45,
}: ControlKnobProps) {
  const [localValue, setLocalValue] = useState(value);
  const step = 1;
  const jumpLimit = 0.1;

  useEffect(() => {
    setValue(localValue);
  }, [localValue]);
  return (
    <Donut
      diameter={diameter}
      min={min}
      max={max}
      step={step}
      value={localValue}
      theme={{
        donutColor: colors.blue,
        centerColor: colors.black,
        bgrColor: colors.purple,
        centerFocusedColor: colors.black,
        maxedBgrColor: colors.blue,
        donutThickness: 4,
      }}
      jumpLimit={jumpLimit}
      onValueChange={(newValue) => setLocalValue(newValue)}
      ariaLabelledBy={"controlKnob"}
    ></Donut>
  );
}
