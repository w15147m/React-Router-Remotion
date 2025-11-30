import { z } from "zod";
import {
  AbsoluteFill,
  Audio,
  staticFile,
  Loop,
  useVideoConfig,
} from "remotion";
import React from "react";
import { CompositionProps } from "../../../remotion/schemata";
import { audioDurations } from "../../../remotion/audioData";
import { RemotionCarousel, RemotionCarouselCard } from "./components/RemotionCarousel";

const container: React.CSSProperties = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
};

const CARDS = 3;

export const Main = ({ title, audioFileName }: z.infer<typeof CompositionProps>) => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={container}>
      {audioFileName && (
        <Loop durationInFrames={Math.ceil((audioDurations[audioFileName] || 10) * fps)}>
          <Audio src={staticFile(`audio/${audioFileName}`)} volume={1} />
        </Loop>
      )}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <RemotionCarousel transitionDuration={2}>
          {[...new Array(CARDS)].map((_, i) => (
            <RemotionCarouselCard
              key={i}
              title={`${title} - Card ${i + 1}`}
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />
          ))}
        </RemotionCarousel>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
