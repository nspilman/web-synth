// Utilities to help generate presets on a dev machine

import { n8jswebsynth } from "./wavetableMessage";

export default class WavetablePresetUtils {
    static writePresetFile() {
        // create preset
        var message = n8jswebsynth.WavetableMessage.create();
        message.name = "sine";
        message.dataType = n8jswebsynth.DataType.FREQUENCY;
        
        var frequencyData = new n8jswebsynth.FrequencyData();
        frequencyData.real = [0, 1];
        frequencyData.imag = [0, 0];
    
        message.frequencyData = frequencyData;
    
        var messageBuffer = n8jswebsynth.WavetableMessage.encode(message).finish();
        var messageBase64 = WavetablePresetUtils.arrayBufferToBase64(messageBuffer);
        console.log(messageBase64);

        // download
        //var url = URL.createObjectURL(new Blob([messageBuffer], {type: "application/binary"}))
        var url = URL.createObjectURL(new Blob([messageBase64], {type: "application/octet-stream;base64"}));
    
        var element = document.createElement('a');
        element.href = url;
        element.setAttribute('download', "sine.txt");
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }

    // borrowed from https://stackoverflow.com/questions/9267899/arraybuffer-to-base64-encoded-string
    static arrayBufferToBase64(bytes: Uint8Array) {
        var binary = '';
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }

        return window.btoa(binary);
    }
}