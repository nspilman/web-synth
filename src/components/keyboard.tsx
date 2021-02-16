import React, { useState, useContext } from 'react';
import notes from "../data/notes"
import AudioContextWrapper from "../classes/audioContextWrapper";
import styled from "styled-components";
import Key from "./key";
import stopNote from '../hooks/stopNote';
import playNote from '../hooks/playNote';
import OctaveControl from './octaveControl';
import WaveControl from './waveControl';
import waveforms from '../data/waveforms';

import {KeyboardProvider} from "../hooks/keyboardContext";

const Board = styled.div`
    display: flex;
`
const audioController = new AudioContextWrapper();

function Keyboard() {
    // const contextTest = useContext(KeyboardContext)
    // console.log(contextTest)
    const [isClicked, setIsClicked] = useState(false);
    const [octave, setOctave] = useState(4);
    const [wave, setWave] = useState(waveforms.SINE);
    return (
        <div id="Keyboard">
            <Board className="keyboard"
                onMouseDown={() => setIsClicked(true)}
                onMouseUp={() => setIsClicked(false)}
                onMouseLeave={() => setIsClicked(false)}
            >
                {Object.keys(notes).map(key => <Key
                    isMouseDown={isClicked}
                    playNote={playNote}
                    stopNote={stopNote}
                    note={{ key, octave, wave }}
                    audioContextWrapper={audioController}
                />)}
            </Board>
            <OctaveControl
                // setOctave={setOctave}
                // curOctave={octave}
            />
            <WaveControl
                setWave={setWave}
            />
        </div>
    )
}

export default Keyboard;