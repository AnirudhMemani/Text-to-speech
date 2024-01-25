import "regenerator-runtime/runtime";
import { Route, Routes } from "react-router-dom";
import VoiceOver from "./Pages/VoiceOver";
import TextToSpeech from "./Pages/TextToSpeech";
import { ROUTES } from "./Utils/constants";
import Navbar from "./Components/Navbar";

function App() {
  // const text =
  //   "Hello this is your host John. If you have ever heard of the legend Magnus Carlsen then you would know that he is the greatest chess player of our generation. He beat kasparov at the mere age of 13. He is unrivaled in the domain of chess. Also, I love anime. My favourite anime is demon slayer and jujutsu kaisen. Gojo satoro is way to damn powerful and so is Sukana.";

  return (
    <div className="w-dvw h-dvh bg-black text-white">
      <Navbar />
      <Routes>
        <Route
          path={ROUTES.TEXT_TO_SPEECH}
          element={<TextToSpeech />}
        />
        <Route
          path={ROUTES.VOICE_OVER}
          element={<VoiceOver />}
        />
      </Routes>
    </div>
  );
}

export default App;
