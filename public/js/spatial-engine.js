/**
 * 4K LUXURY CINEMA - SPATIAL ENGINE & HAPTIC ACOUSTIC SYNTHESIZER
 * Next-Gen Interaction Engine for Desktop, Mobile & Tablets
 */

const SpatialEngine = (() => {
  let audioCtx = null;
  let isHapticsSupported = typeof navigator !== 'undefined' && 'vibrate' in navigator;
  let currentAmbientColor = '#00f2fe';

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  // Crisp mechanical click
  function playClick() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(920, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.032);

      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.032);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.032);
    } catch (_) {}
    vibrate(8);
  }

  // Soft bubble pop for pills & filters
  function playPop() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.028);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.032);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.032);
    } catch (_) {}
    vibrate(12);
  }

  // Melodic Pentatonic Chime
  function playChime(index = 0) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00];
      const freq = notes[Math.abs(index) % notes.length];

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.09, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } catch (_) {}
    vibrate([10, 20, 10]);
  }

  // Smooth bass swoosh
  function playSwoosh() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.14);
    } catch (_) {}
  }

  // Cybernetic server switch chirp
  function playServerSwitch() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1350, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch (_) {}
    vibrate([15, 10, 15]);
  }

  // Sub-bass theater boom
  function triggerBoom() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(130, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(26, ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.28, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.4);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.4);
    } catch (_) {}
    vibrate([30, 40, 50]);
  }

  // Device haptic vibration helper
  function vibrate(pattern) {
    if (isHapticsSupported) {
      try {
        navigator.vibrate(pattern);
      } catch (_) {}
    }
  }

  // Update dynamic ambient backlight & theme glow
  function setAmbientGlow(colorHex) {
    if (!colorHex) return;
    currentAmbientColor = colorHex;
    document.documentElement.style.setProperty('--ambient-glow', colorHex);
    document.documentElement.style.setProperty('--ambient-glow-soft', colorHex + '33');
    document.documentElement.style.setProperty('--ambient-glow-bright', colorHex + '88');

    const glowEl = document.getElementById('spatialAmbientGlow');
    if (glowEl) {
      glowEl.style.background = `radial-gradient(circle at 50% 25%, ${colorHex}26 0%, rgba(168, 85, 247, 0.08) 50%, transparent 75%)`;
    }
  }

  // 3D Gyro / Pointer Tilt for Cards
  function setup3DTilt(element, maxAngle = 12) {
    if (!element) return;
    let isMoving = false;

    function handleMove(clientX, clientY) {
      const rect = element.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const xPct = (x / rect.width) * 2 - 1;
      const yPct = (y / rect.height) * 2 - 1;

      const rotateX = -yPct * maxAngle;
      const rotateY = xPct * maxAngle;

      element.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
      
      // Specular sheen light highlight
      element.style.setProperty('--sheen-x', `${(x / rect.width * 100).toFixed(1)}%`);
      element.style.setProperty('--sheen-y', `${(y / rect.height * 100).toFixed(1)}%`);
    }

    element.addEventListener('pointermove', (e) => {
      handleMove(e.clientX, e.clientY);
    });

    element.addEventListener('pointerleave', () => {
      element.style.transform = '';
      element.style.removeProperty('--sheen-x');
      element.style.removeProperty('--sheen-y');
    });
  }

  // Auto-bind sound & haptic feedback to interactive elements
  function initAutoFeedback() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('button, .nav-btn, .tab-item, .chip, .catalog-chip, .btn-action, .admin-tab-btn');
      if (btn) {
        if (btn.classList.contains('catalog-chip') || btn.classList.contains('chip')) {
          playPop();
        } else {
          playClick();
        }
      }

      const card = e.target.closest('.movie-card, .coverflow-card');
      if (card) {
        playChime(Math.floor(Math.random() * 8));
      }
    }, { passive: true });

    // Enable audio context on first interaction
    const unlockAudio = () => {
      getAudioContext();
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio, { passive: true });
    window.addEventListener('keydown', unlockAudio, { passive: true });
  }

  // Initialize
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAutoFeedback);
    } else {
      initAutoFeedback();
    }
  }

  return {
    playClick,
    playPop,
    playChime,
    playSwoosh,
    playServerSwitch,
    triggerBoom,
    vibrate,
    setAmbientGlow,
    setup3DTilt
  };
})();

window.SpatialEngine = SpatialEngine;
