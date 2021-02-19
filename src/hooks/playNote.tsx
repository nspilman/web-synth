interface Note {
    key: string,
    octave: number,
}

function playNote(audioContextWrapper: any, note: Note) : void{
    const {key, octave } = note;
    audioContextWrapper.playNote( key, octave )
}

export default playNote;
