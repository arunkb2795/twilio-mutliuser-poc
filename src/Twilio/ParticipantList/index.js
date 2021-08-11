import React from "react";
import Participant from "../Participant";
import useMainParticipant from "../Hooks/useMainParticipant";
import useParticipants from "../Hooks/useParticipants";
import useVideoContext from "../Hooks/useVideoContext";
import useSelectedParticipant from "../VideoProvider/useSelectedParticipant/useSelectedParticipant";
import styles from "./styles.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function ParticipantList() {
  const { room } = useVideoContext();
  const localParticipant = room?.localParticipant;
  const participants = useParticipants();
  const [selectedParticipant, setSelectedParticipant] =
    useSelectedParticipant();
  const mainParticipant = useMainParticipant();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  // if (participants.length === 0) return null; // Don't render this component if there are no remote participants.
  if (participants.length < 2) {
    return (
      <div className={styles.dupe}>
        <Participant
          participant={localParticipant}
          isSelected={true}
          isLocalParticipant={true}
        />
      </div>
    );
  } else {
    return (
      <div>
        <div
          id="hhhh"
          style={{
            // display: "flex",
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <Carousel responsive={responsive} arrows>
            <div className={styles.canvas2}>
              <Participant
                participant={localParticipant}
                isLocalParticipant={true}
              />
            </div>
            {participants.map((participant) => {
              const isSelected = participant === selectedParticipant;
              const hideParticipant =
                participant === mainParticipant && !isSelected;
              console.log({ participant, hideParticipant });
              return !hideParticipant ? (
                <div className={styles.canvas2}>
                  <Participant
                    key={participant.sid}
                    participant={participant}
                    isSelected={participant === selectedParticipant}
                    onClick={() => setSelectedParticipant(participant)}
                    hideParticipant={hideParticipant}
                  />
                </div>
              ) : null;
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}
