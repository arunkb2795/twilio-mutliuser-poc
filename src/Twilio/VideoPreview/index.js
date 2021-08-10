import React, { useCallback, useEffect, useRef } from "react";
import UserIcon from "../../assets/svgJs/UserIcon";
import { makeStyles, Typography } from "@material-ui/core";
import VideoTrack from "../VideoTrack";
import useVideoContext from "../Hooks/useVideoContext";
import useLocalVideoToggle from "../Hooks/useLocalVideoToggle";
import useLocalAudioToggle from "../Hooks/useLocalAudioToggle";
import Footer from "./footer";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100%",
    overflow: "hidden",
    background: "black",
  },
  innerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  identityContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  identity: {
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "0.18em 0.3em",
    margin: 0,
    display: "flex",
    alignItems: "center",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "black",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      "& svg": {
        transform: "scale(0.7)",
      },
    },
  },
}));

export default function VideoPreview({ onStartCall }) {
  const classes = useStyles();
  const { token } = useSelector((state) => state.meetingReducer);
  const {
    connect,
    localTracks,
    getAudioAndVideoTracks,
    isAcquiringLocalTracks,
    isConnecting,
  } = useVideoContext();
  const [isVideoEnabled, toggleVideoEnabled] = useLocalVideoToggle();
  const [isAudioEnabled, toggleAudioEnabled] = useLocalAudioToggle();
  const lastClickTimeRef = useRef(0);

  const toggleVideo = useCallback(() => {
    if (Date.now() - lastClickTimeRef.current > 500) {
      lastClickTimeRef.current = Date.now();
      toggleVideoEnabled();
    }
  }, [toggleVideoEnabled]);

  const onCall = () => {
    if (!isAcquiringLocalTracks && !isConnecting) {
      connect(token);
      onStartCall();
    }
  };

  useEffect(() => {
    getAudioAndVideoTracks().then(() => {
      toggleVideo();
      toggleAudioEnabled();
    });
  }, []);

  const videoTrack = localTracks.find((track) => track.name.includes("camera"));

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        {videoTrack ? (
          <VideoTrack track={videoTrack} isLocal />
        ) : (
          <div className={classes.avatarContainer}>
            <UserIcon width={30} height={30} fill="#fff" />
          </div>
        )}
        <Footer
          isStartedVideo={isVideoEnabled}
          isStartedAudio={isAudioEnabled}
          isMuted={false}
          onMicrophoneClick={toggleAudioEnabled}
          onCameraClick={toggleVideo}
          onStartCall={onCall}
        />
      </div>
    </div>
  );
}
