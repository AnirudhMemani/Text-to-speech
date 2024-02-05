export const ROUTES = {
  TEXT_TO_SPEECH: "Text-To-Speech",
  SPEECH_TO_SPEECH: "Speech-To-Speech",
  NOT_FOUND: "*",
} as const;

export type TypeOfRoutes = (typeof ROUTES)[keyof typeof ROUTES];
