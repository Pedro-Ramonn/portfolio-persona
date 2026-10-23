import { useEffect, useRef, useState } from 'react';

const preferenceKey = 'portfolio.sound.enabled';
const menuSelector = '.home-menu a, .scene-menu a, .project-picker button, .back-link, .wordmark';

export function useMenuSound() {
  const [enabled, setEnabled] = useState(() => {
    try { return localStorage.getItem(preferenceKey) === 'true'; }
    catch { return false; }
  });
  const audioRef = useRef(null);

  function stop() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }

  useEffect(() => () => {
    if (audioRef.current) audioRef.current.pause();
  }, []);

  function play() {
    if (!audioRef.current) {
      audioRef.current = new Audio(`${import.meta.env.BASE_URL}audio/menu-select.mp3`);
      audioRef.current.volume = 0.25;
    }
    audioRef.current.currentTime = 0;
    // Keep navigation available if audio is blocked or cannot load.
    const playing = audioRef.current.play();
    playing?.catch(() => {});
  }

  function toggle() {
    const next = !enabled;
    setEnabled(next);
    try { localStorage.setItem(preferenceKey, String(next)); } catch {}
    if (next) play();
    else stop();
  }

  function onMenuClick(event) {
    if (enabled && event.target instanceof Element && event.target.closest(menuSelector)) play();
  }

  return { enabled, toggle, onMenuClick };
}
