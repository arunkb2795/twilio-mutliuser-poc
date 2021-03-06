import { useCallback, useState } from "react";
import useVideoContext from "./useVideoContext";

export default function useLocalVideoToggle() {
  const {
    room,
    localTracks,
    getLocalVideoTrack,
    removeLocalVideoTrack,
    onError,
  } = useVideoContext();
  const localParticipant = room?.localParticipant;
  const videoTrack = localTracks.find((track) => track.name.includes("camera"));
  const [isPublishing, setIspublishing] = useState(false);

  const toggleVideoEnabled = useCallback(() => {
    if (!isPublishing) {
      if (videoTrack) {
        if (localParticipant) {
          const localTrackPublication =
            localParticipant?.unpublishTrack(videoTrack);
          localParticipant.emit("trackUnpublished", localTrackPublication);
        }
        removeLocalVideoTrack();
      } else {
        setIspublishing(true);
        getLocalVideoTrack()
          .then((track) => {
            if (localParticipant) {
              localParticipant.publishTrack(track, { priority: "low" });
            }
          })
          .catch(onError)
          .finally(() => setIspublishing(false));
      }
    }
  }, [
    videoTrack,
    localParticipant,
    getLocalVideoTrack,
    isPublishing,
    onError,
    removeLocalVideoTrack,
  ]);

  return [!!videoTrack, toggleVideoEnabled];
}
