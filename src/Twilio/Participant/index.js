import React from "react";
import ParticipantInfo from "../ParticipantInfo";
import ParticipantTracks from "../ParticipantTracks";

export default function Participant({
  participant,
  videoOnly,
  enableScreenShare,
  onClick,
  isSelected,
  isLocalParticipant,
  hideParticipant,
}) {
  return (
    <ParticipantInfo
      participant={participant}
      onClick={onClick}
      isSelected={isSelected}
      isLocalParticipant={isLocalParticipant}
      hideParticipant={hideParticipant}
    >
      <ParticipantTracks
        participant={participant}
        videoOnly={videoOnly}
        enableScreenShare={enableScreenShare}
        isLocalParticipant={isLocalParticipant}
      />
    </ParticipantInfo>
  );
}
