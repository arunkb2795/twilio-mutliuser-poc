import MainParticipantInfo from "../MainParticipantInfo";
import ParticipantTracks from "../ParticipantTracks";
import React from "react";
import useMainParticipant from "../Hooks/useMainParticipant";

export default function MainParticipant() {
  const mainParticipant = useMainParticipant();

  return (
    <MainParticipantInfo participant={mainParticipant}>
      <ParticipantTracks
        participant={mainParticipant}
        enableScreenShare={false}
        isLocalParticipant={true}
      />
    </MainParticipantInfo>
  );
}
