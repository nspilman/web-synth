type BaseFrequenciesType = {
    [key:string]: number
}

type NoteIdentifier = {
    frequency : number,
    noteName : string,
    octave : number,
}

const range = (start : number, end : number) : number[] => {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}

const baseFrequencies : BaseFrequenciesType = {
        "C":   16.35,
       "Db":   17.32,
        "D":   18.35,
       "Eb":   19.45,
        "E":   20.60,
        "F":   21.83,
       "Gb":   23.12,
        "G":   24.50,
       "Ab":   25.96,
        "A":   27.50,
       "Bb":   29.14,
        "B":   30.87,
     }

export default baseFrequencies;

export const getFrequency = (note : string, octave : number) : number => {
    return baseFrequencies[note] * 2 ^ (octave)
}

export const getAllFrequencies = (minOctave : number, maxOctave : number) : NoteIdentifier[] => {
    let output : NoteIdentifier[] = [];
    range(minOctave, maxOctave).forEach(
        octave =>{
            Object.keys(baseFrequencies).forEach(
                note => {
                    output.push({
                        noteName : note,
                        octave : octave,
                        frequency : getFrequency(note, octave)
                    })
                }
            )
        }
    )
    return output;
} 