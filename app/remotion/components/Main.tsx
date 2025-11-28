import { z } from "zod";
import {
  AbsoluteFill,
  Audio,
  staticFile,
} from "remotion";
import React from "react";
import { CompositionProps } from "../schemata";
import { HorizontalScroll } from "./HorizontalScroll";

const container: React.CSSProperties = {
  backgroundColor: "white",
};

export const Main = ({ title, audioFileName }: z.infer<typeof CompositionProps>) => {
  return (
    <AbsoluteFill style={container}>
      {audioFileName && (
        <Audio src={staticFile(`audio/${audioFileName}`)} volume={1} />
      )}
      <HorizontalScroll />
    </AbsoluteFill>
  );
};
