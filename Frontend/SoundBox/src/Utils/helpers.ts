import axios from "axios";

const audio = new Audio();

function playAudio(audioUrl: string) {
  audio.src = audioUrl;
  audio.play();
}

export async function getUrlAndPlayAudio(userInput: string) {
  if (userInput.length < 1) {
    userInput = "Please pass some input!";
  }
  const requestBody = {
    text: userInput,
  };
  const response = await axios.post(
    "http://localhost:3000/audio-stream",
    requestBody
  );
  playAudio(response.data);
}
