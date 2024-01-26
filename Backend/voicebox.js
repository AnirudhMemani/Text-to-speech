const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/audio-stream", async (req, res) => {
  const text = req.body.text;
  try {
    const apiUrl =
      "https://ivcqahposk.execute-api.eu-central-1.amazonaws.com/prod/audio";

    const headers = {
      authority: "ivcqahposk.execute-api.eu-central-1.amazonaws.com",
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://vog.voicebooking.com",
      referer: "https://vog.voicebooking.com/",
      "sec-ch-ua":
        '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": '"Android"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "user-agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    };

    const requestBody = {
      input: {
        ssml: '<speak><prosody pitch="0.38"> ' + text + ".</prosody></speak>",
      },
      voice: {
        languageCode: "en-GB",
        name: "en-GB-Wavenet-B",
        ssmlGender: "John (M)",
      },
      audioConfig: {},
    };

    const response = await axios.post(apiUrl, requestBody, { headers });

    res.status(response.status).send(response.data.audioURL);
  } catch (error) {
    console.error("Error making API call:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
