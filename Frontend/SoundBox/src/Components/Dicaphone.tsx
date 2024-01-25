import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { SetStateAction, useEffect } from "react";

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
      <div className="flex w-full bg-transparent my-10 gap-12 items-center justify-center">
        <button
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
          className="px-14 cursor-pointer py-3 rounded-sm bg-transparent border border-slate-500 hover:scale-105"
        >
          Start
        </button>
        <button
          onClick={() => {
            SpeechRecognition.stopListening();
            resetTranscript();
          }}
          className="px-14 cursor-pointer py-3 rounded-sm bg-transparent border border-slate-500 hover:scale-105"
        >
          Stop
        </button>
        <button
          onClick={resetTranscript}
          className="px-14 cursor-pointer py-3 rounded-sm bg-transparent border border-slate-500 hover:scale-105"
        >
          Reset
        </button>
      </div>
      <h3 className="text-2xl text-slate-500">Transcript</h3>
      <div
        style={{
          border: "1px solid gray",
          outline: "none",
          width: "600px",
          minHeight: "300px",
          color: "white",
          backgroundColor: "transparent",
        }}
      >
        <p className="text-slate-500 px-2">{text}</p>
      </div>
    </div>
  );
};

export default Dictaphone;
