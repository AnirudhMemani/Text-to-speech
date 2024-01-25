import { useState } from "react";
import { getUrlAndPlayAudio } from "../Utils/helpers";

const TextToSpeech: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <div className="flex items-center flex-col h-dvh w-dvw bg-black text-white">
      <h1 className="text-slate-500 mt-10 mb-4 text-4xl">AI Voice Generator</h1>
      <p className="text-slate-300 text-2xl mb-14">
        Write and Listen<span className="text-yellow-400 text-4xl">.</span>
      </p>
      <form
        className="flex flex-col items-center transition-all duration-300 ease-in-out w-full h-full"
        onSubmit={(e) => {
          e.preventDefault();
          getUrlAndPlayAudio(userInput);
          setUserInput("");
        }}
      >
        <textarea
          name="text"
          rows={14}
          cols={10}
          wrap="soft"
          className="min-w-[40%] py-2 px-2 bg-transparent shadow-sm shadow-violet-900 border-none outline-none text-lg text-white placeholder:text-slate-500 resize-none"
          onChange={(ev) => setUserInput(ev.target.value)}
          value={userInput}
          placeholder="Write your input here"
        />
        <input
          type="submit"
          className="px-14 cursor-pointer py-3 rounded-sm mt-5 bg-transparent border border-slate-500 hover:scale-105"
          title="Submit"
        />
      </form>
    </div>
  );
};

export default TextToSpeech;
