import { useCallback, useRef } from 'react'

/**
 * Custom hook that creates a Mario-style coin sound effect using Web Audio API.
 * The sound is synthesized on-the-fly, avoiding copyright issues and external files.
 *
 * @returns A function to play the coin sound
 */
export const useCoinSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null)

  const playSound = useCallback(() => {
    // Lazy-initialize AudioContext on first user interaction (browser requirement)
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
    }

    const ctx = audioContextRef.current
    const now = ctx.currentTime

    // Create gain node for volume envelope
    const gainNode = ctx.createGain()
    gainNode.connect(ctx.destination)
    gainNode.gain.setValueAtTime(0.3, now)
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15)

    // First tone: B5 (~988 Hz)
    const osc1 = ctx.createOscillator()
    osc1.type = 'square'
    osc1.frequency.setValueAtTime(988, now)
    osc1.connect(gainNode)
    osc1.start(now)
    osc1.stop(now + 0.075)

    // Second tone: E6 (~1319 Hz) - the classic "up" interval
    const osc2 = ctx.createOscillator()
    osc2.type = 'square'
    osc2.frequency.setValueAtTime(1319, now + 0.075)
    osc2.connect(gainNode)
    osc2.start(now + 0.075)
    osc2.stop(now + 0.15)
  }, [])

  return playSound
}
