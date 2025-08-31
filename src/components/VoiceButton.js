import React, { useState } from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import Voice from "@react-native-voice/voice";

export default function VoiceButton({ onResult }) {
  const [listening, setListening] = useState(false);

  const startListening = async () => {
    setListening(true);
    Voice.start("en-US");

    Voice.onSpeechResults = (event) => {
      const text = event.value[0];
      onResult(text);
      setListening(false);
    };
  };

  return (
    <TouchableOpacity onPress={startListening}>
      <Image source={require("../../assets/mic.png")} style={{ width: 40, height: 40 }} />
      <Text>{listening ? "Listening..." : "Tap to Speak"}</Text>
    </TouchableOpacity>
  );
}
