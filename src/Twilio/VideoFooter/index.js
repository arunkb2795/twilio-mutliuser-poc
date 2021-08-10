import React, { useCallback } from "react";
import { Fab } from "@material-ui/core";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import VideocamOffOutlinedIcon from "@material-ui/icons/VideocamOffOutlined";
import MicRoundedIcon from "@material-ui/icons/MicRounded";
import MicOffOutlinedIcon from "@material-ui/icons/MicOffOutlined";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import { makeStyles } from "@material-ui/core/styles";

import "./styles.module.scss";

const useStyles = makeStyles(() => ({
  buttonWrapper: {
    margin: ".2rem",
    boxShadow: "none",
    backgroundColor: "#ffffff",
    color: "#000",
    "&:hover": {
      backgroundColor: "#FFF",
    },
  },
  callButtonWrapper: {
    margin: ".2rem",
    boxShadow: "none",
    backgroundColor: "#C63434",
    "&:hover": {
      backgroundColor: "#C63434",
    },
  },
}));

const VideoFooter = ({
  onMicrophoneClick,
  isStartedAudio,
  onCameraClick,
  isStartedVideo,
  onEndCall,
}) => {
  const classes = useStyles();

  const onEndCallClick = useCallback(async () => {
    onEndCall();
  }, []);

  return (
    <div className="agent-video-footer">
      <Fab
        className={classes.buttonWrapper}
        color="primary"
        size="small"
        onClick={onMicrophoneClick}
      >
        {!isStartedAudio ? <MicOffOutlinedIcon /> : <MicRoundedIcon />}
      </Fab>
      <Fab
        className={classes.callButtonWrapper + " order"}
        color="primary"
        onClick={onEndCallClick}
      >
        <CallRoundedIcon />
      </Fab>
      <Fab
        className={classes.buttonWrapper}
        color="primary"
        size="small"
        onClick={onCameraClick}
      >
        {isStartedVideo ? <VideocamRoundedIcon /> : <VideocamOffOutlinedIcon />}
      </Fab>
    </div>
  );
};

export default VideoFooter;
