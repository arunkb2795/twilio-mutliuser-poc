import React from "react";
import { Fab } from "@material-ui/core";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import VideocamOffOutlinedIcon from "@material-ui/icons/VideocamOffOutlined";
import MicRoundedIcon from "@material-ui/icons/MicRounded";
import MicOffOutlinedIcon from "@material-ui/icons/MicOffOutlined";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import { makeStyles } from "@material-ui/core/styles";
import CustomTooltip from "../../Components/CustomTooltip";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: "#39c634",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#39c634",
    },
  },
}));

function Footer(props) {
  const {
    isStartedVideo,
    isStartedAudio,
    isMuted,
    onMicrophoneClick,
    onStartCall,
    onCameraClick,
  } = props;

  const classes = useStyles();
  return (
    <div className={styles.videoFooter}>
      <CustomTooltip title="Toggle Audio" placement="top" arrow>
        <Fab
          className={classes.buttonWrapper}
          color="primary"
          size="small"
          onClick={onMicrophoneClick}
        >
          {isStartedAudio ? (
            isMuted ? (
              <MicOffOutlinedIcon />
            ) : (
              <MicRoundedIcon />
            )
          ) : (
            <MicOffOutlinedIcon />
          )}
        </Fab>
      </CustomTooltip>
      <CustomTooltip title="Start Meeting" placement="top" arrow>
        <Fab
          className={classes.callButtonWrapper + " " + styles.order}
          color="primary"
          onClick={onStartCall}
        >
          <CallRoundedIcon />
        </Fab>
      </CustomTooltip>
      <CustomTooltip title="Toggle Video" placement="top" arrow>
        <Fab
          className={classes.buttonWrapper}
          color="primary"
          size="small"
          onClick={onCameraClick}
        >
          {isStartedVideo ? (
            <VideocamRoundedIcon />
          ) : (
            <VideocamOffOutlinedIcon />
          )}
        </Fab>
      </CustomTooltip>
    </div>
  );
}

Footer.propTypes = {
  isStartedAudio: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isStartedVideo: PropTypes.bool.isRequired,
  onMicrophoneClick: PropTypes.func.isRequired,
  onStartCall: PropTypes.func.isRequired,
  onCameraClick: PropTypes.func.isRequired,
};

export default Footer;
