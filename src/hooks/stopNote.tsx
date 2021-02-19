interface Note {
    key: string,
    octave: number,
}

function stopNote(audioContextWrapper: any, note: Note) : void{
    const { key, octave } = note;
    audioContextWrapper.stopNote(key, octave);
}

export default stopNote;
