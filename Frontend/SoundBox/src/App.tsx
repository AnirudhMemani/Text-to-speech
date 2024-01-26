import "regenerator-runtime/runtime";
import { Route, Routes } from "react-router-dom";
import SpeechToSpeech from "./Pages/SpeechToSpeech";
import TextToSpeech from "./Pages/TextToSpeech";
import { ROUTES } from "./Utils/constants";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [voiceId, setVoiceId] = useState(1);

  return (
    <div className="w-dvw h-dvh bg-black text-white">
      <Navbar
        setVoiceId={setVoiceId}
        voiceId={voiceId}
      />
      <Routes>
        <Route
          path={ROUTES.TEXT_TO_SPEECH}
          element={<TextToSpeech voiceId={voiceId} />}
        />
        <Route
          path={ROUTES.SPEECH_TO_SPEECH}
          element={<SpeechToSpeech voiceId={voiceId} />}
        />
      </Routes>
    </div>
  );
}

export default App;
