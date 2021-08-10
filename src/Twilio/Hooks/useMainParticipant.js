import useParticipants from "./useParticipants";
import useSelectedParticipant from "../VideoProvider/useSelectedParticipant/useSelectedParticipant";
import useDominantSpeaker from "./useDominantSpeaker";
import useVideoContext from "./useVideoContext";
export default function useMainParticipant() {
  const [selectedParticipant] = useSelectedParticipant();
  const participants = useParticipants();
  const dominantSpeaker = useDominantSpeaker();
  const { room } = useVideoContext();
  const localParticipant = room?.localParticipant;
  console.log({ dominantSpeaker });
  // The participant that is returned is displayed in the main video area. Changing the order of the following
  // variables will change the how the main speaker is determined.
  return (
    dominantSpeaker ||
    selectedParticipant ||
    participants[0] ||
    localParticipant
  );
}
