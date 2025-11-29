import { z } from "zod";
import {
  AbsoluteFill,
  Audio,
  staticFile,
  Loop,
  useVideoConfig,
  useCurrentFrame,
  interpolate,
  spring,
} from "remotion";
import React from "react";
import { CompositionProps } from "../../../remotion/schemata";
import { audioDurations } from "../../../remotion/audioData";

const container: React.CSSProperties = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
};

export const Main = ({ title, audioFileName }: z.infer<typeof CompositionProps>) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  // Scale animation
  const scale = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 30,
  });

  // Fade in animation
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Rotate animation
  const rotate = interpolate(frame, [0, 60], [0, 360], {
    extrapolateRight: "clamp",
  });

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
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            padding: "0 40px",
            transform: `scale(${scale}) rotate(${rotate}deg)`,
            opacity,
          }}
        >
          {title}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
