import { useState, KeyboardEvent } from "react";
import { getUrlAndPlayAudio } from "../Utils/helpers";

type TextToSpeechProps = {
  voiceId: number;
};

const TextToSpeech: React.FC<TextToSpeechProps> = ({
  voiceId,
}): React.JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");

  const handleEnterKeyPressed = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("TextToSpeech() => voiceId:", voiceId);
      getUrlAndPlayAudio(userInput, voiceId);
    }
  };

  return (
    <div className="flex items-center flex-col h-dvh w-dvw bg-black text-white">
      <h1 className="text-slate-500 mt-10 mb-4 text-3xl sm:text-4xl">
        AI Voice Generator
      </h1>
      <p className="text-slate-300 text-2xl mb-14">
        Write and Listen<span className="text-yellow-400 text-4xl">.</span>
      </p>
      <form
        className="flex flex-col items-center transition-all duration-300 ease-in-out w-full h-full"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("TextToSpeech() => voiceId:", voiceId);
          getUrlAndPlayAudio(userInput, voiceId);
        }}
      >
        <textarea
          name="text"
          rows={14}
          cols={10}
          wrap="soft"
          className="min-w-[70%] xl:min-w-[40%] py-2 px-2 bg-transparent shadow-sm shadow-violet-900 border-none outline-none text-lg text-white placeholder:text-slate-500 resize-none"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          placeholder="Write your input here"
          onKeyDown={handleEnterKeyPressed}
        />
        <input
          type="submit"
          className="px-14 cursor-pointer sm:mb-0 mb-2 h-[10%] sm:py-3 rounded-sm mt-5 bg-transparent border border-slate-500 hover:scale-105 active:scale-100"
          title="Submit"
        />
      </form>
    </div>
  );
};

export default TextToSpeech;
