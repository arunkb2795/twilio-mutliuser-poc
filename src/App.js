import React from "react";
import TwilioMeetingPage from "./TwilioMeetingPage";
import SamplePage from "./SamplePage";
import useConnectionOptions from "./Twilio/Hooks/useConnectionOptions";
import { VideoProvider } from "./Twilio/VideoProvider";

export default function App() {
  const connectionOptions = useConnectionOptions();
  return (
    <VideoProvider
      connectionOptions={connectionOptions}
      onError={(err) => console.log(err)}
    >
      <TwilioMeetingPage />
      {/* <SamplePage /> */}
    </VideoProvider>
  );
}
