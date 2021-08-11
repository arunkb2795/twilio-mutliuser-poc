import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UserIcon from "../../assets/svgJs/UserIcon";
import Typography from "@material-ui/core/Typography";
import useIsTrackSwitchedOff from "../Hooks/useIsTrackSwitchedOff";
import useParticipantIsReconnecting from "../Hooks/useParticipantIsReconnecting";
import usePublications from "../Hooks/usePublications";
import useTrack from "../Hooks/useTrack";
import useVideoContext from "../Hooks/useVideoContext";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "100vh",
  },
  innerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  identity: {
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "0.1em 0.3em 0.1em 0",
    display: "inline-flex",
    "& svg": {
      marginLeft: "0.3em",
    },
    marginRight: "0.4em",
    alignItems: "center",
  },
  infoContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  reconnectingContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(40, 42, 43, 0.75)",
  },
  fullWidth: {
    gridArea: "1 / 1 / 2 / 3",
    [theme.breakpoints.down("sm")]: {
      gridArea: "1 / 1 / 3 / 3",
    },
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
    "& svg": {
      transform: "scale(2)",
    },
  },
  recordingIndicator: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "0.1em 0.3em 0.1em 0",
    fontSize: "1.2rem",
    height: "28px",
    [theme.breakpoints.down("sm")]: {
      bottom: "auto",
      right: 0,
      top: 0,
    },
  },
  circle: {
    height: "12px",
    width: "12px",
    background: "red",
    borderRadius: "100%",
    margin: "0 0.6em",
    animation: `1.25s $pulsate ease-out infinite`,
  },
  "@keyframes pulsate": {
    "0%": {
      background: `#A90000`,
    },
    "50%": {
      background: "#f00",
    },
    "100%": {
      background: "#A90000",
    },
  },
}));

export default function MainParticipantInfo({ participant, children }) {
  const classes = useStyles();

  const publications = usePublications(participant);
  const videoPublication = publications.find((p) =>
    p.trackName.includes("camera")
  );

  const videoTrack = useTrack(videoPublication);
  const isVideoEnabled = Boolean(videoTrack);

  const isVideoSwitchedOff = useIsTrackSwitchedOff(videoTrack);
  const isParticipantReconnecting = useParticipantIsReconnecting(participant);

  return (
    <div
      data-cy-main-participant
      data-cy-participant={participant?.identity}
      className={classes.container}
    >
      {(!isVideoEnabled || isVideoSwitchedOff) && (
        <div className={classes.avatarContainer}>
          <div
            style={{
              display: "flex",
              color: "white",
              flexDirection: "column",
            }}
          >
            <UserIcon width={30} height={30} fill="#fff" />
            <p>{participant && participant.identity}</p>
          </div>
        </div>
      )}
      {isParticipantReconnecting && (
        <div className={classes.reconnectingContainer}>
          <Typography variant="body1" style={{ color: "white" }}>
            Reconnecting...
          </Typography>
        </div>
      )}
      <div className={classes.innerContainer}>{children}</div>
    </div>
  );
}
