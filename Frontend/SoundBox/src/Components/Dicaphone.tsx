import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { SetStateAction, useEffect } from "react";
import { replayAudio } from "../Utils/helpers";

const Dictaphone: React.FC<{
  setText: React.Dispatch<SetStateAction<string>>;
  text: string;
}> = ({ text, setText }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <span style={{ color: "white" }}>
        Browser doesn't support speech recognition.
      </span>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-2xl text-slate-500">
        Microphone: {listening ? "on" : "off"}
      </p>
      <h3 className="text-2xl text-slate-500 my-4">Transcript</h3>
      <div className="border-2 border-gray-700 outline-none w-[90%] sm:w-[750px] min-h-[200px] sm:min-h-[300px] text-white bg-transparent">
        <p className="text-slate-500 px-2">{text}</p>
      </div>
      <div className="flex md:flex-row flex-col w-full bg-transparent my-10 gap-4 md:gap-12 items-center justify-center">
        <button
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
          className="md:px-14 w-[90%] md:w-fit cursor-pointer py-4 md:py-3 rounded-sm bg-transparent border border-slate-500 hover:scale-105"
        >
          Start
        </button>
        <button
          onClick={() => {
            SpeechRecognition.stopListening();
            resetTranscript();
          }}
          className="md:px-14 w-[90%] md:w-fit cursor-pointer py-4 md:py-3 rounded-sm bg-transparent border border-slate-500 hover:scale-105"
        >
          Stop
        </button>
        <button
          onClick={resetTranscript}
          className="md:px-14 w-[90%] md:w-fit cursor-pointer py-4 md:py-3 rounded-sm bg-transparent border border-slate-500 hover:scale-105"
        >
          Reset
        </button>
        <button
          onClick={replayAudio}
          className="md:px-14 w-[90%] md:w-fit cursor-pointer py-4 md:py-3 rounded-sm bg-transparent border border-slate-500 hover:scale-105"
        >
          Replay
        </button>
      </div>
    </div>
  );
};

export default Dictaphone;
