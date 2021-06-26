import Wavetable from "./Wavetable";

export default class WavetableCache {
    static singleton: WavetableCache;
    cache: { [id: string] : Wavetable };

    constructor() {
        this.cache = {};
    }

    static getSingleton() {
        if (WavetableCache.singleton == null) {
            WavetableCache.singleton = new WavetableCache();
        }

        return WavetableCache.singleton;
    }

    tryGetWavetable(name: string) {
        if (name in this.cache) {
            return this.cache[name];
        }
        else {
            return null;
        }
    }

    setWavetable(name: string, wavetable: Wavetable) {
        this.cache[name] = wavetable;
    }

    initCache() {
        // TODO: initialize cache from presets in data/wavetables folder
    }
}