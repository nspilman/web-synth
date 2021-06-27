import { n8jswebsynth } from "../proto/wavetableMessage";

export default class WavetableMessageUtils {
    static fromBase64(base64: string) {
        var buffer = WavetableMessageUtils.base64ToArrayBuffer(base64);
        try {
            var decodedMessage = n8jswebsynth.WavetableMessage.decode(buffer);
            return decodedMessage;
        } catch (e) {
            console.log("Unable to load base64: " + e);
            return null;
        }
    }

    // borrowed from https://stackoverflow.com/questions/21797299/convert-base64-string-to-arraybuffer/21797381
    static base64ToArrayBuffer(base64: string) {
        var binaryString = window.atob(base64);
        var len = binaryString.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        return bytes;
    }
}