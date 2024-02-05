import "regenerator-runtime/runtime";
import { Route, Routes, useLocation } from "react-router-dom";
import SpeechToSpeech from "./Pages/SpeechToSpeech";
import TextToSpeech from "./Pages/TextToSpeech";
import { ROUTES } from "./Utils/constants";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";

function App() {
  const [voiceId, setVoiceId] = useState(1);
  const location = useLocation();

  function getIsPageNotFound(currentPathname: string): boolean {
    const definedPaths = Object.values(ROUTES);
    const result = definedPaths.find(
      (paths) => paths == currentPathname.substring(1)
    );
    return result !== undefined ? false : true;
  }

  const isPageNotFound = getIsPageNotFound(location.pathname);

  return (
    <div className="w-dvw h-dvh bg-black text-white">
      {!isPageNotFound && (
        <Navbar
          setVoiceId={setVoiceId}
          voiceId={voiceId}
        />
      )}
      <Routes>
        <Route
          path={""}
          element={<TextToSpeech voiceId={voiceId} />}
        />
        <Route
          path={ROUTES.TEXT_TO_SPEECH}
          element={<TextToSpeech voiceId={voiceId} />}
        />
        <Route
          path={ROUTES.SPEECH_TO_SPEECH}
          element={<SpeechToSpeech voiceId={voiceId} />}
        />
        <Route
          path={ROUTES.NOT_FOUND}
          element={<NotFound />}
        />
      </Routes>
      {!isPageNotFound && <Footer />}
    </div>
  );
}

export default App;
