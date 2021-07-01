export default class Window {
    /*
     * Applies Hamming window in-place to buffer
     */
    static hamming(buffer: Float32Array) {
        for (var i = 0; i < buffer.length; i++) {
            var origVal = buffer[i];
            var window = 0.54 - 0.46*Math.cos((2 * Math.PI * i) / (buffer.length - 1));
            buffer[i] = origVal * window;
        }
    }
}