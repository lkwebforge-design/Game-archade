// Web Audio API ambient synthesizer and tactile UI sound designer
class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private ambientFilter: BiquadFilterNode | null = null;
  private masterGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.initContext();
    this.isMuted = !this.isMuted;

    if (!this.isMuted) {
      this.startAmbient();
      this.playBlip(520, 0.1);
    } else {
      this.stopAmbient();
    }
    return !this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public playBlip(freq = 440, duration = 0.08, type: OscillatorType = 'sine') {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // AudioContext policy catch
    }
  }

  public playLaser() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch {
      // Audio policy catch
    }
  }

  private startAmbient() {
    if (!this.ctx || !this.masterGain) return;

    try {
      // Warm, deep cinematic space pad
      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientFilter = this.ctx.createBiquadFilter();

      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(110, this.ctx.currentTime); // A2

      this.ambientOsc2.type = 'triangle';
      this.ambientOsc2.frequency.setValueAtTime(164.81, this.ctx.currentTime); // E3

      this.ambientFilter.type = 'lowpass';
      this.ambientFilter.frequency.setValueAtTime(450, this.ctx.currentTime);

      const padGain = this.ctx.createGain();
      padGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      padGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 2.5);

      this.ambientOsc1.connect(this.ambientFilter);
      this.ambientOsc2.connect(this.ambientFilter);
      this.ambientFilter.connect(padGain);
      padGain.connect(this.masterGain);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
    } catch {
      // Audio catch
    }
  }

  private stopAmbient() {
    try {
      if (this.ambientOsc1) {
        this.ambientOsc1.stop();
        this.ambientOsc1.disconnect();
        this.ambientOsc1 = null;
      }
      if (this.ambientOsc2) {
        this.ambientOsc2.stop();
        this.ambientOsc2.disconnect();
        this.ambientOsc2 = null;
      }
    } catch {
      // Audio catch
    }
  }
}

export const sound = new SoundManager();
