import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
  cubeSize?: number;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 5000, cubeSize = 80 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 1200);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, currentIndex]);

  // Generate cube grid
  const cols = Math.ceil(1920 / cubeSize);
  const rows = Math.ceil(1080 / cubeSize);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1000px' }}>
      <style>{`
        @keyframes cube-disintegrate {
          0% {
            transform: scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: scale(0) rotateX(720deg) rotateY(720deg) rotateZ(720deg) translateZ(-1000px);
            opacity: 0;
          }
        }

        @keyframes cube-reintegrate {
          0% {
            transform: scale(0) rotateX(720deg) rotateY(720deg) rotateZ(720deg) translateZ(-1000px);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
            opacity: 1;
          }
        }

        .cube-out {
          animation: cube-disintegrate 1.2s ease-in forwards;
          transform-origin: center;
        }

        .cube-in {
          animation: cube-reintegrate 1.2s ease-out forwards;
          transform-origin: center;
        }

        .slider-cube {
          position: absolute;
          backface-visibility: visible;
        }
      `}</style>

      {/* Current Image - Disintegrating */}
      <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
        {isTransitioning &&
          Array.from({ length: cols * rows }).map((_, idx) => {
            const row = Math.floor(idx / cols);
            const col = idx % cols;
            const x = col * cubeSize;
            const y = row * cubeSize;
            const delay = (row + col) * 20;

            return (
              <div
                key={`out-${idx}`}
                className="slider-cube cube-out"
                style={{
                  left: `${(x / 1920) * 100}%`,
                  top: `${(y / 1080) * 100}%`,
                  width: `${(cubeSize / 1920) * 100}%`,
                  height: `${(cubeSize / 1080) * 100}%`,
                  backgroundImage: `url(${images[prevIndex]})`,
                  backgroundPosition: `-${x}px -${y}px`,
                  backgroundSize: '1920px 1080px',
                  backgroundRepeat: 'no-repeat',
                  animationDelay: `${delay}ms`,
                }}
              />
            );
          })}
      </div>

      {/* Next Image - Reintegrating */}
      <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
        {isTransitioning &&
          Array.from({ length: cols * rows }).map((_, idx) => {
            const row = Math.floor(idx / cols);
            const col = idx % cols;
            const x = col * cubeSize;
            const y = row * cubeSize;
            const delay = (row + col) * 20;

            return (
              <div
                key={`in-${idx}`}
                className="slider-cube cube-in"
                style={{
                  left: `${(x / 1920) * 100}%`,
                  top: `${(y / 1080) * 100}%`,
                  width: `${(cubeSize / 1920) * 100}%`,
                  height: `${(cubeSize / 1080) * 100}%`,
                  backgroundImage: `url(${images[currentIndex]})`,
                  backgroundPosition: `-${x}px -${y}px`,
                  backgroundSize: '1920px 1080px',
                  backgroundRepeat: 'no-repeat',
                  animationDelay: `${delay}ms`,
                }}
              />
            );
          })}
      </div>

      {/* Static Image Display */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};
