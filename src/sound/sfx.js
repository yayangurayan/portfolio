// Mengelola semua efek suara menggunakan Tone.js
// Pastikan Tone.js sudah dimuat melalui CDN di index.html

let isMuted = true;
let isAudioReady = false;
let jumpSynth, collectSynth, hitSynth, winSynth;

const startAudio = async () => {
    if (isAudioReady) return;
    try {
        await Tone.start();
        
        jumpSynth = new Tone.Synth({ oscillator: { type: 'sine' }, envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 0.1 } }).toDestination();
        collectSynth = new Tone.Synth({ oscillator: { type: 'triangle' }, envelope: { attack: 0.005, decay: 0.2, sustain: 0.1, release: 0.2 } }).toDestination();
        hitSynth = new Tone.NoiseSynth({ noise: { type: 'pink' }, envelope: { attack: 0.005, decay: 0.2, sustain: 0, release: 0.1 } }).toDestination();
        winSynth = new Tone.PolySynth(Tone.Synth, { oscillator: { type: 'fatsawtooth' } }).toDestination();
        winSynth.volume.value = -6; // Mengatur volume agar tidak terlalu keras

        console.log("Audio context dimulai.");
        isAudioReady = true;
    } catch (e) {
        console.error("Tidak dapat memulai audio context", e);
    }
};

export const sfx = {
    startAudio,
    toggleMute: (forceState) => {
        isMuted = typeof forceState === 'boolean' ? forceState : !isMuted;
        // Jika unmute dan audio belum siap, inisialisasi
        if (!isMuted && !isAudioReady) startAudio();
        return isMuted;
    },
    getIsMuted: () => isMuted,
    playJump: () => { if (!isMuted && isAudioReady) jumpSynth.triggerAttackRelease("C5", "8n", Tone.now()); },
    playCollect: () => { if (!isMuted && isAudioReady) collectSynth.triggerAttackRelease("G5", "8n", Tone.now()); },
    playHit: () => { if (!isMuted && isAudioReady) hitSynth.triggerAttackRelease("4n", Tone.now()); },
    playWin: () => {
        if (!isMuted && isAudioReady) {
            const now = Tone.now();
            winSynth.triggerAttackRelease("C4", "8n", now);
            winSynth.triggerAttackRelease("E4", "8n", now + 0.15);
            winSynth.triggerAttackRelease("G4", "8n", now + 0.3);
            winSynth.triggerAttackRelease("C5", "4n", now + 0.45);
        }
    }
};
