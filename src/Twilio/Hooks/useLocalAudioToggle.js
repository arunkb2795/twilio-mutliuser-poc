import { useCallback, useEffect, useState } from "react";
import useIsTrackEnabled from "./useIsTrackEnabled";
import useVideoContext from "./useVideoContext";

export default function useLocalAudioToggle() {
  const { localTracks } = useVideoContext();
  const audioTrack = localTracks.find((track) => track.kind === "audio");
  const [isEnabled, setIsEnabled] = useState(
    audioTrack ? audioTrack.isEnabled : false,
  );

  useEffect(() => {
    setIsEnabled(audioTrack ? audioTrack.isEnabled : false);

    if (audioTrack) {
      const setEnabled = () => setIsEnabled(true);
      const setDisabled = () => setIsEnabled(false);
      audioTrack.on("enabled", setEnabled);
      audioTrack.on("disabled", setDisabled);
      return () => {
        audioTrack.off("enabled", setEnabled);
        audioTrack.off("disabled", setDisabled);
      };
    }
  }, [audioTrack]);

  const toggleAudioEnabled = useCallback(() => {
    if (audioTrack) {
      audioTrack.isEnabled ? audioTrack.disable() : audioTrack.enable();
    }
  }, [audioTrack]);

  return [isEnabled, toggleAudioEnabled];
}
