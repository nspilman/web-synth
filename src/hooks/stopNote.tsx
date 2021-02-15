interface Note {
    key: string,
    octave: number,
    wave: string
}

function stopNote(audioContextWrapper: any, note: Note) : void{
    const {key, octave, wave} = note;
    audioContextWrapper.stopNote(key, octave);
}

export default stopNote;
