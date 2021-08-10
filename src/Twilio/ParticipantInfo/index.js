import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import UserIcon from "../../assets/svgJs/UserIcon";
import Typography from "@material-ui/core/Typography";

import useIsTrackSwitchedOff from "../Hooks/useIsTrackSwitchedOff";
import usePublications from "../Hooks/usePublications";
import useTrack from "../Hooks/useTrack";
import useParticipantIsReconnecting from "../Hooks/useParticipantIsReconnecting";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: "100%",
      overflow: "hidden",
      "& video": {
        filter: "none",
        objectFit: "cover !important",
      },
      borderRadius: "8px",
      background: "black",
    },
    innerContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    infoContainer: {
      position: "absolute",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      width: "100%",
      background: "transparent",
      top: 0,
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
      zIndex: 1,
      [theme.breakpoints.down("sm")]: {
        "& svg": {
          transform: "scale(0.7)",
        },
      },
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
      zIndex: 1,
    },
    screenShareIconContainer: {
      background: "rgba(0, 0, 0, 0.5)",
      padding: "0.18em 0.3em",
      marginRight: "0.3em",
      display: "flex",
      "& path": {
        fill: "white",
      },
    },
    identity: {
      background: "rgba(0, 0, 0, 0.5)",
      color: "white",
      padding: "0.18em 0.3em",
      margin: 0,
      display: "flex",
      alignItems: "center",
    },
    infoRowBottom: {
      display: "flex",
      justifyContent: "space-between",
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    typeography: {
      color: "white",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
      },
    },
    hideParticipant: {
      display: "block",
    },
    cursorPointer: {
      cursor: "pointer",
    },
  })
);

export default function ParticipantInfo({
  participant,
  onClick,
  isSelected,
  children,
  isLocalParticipant,
  hideParticipant,
}) {
  const publications = usePublications(participant);

  const videoPublication = publications.find((p) =>
    p.trackName.includes("camera")
  );

  const isVideoEnabled = Boolean(videoPublication);

  const videoTrack = useTrack(videoPublication);
  const isVideoSwitchedOff = useIsTrackSwitchedOff(videoTrack);
  const isParticipantReconnecting = useParticipantIsReconnecting(participant);

  const classes = useStyles();
  return (
    <div
      className={clsx(classes.container, {
        [classes.hideParticipant]: hideParticipant,
        [classes.cursorPointer]: Boolean(onClick),
      })}
      onClick={onClick}
      data-cy-participant={participant.identity}
    >
      <div className={classes.innerContainer}>
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
              <p>{participant.identity}</p>
            </div>
          </div>
        )}
        {isParticipantReconnecting && (
          <div className={classes.reconnectingContainer}>
            <Typography variant="body1" className={classes.typeography}>
              Reconnecting...
            </Typography>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
