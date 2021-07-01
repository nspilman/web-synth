import { useSelector } from "react-redux";
import React from "react";
import AudioContextService from "../services/audioContextService";
import { AppState } from "../store/reducers";

const useEnvelope = () => {
  const { attackMs, decayMs, sustain, releaseMs } = useSelector(
    (state: AppState) => state.envelope
  );
  const audioContext = AudioContextService.getInstance();

  const onNoteOn = (gainNode: GainNode) => {
    // cancel any existing envelope
    gainNode.gain.cancelScheduledValues(0);

    // reset envelope
    var now = audioContext.currentTime;
    gainNode.gain.value = 0;

    // ramp up to attack
    gainNode.gain.linearRampToValueAtTime(1.0, now + attackMs);

    // ramp down to sustain
    gainNode.gain.linearRampToValueAtTime(sustain, now + attackMs + decayMs);
  };

  const onNoteOff = (
    gainNode: GainNode,
    stopOscCallback: (playingOsc: OscillatorNode[]) => void,
    playingOsc: OscillatorNode[]
  ) => {
    // cancel any current ramping but hold value
    gainNode.gain.cancelAndHoldAtTime(0);

    // ramp down to release
    var now = audioContext.currentTime;
    gainNode.gain.linearRampToValueAtTime(0, now + releaseMs);

    // stop oscillator
    setTimeout(stopOscCallback, releaseMs * 1000, playingOsc);
  };
  return { onNoteOn, onNoteOff };
};

export default useEnvelope;
