import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Oswald";

const { fontFamily } = loadFont();

const baseSections = [
  {
    type: "title",
    content: "Horizontal Scroll",
    image:
      "https://images.pexels.com/photos/2249527/pexels-photo-2249527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    type: "number",
    content: "01",
    image:
      "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    type: "number",
    content: "02",
    image:
      "https://images.pexels.com/photos/1517076/pexels-photo-1517076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    type: "number",
    content: "03",
    image:
      "https://images.pexels.com/photos/1037996/pexels-photo-1037996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// Generate 20 items by repeating the base sections
const sections = Array.from({ length: 20 }).map((_, i) => {
  const base = baseSections[i % baseSections.length];
  return {
    ...base,
    content: i === 0 ? base.content : i.toString().padStart(2, "0"),
  };
});

export const HorizontalScroll: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, fps } = useVideoConfig();

  const numberOfSections = sections.length;
  
  // Fixed speed: 1 screen every 8 seconds (approx)
  // 100% width / (8 * fps) per frame
  const secondsPerScreen = 220;
  const speedPerFrame = 100 / (secondsPerScreen * fps);
  
  const xPercent = -frame * speedPerFrame;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
        flexDirection: "row",
        transform: `translateX(${xPercent}%)`,
        width: `${numberOfSections * 100}%`,
      }}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            width: width,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Image */}
          <AbsoluteFill>
            <Img
              src={section.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
              }}
            />
          </AbsoluteFill>

          {/* Content */}
          <h1
            style={{
              fontFamily,
              fontSize: "8vw",
              fontWeight: 300,
              color: "white",
              letterSpacing: "1vw",
              textTransform: "uppercase",
              position: "relative",
              zIndex: 1,
              margin: 0,
            }}
          >
            {section.content}
          </h1>
        </div>
      ))}
    </AbsoluteFill>
  );
};
