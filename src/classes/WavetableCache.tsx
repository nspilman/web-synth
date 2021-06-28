import Wavetable from "./Wavetable";
import wavetables from "../data/wavetables";

export default class WavetableCache {
    static singleton: WavetableCache;
    cache: Map<string, Wavetable>;

    constructor() {
        this.cache = new Map<string, Wavetable>();
    }

    static getSingleton() {
        if (!WavetableCache.singleton) {
            WavetableCache.singleton = new WavetableCache();
        }

        return WavetableCache.singleton;
    }

    get(name: string) {
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
        wavetables.forEach((value: number[][], key: string) => {
            var wavetable = new Wavetable(value[0], value[1]);
            this.add(key, wavetable);
        });
    }
}