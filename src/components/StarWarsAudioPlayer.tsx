import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

interface Track {
  id: string;
  name: string;
  file: string;
}

const tracks: Track[] = [
  { id: "1", name: "Главная тема", file: "/audio/main-theme.mp3" },
  { id: "2", name: "Имперский марш", file: "/audio/imperial-march.mp3" },
  { id: "3", name: "Кантина", file: "/audio/cantina-band.mp3" },
];

export function StarWarsAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState([0.3]);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0];
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % tracks.length;
    setCurrentTrack(next);
    if (isPlaying && audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  const prevTrack = () => {
    const prev = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
    setCurrentTrack(prev);
    if (isPlaying && audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src={tracks[currentTrack].file}
        loop
        onEnded={nextTrack}
        preload="none"
      />

      {!isVisible ? (
        <Button
          onClick={() => setIsVisible(true)}
          variant="secondary"
          size="icon"
          className="bg-black/80 hover:bg-black/90 text-yellow-400 border border-yellow-400/30 shadow-lg"
        >
          <Icon name="Music" size={20} />
        </Button>
      ) : (
        <div className="bg-black/90 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-4 min-w-[280px] shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Icon name="Music" size={16} className="text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">
                Star Wars Music
              </span>
            </div>
            <Button
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-400 hover:text-white"
            >
              <Icon name="X" size={14} />
            </Button>
          </div>

          <div className="text-white text-sm mb-3 truncate">
            {tracks[currentTrack].name}
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Button
              onClick={prevTrack}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-yellow-400 hover:text-yellow-300"
            >
              <Icon name="SkipBack" size={16} />
            </Button>
            <Button
              onClick={togglePlay}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-yellow-400 hover:text-yellow-300"
            >
              <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
            </Button>
            <Button
              onClick={nextTrack}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-yellow-400 hover:text-yellow-300"
            >
              <Icon name="SkipForward" size={16} />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Icon name="Volume2" size={14} className="text-gray-400" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={1}
              step={0.1}
              className="flex-1"
            />
          </div>
        </div>
      )}
    </div>
  );
}
