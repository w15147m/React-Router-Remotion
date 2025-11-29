import { Composition } from "remotion";
import {
  COMPOSITION_FPS,
  COMPOSITION_HEIGHT,
  COMPOSITION_ID,
  COMPOSITION_WIDTH,
} from "./constants.mjs";
import { Main } from "../pages/home/components/Main";
import { CompositionProps, defaultMyCompProps } from "./schemata";
import { z } from "zod";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id={COMPOSITION_ID}
        component={Main}
        durationInFrames={Math.round(defaultMyCompProps.durationInSeconds * COMPOSITION_FPS)}
        fps={COMPOSITION_FPS}
        width={COMPOSITION_WIDTH}
        height={COMPOSITION_HEIGHT}
        defaultProps={defaultMyCompProps}
        calculateMetadata={({ props }: { props: z.infer<typeof CompositionProps> }) => {
          return {
            durationInFrames: Math.round(props.durationInSeconds * COMPOSITION_FPS),
            props,
          };
        }}
      />
    </>
  );
};
