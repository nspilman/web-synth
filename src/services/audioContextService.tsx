export default class AudioContextService {
  static audioContext: AudioContext | null = null;
  static getInstance() {
    if (!AudioContextService.audioContext) {
      AudioContextService.audioContext = new AudioContext();
    }

    return AudioContextService.audioContext;
  }
}
