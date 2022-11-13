import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  src: string;
};

function VideoPlayer({ src }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;
    let timeoutId = 0;

    videoRef.current.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted) {
        timeoutId = setTimeout(() => {
          videoRef.current.play();
        }, 2000);
        videoRef.current.volume = 0.0;
      }
    });

    return () => {
      isVideoPlayerMounted = false;
      if (!isVideoPlayerMounted) {
        clearTimeout(timeoutId);
      }
    };
  });

  return <video src={src} width="280" height="175" ref={videoRef} />;
}

export default VideoPlayer;
