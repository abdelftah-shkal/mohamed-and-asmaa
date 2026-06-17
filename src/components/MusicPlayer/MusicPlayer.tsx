import { useState, useRef, useEffect, useCallback } from "react"
import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { weddingData } from "../../data/wedding"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    try {
      const audio = new Audio(weddingData.musicPath)
      audio.loop = true
      audio.volume = volume
      audioRef.current = audio
    } catch {
      audioRef.current = null
    }
    return () => {
      cancelAnimationFrame(rafRef.current)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const tick = useCallback(() => {
    const audio = audioRef.current
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      rafRef.current = requestAnimationFrame(tick)
    } else {
      cancelAnimationFrame(rafRef.current)
    }
    return () => cancelAnimationFrame(rafRef.current)
  }, [isPlaying, tick])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {isExpanded && (
        <div className="bg-white/90 backdrop-blur-md border border-[#D4AF37]/15 p-4 shadow-lg w-48">
          <div className="mb-3">
            <div className="h-1 bg-[#D4AF37]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#D4AF37] rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="w-8 h-8 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              type="button"
              onClick={() => setVolume(volume === 0 ? 0.5 : 0)}
              className="w-8 h-8 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {volume === 0 ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsExpanded((v) => !v)}
        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-[#D4AF37]/15 flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300 cursor-pointer"
      >
        <Music className={`w-5 h-5 text-[#D4AF37] ${isPlaying ? "animate-pulse" : ""}`} />
      </button>
    </div>
  )
}
