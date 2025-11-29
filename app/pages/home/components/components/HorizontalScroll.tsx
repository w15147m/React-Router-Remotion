import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GenericCard, GenericCardData } from "../../../../components/cards/GenericCard";

interface HorizontalScrollProps {
  cardsData?: GenericCardData[];
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ cardsData = [] }) => {
  const frame = useCurrentFrame();
  const { width, fps } = useVideoConfig();

  const numberOfScreens = cardsData.length;

  // Scroll speed: move to next screen every N seconds
  const secondsPerScreen = 80;
  const speedPerFrame = 100 / (secondsPerScreen * fps);

  const xPercent = -frame * speedPerFrame;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0a4d4e 0%, #1a1a2e 100%)",
        flexDirection: "row",
        transform: `translateX(${xPercent}%)`,
        width: `${numberOfScreens * 100}%`,
      }}
    >
      {cardsData.map((cardData, cardIndex) => (
        <div
          key={cardIndex}
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            padding: "40px",
            position: "relative",
          }}
        >
          <GenericCard
            data={cardData}
            index={cardIndex}
          />
        </div>
      ))}
    </AbsoluteFill>
  );
};