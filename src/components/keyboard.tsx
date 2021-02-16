import React, { useState, useContext } from 'react';
import notes from "../data/notes"
import AudioContextWrapper from "../classes/audioContextWrapper";
import styled from "styled-components";
import Key from "./key";
import stopNote from '../hooks/stopNote';
import playNote from '../hooks/playNote';

import {KeyboardProvider} from "../hooks/keyboardContext";
import OctaveControl from "./octaveControl";

const Board = styled.div`
    display: flex;
`
const audioController = new AudioContextWrapper();

function Keyboard() {
    // const contextTest = useContext(KeyboardContext)
    // console.log(contextTest)
    const [isClicked, setIsClicked] = useState(false);
    // const [octave, setOctave] = useState(defaultOctave);

    // const initialState = { octave };
    const octave = 3;
    const setOctave = () => {};

    return (
        <KeyboardProvider>
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
                        key={key}
                    />)}
                </Board>
                <OctaveControl
                    // setOctave={setOctave}
                    // curOctave={octave}
                />
            </div>
        </KeyboardProvider>
    )
}

export default Keyboard;