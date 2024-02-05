import axios from "axios";

const audio = new Audio();

async function playAudio(audioUrl: string, clearSrc: boolean) {
  audio.src = audioUrl;
  await audio.play();

  audio.onended = () => {
    if (clearSrc) {
      audio.src = "";
    }
  };
}

export async function replayAudio() {
  if (audio.src) {
    await audio.play();
  }
}

export async function getUrlAndPlayAudio(userInput: string, voiceId: number) {
  let clearSrc = false;
  if (userInput.length < 1) {
    userInput = "Please pass some input!";
    clearSrc = true;
  }
  console.log("getUrlAndPlayAudio() => voiceId in requestBody:", voiceId);
  const requestBody = {
    text: userInput,
    voiceId: voiceId,
  };
  const response = await axios.post(
    "https://nodejs-production-2e12.up.railway.app/audio-stream",
    requestBody
  );
  playAudio(response.data, clearSrc);
}
