import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';

const MAX_VISIBILITY = 3;

interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => (
  <div style={{
    width: '100%',
    height: '100%',
    padding: '3rem',
    backgroundColor: 'hsl(280deg, 40%, 85%)',
    borderRadius: '1.5rem',
    color: '#9CA3AF',
    textAlign: 'justify',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  }}>
    <h2 style={{
      textAlign: 'center',
      fontSize: '3rem',
      fontWeight: 'bold',
      margin: '0 0 0.7em',
      color: '#1F2937',
    }}>{title}</h2>
    <p style={{
      fontSize: '1.25rem',
      lineHeight: 1.6,
    }}>{content}</p>
  </div>
);

interface RemotionCarouselProps {
  children: React.ReactNode;
  transitionDuration?: number; // seconds per card
}

export const RemotionCarousel = ({ children, transitionDuration = 2 }: RemotionCarouselProps) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const count = React.Children.count(children);

  // Calculate active card based on current frame with smooth transition
  const framesPerCard = fps * transitionDuration;
  const rawProgress = frame / framesPerCard;
  const active = Math.floor(rawProgress) % count;

  // Use 90% of video dimensions
  const containerWidth = width * 0.9;
  const containerHeight = height * 0.85;

  return (
    <div style={{
      position: 'relative',
      width: containerWidth,
      height: containerHeight,
      perspective: 1000,
      transformStyle: 'preserve-3d',
    }}>
      {React.Children.map(children, (child, i) => {
        const cardDistance = active - i;
        const offset = cardDistance / 3;
        const direction = Math.sign(cardDistance);
        const absOffset = Math.abs(cardDistance) / 3;
        const isActive = i === active;

        // Calculate smooth transition offset
        const transitionProgress = (rawProgress % 1);
        const smoothOffset = offset + (direction * transitionProgress / 3);

        return (
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `
                rotateY(${smoothOffset * 50}deg) 
                scaleY(${1 + absOffset * -0.4})
                translateZ(${absOffset * -500}px)
                translateX(${direction * -100}px)
              `,
              filter: `blur(${absOffset * 10}px)`,
              opacity: Math.abs(cardDistance) >= MAX_VISIBILITY ? 0 : 1,
              display: Math.abs(cardDistance) > MAX_VISIBILITY ? 'none' : 'block',
            }}
          >
            <div style={{
              opacity: isActive ? 1 : 0.3,
              width: '100%',
              height: '100%',
            }}>
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const RemotionCarouselCard = Card;
