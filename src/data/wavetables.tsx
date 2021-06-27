// map of wavetable name to list of arrays (real / imag)
const wavetables: Map<string, number[][]> = new Map([
    ["sine", [[0, 1], [0, 0]]],
    ["organ", [[0, 1, 0, 0, 1.5, 0, 0.1, 0, 0, 1], [0, 0, 0, 1, 0, 1, 0.2, 0, 1, 0]]]
  ]); 

export default wavetables;