import Wavetable from "./Wavetable";
import WavetableMessageUtils from "../proto/WavetableMessageUtils";
import WavetablePresetUtils from "../proto/WavetablePresetUtils";
import wavetables from "../data/wavetables";
import { n8jswebsynth } from "../proto/wavetableMessage";

export default class WavetableCache {
    static singleton: WavetableCache;
    cache: Map<string, Wavetable>;

    constructor() {
        this.cache = new Map<string, Wavetable>();
    }

    static getSingleton() {
        if (WavetableCache.singleton == null) {
            WavetableCache.singleton = new WavetableCache();
        }

        return WavetableCache.singleton;
    }

    tryGet(name: string) {
        var lowercaseName = name.toLowerCase();
        if (this.cache.has(lowercaseName)) {
            return this.cache.get(lowercaseName);
        }
        else {
            return null;
        }
    }

    add(name: string, wavetable: Wavetable) {
        this.cache.set(name.toLowerCase(), wavetable);
    }

    init() {
        // Uncomment the next line to generate a preset!
        // WavetablePresetUtils.writePresetFile();

        wavetables.forEach((value: string, key: string) => {
            var wavetableMessage = WavetableMessageUtils.fromBase64(value);
            if (wavetableMessage == null) {
                return;
            }

            if (wavetableMessage.dataType == n8jswebsynth.DataType.FREQUENCY) {
                if (wavetableMessage.frequencyData?.real == null ||
                    wavetableMessage.frequencyData?.imag == null) {
                    console.log("Unable to load wavetable " + key + " since real or imag data is null");
                    return;
                }

                var wavetable = new Wavetable(wavetableMessage.frequencyData.real, wavetableMessage.frequencyData.imag);
                this.add(key, wavetable);
            }
            else {
                if (wavetableMessage.timeData?.sampleRate == null ||
                    wavetableMessage.timeData?.data == null) {
                    console.log("Unable to load wavetable " + key + " since time data is null");
                    return;
                }

                var wavetable = Wavetable.fromTimeData(wavetableMessage.timeData?.sampleRate, wavetableMessage.timeData?.data);
            }
        });
    }
}