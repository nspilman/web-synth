export default class AudioFileUtils {
    static GetAudioBufferFromFileAsync(file: File, onAudioBufferReadyCallback: (data: AudioBuffer) => void) {
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var reader = new FileReader();
        reader.onload = () => {
            var audioData = reader.result as ArrayBuffer;
            audioCtx.decodeAudioData(audioData).then((decodedData) => {
                    onAudioBufferReadyCallback(decodedData);
                });
        }

        reader.readAsArrayBuffer(file);
    }
}