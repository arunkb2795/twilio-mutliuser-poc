import React from "react";
import Publication from "../Publication";
import usePublications from "../Hooks/usePublications";

export default function ParticipantTracks({
  participant,
  videoOnly,
  enableScreenShare,
  videoPriority,
  isLocalParticipant,
}) {
  const publications = usePublications(participant);

  let filteredPublications;

  if (
    enableScreenShare &&
    publications.some((p) => p.trackName.includes("screen"))
  ) {
    filteredPublications = publications.filter(
      (p) => !p.trackName.includes("camera"),
    );
  } else {
    filteredPublications = publications.filter(
      (p) => !p.trackName.includes("screen"),
    );
  }

  return (
    <>
      {filteredPublications.map((publication) => (
        <Publication
          key={publication.kind}
          publication={publication}
          participant={participant}
          isLocalParticipant={isLocalParticipant}
          videoOnly={videoOnly}
          videoPriority={videoPriority}
        />
      ))}
    </>
  );
}
