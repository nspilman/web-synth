interface Note {
    key: string,
    octave: number,
    wave: string
}

function playNote(audioContextWrapper: any, note: Note) : void{
    const {key, octave, wave} = note;
    audioContextWrapper.playNote(key, octave, wave)
}

export default playNote;
