import { z } from "zod";

export const CompositionProps = z.object({
  title: z.string(),
  durationInSeconds: z.number().positive(),
  audioFileName: z.string().optional(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "React Router and Remotion",
  durationInSeconds: 15,
  audioFileName: "deep.mp3",
};

export const RenderRequest = z.object({
  inputProps: CompositionProps,
});

export const ProgressRequest = z.object({
  bucketName: z.string(),
  id: z.string(),
});

export type ProgressResponse =
  | {
    type: "error";
    message: string;
  }
  | {
    type: "progress";
    progress: number;
  }
  | {
    type: "done";
    url: string;
    size: number;
  };
