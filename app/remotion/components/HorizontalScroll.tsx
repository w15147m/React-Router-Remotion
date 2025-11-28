import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { PersonCard, PersonCardData } from "./PersonCard";

interface HorizontalScrollProps {
  cardsData?: PersonCardData[];
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ cardsData = [] }) => {
  const frame = useCurrentFrame();
  const { width, fps } = useVideoConfig();

  // Group cards into screens of 3
  const cardsPerScreen = 3;
  const screens: PersonCardData[][] = [];

  for (let i = 0; i < cardsData.length; i += cardsPerScreen) {
    screens.push(cardsData.slice(i, i + cardsPerScreen));
  }

  const numberOfScreens = screens.length;

  // Scroll speed: move to next screen every N seconds
  const secondsPerScreen = 80;
  const speedPerFrame = 100 / (secondsPerScreen * fps);

  const xPercent = -frame * speedPerFrame;

  return (
    <>
      {screens.map((screenCards, screenIndex) => (
        <AbsoluteFill
          key={screenIndex}
          style={{
            background: "linear-gradient(135deg, #0a4d4e 0%, #1a1a2e 100%)",
            flexDirection: "row",
            transform: `translateX(${xPercent}%)`,
            width: `${numberOfScreens * 100}%`,
          }}
        >
          {screenCards.map((cardData, cardIndex) => (
            <div
              key={`${screenIndex}-${cardIndex}`}
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
              <PersonCard
                data={cardData}
                index={cardIndex}
              />
            </div>
          ))}
        </AbsoluteFill>
      ))}
    </>
  );
};