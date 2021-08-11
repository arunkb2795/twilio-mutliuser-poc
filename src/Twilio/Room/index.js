import React, { useCallback, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import ParticipantList from "../ParticipantList";
import MainParticipant from "../MainParticipant";
import useVideoContext from "../Hooks/useVideoContext";
import useLocalVideoToggle from "../Hooks/useLocalVideoToggle";
import useLocalAudioToggle from "../Hooks/useLocalAudioToggle";
import useRoomState from "../Hooks/useRoomState";
import VideoFooter from "../VideoFooter";
// import CarouselComponent from "../../CarouselComponent";

const useStyles = makeStyles((theme) => {
  const totalMobileSidebarHeight = `${
    theme.sidebarMobileHeight +
    theme.sidebarMobilePadding * 2 +
    theme.participantBorderWidth
  }px`;
  return {
    container: {
      position: "relative",
      height: "100%",
      display: "grid",
      borderRadius: "10px",
      overflow: "hidden",
      gridTemplateColumns: `1fr ${theme.sidebarWidth}px`,
      gridTemplateRows: "100%",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: `100%`,
        gridTemplateRows: `calc(100% - ${totalMobileSidebarHeight}) ${totalMobileSidebarHeight}`,
      },
    },
    loader: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#000000",
    },
    loadingText: {
      fontSize: "24px",
      color: "#ffffff",
    },
  };
});

export default function Room() {
  const classes = useStyles();
  const roomState = useRoomState();
  const { room } = useVideoContext();
  const [isVideoEnabled, toggleVideoEnabled] = useLocalVideoToggle();
  const [isAudioEnabled, toggleAudioEnabled] = useLocalAudioToggle();
  const lastClickTimeRef = useRef(0);

  const toggleVideo = useCallback(() => {
    if (Date.now() - lastClickTimeRef.current > 500) {
      lastClickTimeRef.current = Date.now();
      toggleVideoEnabled();
    }
  }, [toggleVideoEnabled]);

  const OnEndCall = () => {
    room.disconnect();
  };

  if (roomState !== "connected" && !room) {
    return (
      <div>
        <p>Connecting....</p>
      </div>
    );
  }

  return (
    <>
      <div
        className={classes.container}
        // style={{
        //   width: "100%",
        //   height: "100vh",
        //   backgroundColor: "black",
        //   position: "relative",
        // }}
      >
        <MainParticipant />
        <ParticipantList />
      </div>
      <VideoFooter
        isStartedVideo={isVideoEnabled}
        isStartedAudio={isAudioEnabled}
        isMuted={false}
        onMicrophoneClick={toggleAudioEnabled}
        onCameraClick={toggleVideo}
        onEndCall={OnEndCall}
      />
    </>
  );
}
