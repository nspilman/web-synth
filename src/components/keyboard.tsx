import React, { useState } from 'react';
import notes from "../data/notes"
import AudioContextWrapper from "../classes/audioContextWrapper";
import styled from "styled-components";
import Key from "./key";
import stopNote from '../hooks/stopNote';
import playNote from '../hooks/playNote';
import OctaveControl from './octaveControl';

const Board = styled.div`
    display: flex;
`
const audioController = new AudioContextWrapper();

function Keyboard() {
    const [isClicked, setIsClicked] = useState(false);
    const [octave, setOctave] = useState(4);
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
                    note={{ key, octave }}
                    audioContextWrapper={audioController}
                />)}
            </Board>
            <OctaveControl
                setOctave={setOctave}
                curOctave={octave}
            />
        </div>
    )
}

export default Keyboard;