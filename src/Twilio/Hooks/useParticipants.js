import { useEffect, useState } from "react";
import useVideoContext from "./useVideoContext";
import useDominantSpeaker from "./useDominantSpeaker";

export default function useParticipants() {
  const { room } = useVideoContext();
  const dominantSpeaker = useDominantSpeaker();

  const [participants, setParticipants] = useState(
    Array.from(room?.participants.values() ?? [])
  );
  useEffect(() => {
    console.log("hello");
    if (dominantSpeaker) {
      setParticipants((prevParticipants) => [
        dominantSpeaker,
        ...prevParticipants.filter(
          (participant) => participant !== dominantSpeaker
        ),
      ]);
    }
  }, [dominantSpeaker]);

  useEffect(() => {
    if (room) {
      const participantConnected = (participant) =>
        setParticipants((prevParticipants) => [
          ...prevParticipants,
          participant,
        ]);
      const participantDisconnected = (participant) =>
        setParticipants((prevParticipants) =>
          prevParticipants.filter((p) => p !== participant)
        );
      room.on("participantConnected", participantConnected);
      room.on("participantDisconnected", participantDisconnected);
      return () => {
        room.off("participantConnected", participantConnected);
        room.off("participantDisconnected", participantDisconnected);
      };
    }
  }, [room]);

  return participants;
}
