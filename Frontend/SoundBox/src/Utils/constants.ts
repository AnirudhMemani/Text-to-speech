export const ROUTES = {
  TEXT_TO_SPEECH: "Text-To-Speech",
  VOICE_OVER: "Voice Over",
} as const;

export type TypeOfRoutes = (typeof ROUTES)[keyof typeof ROUTES];
