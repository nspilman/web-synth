import React, { useState, useEffect } from "react";
import AudioContextService from "../services/audioContextService";
import { useSelector } from "react-redux";
import { getFrequency, keyNames } from "../data/notes";
import useEnvelope from "./useEnvelope";
import useAudioContextWrapper from "./useAudioContextWrapper";
import { AppState } from "../store/reducers";
import { getWave } from "../data/waveforms";

const useVoice = (note: keyNames) => {
  const audioContext = AudioContextService.getInstance();
  const envelopeGainNode = audioContext.createGain();

  const { onNoteOn, onNoteOff } = useEnvelope();
  const { detune, count } = useSelector((state: AppState) => state.oscillator);
  const { basic } = useSelector((state: AppState) => state);
  const { octave, waveformId } = basic;
  const waveform = getWave(waveformId);
  const frequency = getFrequency(note, octave);
  const numOscillators = count;
  const [oscillators, setOscillators] = useState([] as OscillatorNode[]);
  const { filterNode } = useAudioContextWrapper();

  const getDetuneVal = (oscIndex: number) => {
    return oscIndex % 2 == 0 ? detune : -detune;
  };

  const stopPlayingOsc = (playingOsc: OscillatorNode[]) => {
    for (var i = 0; i < playingOsc.length; i++) {
      const osc = playingOsc[i];
      try {
        osc?.stop();
        osc?.disconnect();
      } catch (e) {
        console.log({ e });
      }
    }
  };

  const playVoice = () => {
    for (var i = 0; i < numOscillators; i++) {
      const osc = audioContext.createOscillator();
      osc.frequency.value = frequency;
      osc.start();
      osc.type = waveform;
      osc.detune.value = getDetuneVal(i);
      osc.connect(filterNode);
      setOscillators([osc]);
      onNoteOn(envelopeGainNode);
    }

    // envelopeGainNode.connect(filterNode);
    // onNoteOn(envelopeGainNode);
    return oscillators;
  };

  const stopVoice = () => {
    // if (!isActivelyPlaying) return;
    // save the currently playing oscillators so the envelope can continue to hold them during release
    const currentOscillators = [...oscillators];

    // schedule current set of oscillators to be destructed after release
    // onNoteOff(envelopeGainNode, stopPlayingOsc, currentOscillators);
    oscillators.forEach((osc) => osc.stop());
    // reset main oscillators since curOsc will be passed to the envelope

    setOscillators([]);
  };

  return { playVoice, stopVoice };
};

export default useVoice;
