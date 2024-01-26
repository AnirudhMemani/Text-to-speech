import "regenerator-runtime/runtime";
import { useEffect, useState } from "react";
import Dictaphone from "../Components/Dicaphone";
import { useSpeechRecognition } from "react-speech-recognition";
import { getUrlAndPlayAudio } from "../Utils/helpers";

type SpeechToSpeechProps = {
  voiceId: number;
};

const SpeechToSpeech: React.FC<SpeechToSpeechProps> = ({
  voiceId,
}): React.JSX.Element => {
  const { listening } = useSpeechRecognition();

  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (!listening && text?.length > 0) {
      console.log("SpeechToSpeech() => voiceId:", voiceId);
      getUrlAndPlayAudio(text, voiceId);
      setText("");
    }
  }, [listening]);

  return (
    <div className="flex justify-center items-center w-dvw h-dvh bg-black text-white">
      <Dictaphone
        setText={setText}
        text={text}
      />
    </div>
  );
};

export default SpeechToSpeech;
