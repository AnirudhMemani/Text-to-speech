import axios from "axios";

const audio = new Audio();

function playAudio(audioUrl: string) {
  audio.src = audioUrl;
  audio.play();
}

export async function getUrlAndPlayAudio(userInput: string, voiceId: number) {
  if (userInput.length < 1) {
    userInput = "Please pass some input!";
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
  playAudio(response.data);
}
