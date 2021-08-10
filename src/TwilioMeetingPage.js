import React, { useState, useEffect, useCallback } from "react";
import Room from "./Twilio/Room";
import useVideoContext from "./Twilio/Hooks/useVideoContext";
import useLocalAudioToggle from "./Twilio/Hooks/useLocalAudioToggle";

export default function TwilioMeetingPage() {
  const [isAudioEnabled, toggleAudioEnabled] = useLocalAudioToggle();
  const [token, setToken] = useState(null);
  const [name, setName] = useState("");

  const {
    connect,
    getAudioAndVideoTracks,
    isAcquiringLocalTracks,
    isConnecting,
    room,
  } = useVideoContext();

  useEffect(() => {
    getAudioAndVideoTracks();
  }, []);

  const handleButtonClick = async () => {
    const data = await fetch("/video/token", {
      method: "POST",
      body: JSON.stringify({
        identity: name && name,
        room: "123",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    setToken(data.token);
    console.log(data.token);
  };

  const call = useCallback(() => {
    if (!isAcquiringLocalTracks && !isConnecting && token) {
      connect(token && token);
    }
  }, [isAcquiringLocalTracks, isConnecting, connect, token]);

  useEffect(() => {
    if (isAudioEnabled && !room) {
      call();
    }
  }, [isAudioEnabled, room, call]);

  const handleTextChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div id="jjj">
      <input type="text" value={name} onChange={handleTextChange}></input>
      <button onClick={handleButtonClick}>Join Room</button>
      <Room />
    </div>
  );
}
