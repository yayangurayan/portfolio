// Mengelola semua efek suara menggunakan Tone.js
// Pastikan Tone.js sudah dimuat melalui CDN di index.html

let isMuted = true;
let isAudioReady = false;

// Inisialisasi synth
let jumpSynth, collectSynth, hitSynth, winSynth;

// Fungsi ini harus dipanggil setelah interaksi pengguna pertama (misalnya, unmute)
export const startAudio = async () => {
    if (isAudioReady) return;
    try {
        await Tone.start();
        console.log("Audio context started");
        
        jumpSynth = new Tone.Synth({ oscillator: { type: 'sine' }, envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 0.1 } }).toDestination();
        collectSynth = new Tone.Synth({ oscillator: { type: 'triangle' }, envelope: { attack: 0.005, decay: 0.2, sustain: 0.1, release: 0.2 } }).toDestination();
        hitSynth = new Tone.NoiseSynth({ noise: { type: 'pink' }, envelope: { attack: 0.005, decay: 0.2, sustain: 0, release: 0.1 } }).toDestination();
        winSynth = new Tone.PolySynth(Tone.Synth, { oscillator: { type: 'fatsawtooth' } }).toDestination();

        isAudioReady = true;
    } catch (e) {
        console.error("Could not start audio context", e);
    }
};

export const setMuted = (muted) => {
    isMuted = muted;
};

export const playJumpSound = () => {
    if (isMuted || !isAudioReady) return;
    jumpSynth.triggerAttackRelease("C5", "8n", Tone.now());
};

export const playCollectSound = () => {
    if (isMuted || !isAudioReady) return;
    collectSynth.triggerAttackRelease("G5", "8n", Tone.now());
};

export const playHitSound = () => {
    if (isMuted || !isAudioReady) return;
    hitSynth.triggerAttackRelease("4n", Tone.now());
};

export const playWinSound = () => {
    if (isMuted || !isAudioReady) return;
    const now = Tone.now();
    winSynth.triggerAttackRelease("C4", "8n", now);
    winSynth.triggerAttackRelease("E4", "8n", now + 0.1);
    winSynth.triggerAttackRelease("G4", "8n", now + 0.2);
    winSynth.triggerAttackRelease("C5", "8n", now + 0.3);
};
