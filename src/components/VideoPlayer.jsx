
import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

const VideoPlayer = ({ src, autoPlay = true, className, onLoopsChange }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [loopCount, setLoopCount] = useState(0);
  const videoRef = useRef(null);

  // Handle play/pause
  useEffect(() => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.play().catch(() => {
        console.error("Video playback failed");
        setIsPlaying(false);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  // Count loops
  const handleEnded = () => {
    const newLoopCount = loopCount + 1;
    setLoopCount(newLoopCount);
    if (onLoopsChange) {
      onLoopsChange(newLoopCount);
    }
    
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (isPlaying) {
        videoRef.current.play().catch(console.error);
      }
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={cn("relative w-full", className)}>
      <video
        ref={videoRef}
        src={src}
        loop={false} // We handle looping manually to count
        playsInline
        muted
        autoPlay={autoPlay}
        className="w-full h-full object-cover"
        onEnded={handleEnded}
        onClick={togglePlayPause}
      />
      
      <div className="absolute bottom-4 left-4 flex items-center space-x-3 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlayPause();
          }}
          className="bg-black/40 backdrop-blur-sm p-2 rounded-full hover:bg-black/60 transition-colors"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-white" />
          ) : (
            <Play className="h-5 w-5 text-white" />
          )}
        </button>
        
        <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
          {loopCount} loops
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
