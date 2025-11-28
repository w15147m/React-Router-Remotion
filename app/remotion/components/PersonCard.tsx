import React from "react";
import { Img, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Roboto";

const { fontFamily } = loadFont();

export interface PersonCardData {
  name: string;
  country: string;
  countryFlag: string;
  birthYear: number;
  deathYear: number;
  imageUrl?: string;
}

interface PersonCardProps {
  data: PersonCardData;
  index: number;
}

export const PersonCard: React.FC<PersonCardProps> = ({ data, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Stagger animation for each card
  const delay = index * 5;
  const scale = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 100,
      stiffness: 200,
      mass: 0.5,
    },
  });

  const opacity = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 100,
    },
  });

  return (
    <div
      style={{
        width: "30%",
        height: "85%",
        backgroundColor: "#1a1a1a",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      {/* Image Section */}
      <div
        style={{
          position: "relative",
          height: "55%",
          backgroundColor: "#333",
          overflow: "hidden",
        }}
      >
        {/* Country Flag */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            fontSize: "40px",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "8px",
            padding: "5px 10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {data.countryFlag}
        </div>

        {/* Placeholder Image - Grayscale */}
        {data.imageUrl ? (
          <Img
            src={data.imageUrl}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(100%)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #555 0%, #333 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: "#666",
                border: "4px solid #888",
              }}
            />
          </div>
        )}

        {/* Birth-Death Years Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            color: "black",
            padding: "8px 20px",
            borderRadius: "8px",
            fontFamily,
            fontSize: "24px",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {data.birthYear}-{data.deathYear}
        </div>
      </div>

      {/* Info Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "0",
        }}
      >
        {/* Name */}
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            textAlign: "center",
            fontFamily,
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          {data.name}
        </div>

        {/* Country */}
        <div
          style={{
            backgroundColor: "#e0e0e0",
            color: "black",
            padding: "15px",
            textAlign: "center",
            fontFamily,
            fontSize: "28px",
            fontWeight: "500",
          }}
        >
          {data.country}
        </div>

        {/* Death Label */}
        <div
          style={{
            backgroundColor: "#999",
            color: "white",
            padding: "12px",
            textAlign: "center",
            fontFamily,
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          Death
        </div>

        {/* Death Year */}
        <div
          style={{
            backgroundColor: "#2a2a2a",
            color: "#FFD700",
            padding: "25px",
            textAlign: "center",
            fontFamily,
            fontSize: "56px",
            fontWeight: "bold",
            letterSpacing: "4px",
            textShadow: "0 0 20px rgba(255,215,0,0.5)",
          }}
        >
          {data.deathYear}
        </div>
      </div>
    </div>
  );
};
