import { useState, KeyboardEvent } from "react";
import { getUrlAndPlayAudio, replayAudio } from "../Utils/helpers";

type TextToSpeechProps = {
  voiceId: number;
};

const TextToSpeech: React.FC<TextToSpeechProps> = ({
  voiceId,
}): React.JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleEnterKeyPressed = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("TextToSpeech() => voiceId:", voiceId);
      if (userInput.length > 0) {
        setIsDisabled(false);
      }
      getUrlAndPlayAudio(userInput, voiceId);
    }
  };

  return (
    <div className="flex items-center flex-col min-h-dvh w-dvw bg-black text-white">
      <h1 className="text-slate-500 mt-10 text-3xl sm:text-4xl">
        AI Voice Generator
      </h1>
      <p className="text-slate-300 text-2xl mb-8">
        Write and Listen<span className="text-yellow-400 font-bold">.</span>
      </p>
      <form
        className="flex flex-col items-center transition-all duration-300 ease-in-out w-full h-full"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("TextToSpeech() => voiceId:", voiceId);
          if (userInput.length > 0) {
            setIsDisabled(false);
          }
          getUrlAndPlayAudio(userInput, voiceId);
        }}
      >
        <textarea
          name="text"
          rows={14}
          cols={10}
          wrap="soft"
          className="min-w-[90%] sm:min-w-[70%] xl:min-w-[40%] py-2 px-2 bg-transparent shadow-sm shadow-violet-900 border-none outline-none text-lg text-white placeholder:text-slate-500 resize-none"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          placeholder="Write your input here"
          onKeyDown={handleEnterKeyPressed}
        />
        <div className="flex md:flex-row flex-col md:h-fit h-[30%] md:w-fit w-[90%] sm:w-[70%] md:mb-0 mb-4 md:gap-14 gap-4">
          <input
            type="submit"
            className="md:px-14 h-full cursor-pointer mb-0 py-3 rounded-md mt-5 bg-transparent border border-slate-500 md:hover:scale-105 md:active:scale-100 active:scale-105"
            title="Submit"
          />
          <input
            type="button"
            className="md:px-14 cursor-pointer mb-0 h-full py-3 rounded-md md:mt-5 bg-transparent border border-slate-500 md:hover:scale-105 md:active:scale-100 active:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            value={"Replay"}
            onClick={replayAudio}
            disabled={isDisabled}
          />
        </div>
      </form>
    </div>
  );
};

export default TextToSpeech;
