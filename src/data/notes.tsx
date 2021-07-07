// type BaseFrequenciesType = {
//     [key: frequencyKeys]: number
// }

export type NoteIdentifier = {
  frequency: number;
  keyName: keyNames;
  octave: number;
};

export type keyNames =
  | "C"
  | "Db"
  | "D"
  | "Eb"
  | "E"
  | "F"
  | "Gb"
  | "G"
  | "Ab"
  | "A"
  | "Bb"
  | "B";

const range = (start: number, end: number): number[] => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

const baseFrequencies: Map<keyNames, number> = new Map([
  ["C", 16.35],
  ["Db", 17.32],
  ["D", 18.35],
  ["Eb", 19.45],
  ["E", 20.6],
  ["F", 21.83],
  ["Gb", 23.12],
  ["G", 24.5],
  ["Ab", 25.96],
  ["A", 27.5],
  ["Bb", 29.14],
  ["B", 30.87],
]);

export default baseFrequencies;

export const getFrequency = (note: keyNames, octave: number): number => {
  return (baseFrequencies.get(note) ?? 1) * 2 ** octave;
};

export const getAllFrequencies = (
  minOctave: number,
  maxOctave: number
): NoteIdentifier[] => {
  let output: NoteIdentifier[] = [];
  range(minOctave, maxOctave).map((octave) => {
    Array.from(baseFrequencies.keys()).map((keyName: keyNames) => {
      output.push({
        keyName: keyName as keyNames,
        octave: octave,
        frequency: getFrequency(keyName as keyNames, octave),
      });
    });
  });
  return output;
};
