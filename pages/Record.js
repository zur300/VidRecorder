// imports:
import { getMediaList } from "./GetMedia";
import React from "react"; // library of react skills
import { useSearchParams } from "next/navigation";
import { useReactMediaRecorder } from "react-media-recorder"; // the library that alow to record the video
import { Button } from "primereact/button"; // library of button types and styles from prime react
// FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations
import { FileUpload } from "primereact/fileupload"; // the library that upload files to the cloud
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
// import { url } from "inspector";

// create a record function
function Record() {
  const searchParams = useSearchParams();
  // bring the uses of react media recoder library
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  return (
    <div className="index-div">
      <h1>Video Recoder</h1>
      <h3>
        user: <span style={{ color: "red" }}>{searchParams.get("search")}</span>
      </h3>
      <h3>{status}</h3>
      {/* show the status of the recordings */}
      <div>
        {/* button that start the recordings */}
        <Button
          className="p-button-rounded p-button-danger"
          style={{ position: "relative", right: 20 }}
          onClick={startRecording}
          icon="pi pi-play"
        />
        {/* button that stop the recordings */}
        <Button
          className="p-button-rounded p-button-danger"
          style={{ position: "relative", left: 20 }}
          onClick={stopRecording}
          icon="pi pi-pause"
        />
      </div>
      <br />
      <br />
      {/* show the video that recorded from the camera */}
      {/* <video src={mediaBlobUrl} autoPlay controls></video> */}
      <video
        src="https://itay-audios.nyc3.digitaloceanspaces.com/703444fb-9425-4a63-b5fd-fed3f545b6dc.mp3"
        autoPlay
        controls
      ></video>
      <br />
      <br />
      {/* link to the cloud upload */}
      <FileUpload name="demo" url="/api/S3APIs"></FileUpload>
      <button
        onClick={() => {
          getMediaList();
        }}
      >
        press
      </button>
    </div>
  );
}

export default Record;
