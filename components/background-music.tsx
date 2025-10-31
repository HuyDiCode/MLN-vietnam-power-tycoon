"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Đặt âm lượng 30%

      // Thử phát tự động khi trang load
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
          setIsPlaying(true);
        } catch (error) {
          // Nếu trình duyệt chặn autoplay, người dùng cần click để phát
          console.log("Autoplay bị chặn. Vui lòng click để phát nhạc.");
        }
      };

      playAudio();
    }
  }, []);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Không thể phát nhạc:", error);
        }
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/roblox-minecraft-fortnite-video-game-music-358426.mp3"
        loop
        preload="auto"
      />

      {/* Nút điều khiển nhạc nền */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
        <Button
          onClick={togglePlay}
          className="bg-slate-800 hover:bg-slate-700 text-white border border-blue-500 shadow-lg"
          size="sm"
        >
          {isPlaying ? "⏸️ Tạm dừng" : "▶️ Phát nhạc"}
        </Button>
        <Button
          onClick={toggleMute}
          className="bg-slate-800 hover:bg-slate-700 text-white border border-blue-500 shadow-lg"
          size="sm"
        >
          {isMuted ? "🔇" : "🔊"}
        </Button>
      </div>
    </>
  );
}
