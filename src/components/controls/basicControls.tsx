import React from "react";
import styled from "styled-components";
import DialControl from "./components/dialControl";
import { AppState } from "../../store/reducers";
import { useSelector } from "react-redux";
import {
  createSetDistortion,
  createSetGain,
  createSetOctave,
  createSetWave,
} from "../../store/actions/basicActions";

import {
  distortionParameters,
  gainParameters,
  octaveParameters,
  waveParameters,
} from "../../data/dialControlParmeters";
import { controlState } from "../controlPanel";
import { StyledControl } from "../styled/control";

function BasicControlsWrapper({ triggerStateChange }: controlState) {
  const { distortion, gain, octave, waveformId } = useSelector(
    (state: AppState) => state.basic
  );

  return (
    <StyledControl>
      <DialControl
        parameters={waveParameters}
        value={waveformId}
        setValue={(newWaveSelector) =>
          triggerStateChange(newWaveSelector, createSetWave)
        }
      />
      <DialControl
        parameters={octaveParameters}
        value={octave}
        setValue={(newOctave) => triggerStateChange(newOctave, createSetOctave)}
      />
      <DialControl
        parameters={gainParameters}
        value={gain}
        setValue={(newGain) => triggerStateChange(newGain, createSetGain)}
      />
      <DialControl
        parameters={distortionParameters}
        value={distortion}
        setValue={(newDistortion) =>
          triggerStateChange(newDistortion, createSetDistortion)
        }
      />
    </StyledControl>
  );
}

export default BasicControlsWrapper;
