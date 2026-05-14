import React, { useRef, useEffect, useState } from 'react';

const VideoBackground = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);
  const fadingOutRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  const fade = (targetOpacity: number, duration: number, onComplete?: () => void) => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    
    const startOpacity = opacity;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      
      setOpacity(currentOpacity);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = null;
        if (onComplete) onComplete();
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      if (video.paused) video.play().catch(e => console.error("Playback failed:", e));
      fade(1, 250);
    };

    if (video.readyState >= 2) {
      handleLoaded();
    } else {
      video.addEventListener('loadeddata', handleLoaded);
    }

    const handleTimeUpdate = () => {
      const timeLeft = video.duration - video.currentTime;
      if (timeLeft <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fade(0, 250);
      }
    };

    const handleEnded = () => {
      // Seamless loop without black flash
      video.currentTime = 0;
      video.play().catch(e => console.error("Replay failed:", e));
      fadingOutRef.current = false;
      fade(1, 250);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden bg-black">
      <video
        ref={videoRef}
        muted
        playsInline
        style={{
          opacity,
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '115%',
          height: '115%',
          objectFit: 'cover',
          objectPosition: 'top',
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
