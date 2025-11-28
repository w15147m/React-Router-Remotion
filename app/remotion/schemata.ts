import { z } from "zod";

export const PersonCardData = z.object({
  name: z.string(),
  country: z.string(),
  countryFlag: z.string(),
  birthYear: z.number(),
  deathYear: z.number(),
  imageUrl: z.string().optional(),
});

export const CompositionProps = z.object({
  title: z.string(),
  durationInSeconds: z.number().positive(),
  audioFileName: z.string().optional(),
  cardsData: z.array(PersonCardData).optional(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "React Router and Remotion",
  durationInSeconds: 7,
  audioFileName: "deep.mp3",
  cardsData: [
    {
      name: "Héctor Scarone",
      country: "Uruguay",
      countryFlag: "🇺🇾",
      birthYear: 1898,
      deathYear: 1967,
    },
    {
      name: "José Nasazzi",
      country: "Uruguay",
      countryFlag: "🇺🇾",
      birthYear: 1901,
      deathYear: 1968,
    },
    {
      name: "Giuseppe Meazza",
      country: "Italy",
      countryFlag: "🇮🇹",
      birthYear: 1910,
      deathYear: 1979,
    },
    {
      name: "Silvio Piola",
      country: "Italy",
      countryFlag: "🇮🇹",
      birthYear: 1913,
      deathYear: 1996,
    },
    {
      name: "Matthias Sindelar",
      country: "Austria",
      countryFlag: "🇦🇹",
      birthYear: 1903,
      deathYear: 1939,
    },
    {
      name: "Dixie Dean",
      country: "England",
      countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      birthYear: 1907,
      deathYear: 1980,
    },
  ],
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
