import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { SetStateAction, useEffect, useState } from "react";
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

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

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
    <div className="flex flex-col items-center w-full h-full mt-8">
      <p className="text-2xl md:mt-0 text-slate-500">
        Microphone: {listening ? "on" : "off"}
      </p>
      <h3 className="text-2xl text-slate-500 mt-8">Transcript</h3>
      <div className="border-2 border-gray-700 outline-none w-[90%] md:w-[700px] xl:min-w-[80%] min-h-[300px] md:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[650px] text-white bg-transparent">
        <p className="text-slate-500 px-2">{text}</p>
      </div>
      <div className="flex md:flex-row flex-col w-full bg-transparent my-10 gap-4 md:gap-8 items-center justify-center">
        <button
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
          className="md:px-14 w-[90%] md:w-fit cursor-pointer py-4 md:py-3 rounded-sm bg-transparent border border-slate-500 hover:scale-105"
        >
          Start
        </button>
        <button
          onClick={() => {
            setIsDisabled(false);
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
          className="md:px-14 w-[90%] md:w-fit cursor-pointer py-4 md:py-3 rounded-sm bg-transparent border border-slate-500 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
          disabled={isDisabled}
        >
          Replay
        </button>
      </div>
    </div>
  );
};

export default Dictaphone;
