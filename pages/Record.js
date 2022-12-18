// imports:
import { useSearchParams } from "next/navigation";
import { Button } from "primereact/button"; // library of button types and styles from prime react
import React, { useEffect, useState } from "react"; // library of react skills
import { useReactMediaRecorder } from "react-media-recorder"; // the library that alow to record the video
// FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations
import "primeicons/primeicons.css"; // icons
import { FileUpload } from "primereact/fileupload"; // the library that upload files to the cloud
import "primereact/resources/primereact.min.css"; // core css
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import { getUrlsList, uploadData } from "./api/S3APIs";
// import { url } from "inspector";

// create a record function
function Record() {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    getAllFiles();
  }, []);

  const getAllFiles = async () => {
    const files = await getUrlsList();
    setFiles(files);
    console.log(files);
  };

  const mapList = () => {
    console.log("mmn");
    return files?.map((val, index) => {
      return <video src={val} controls></video>;
    });
  };

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
        src="https://nyc3.digitaloceanspaces.com/itay-audios/6daefc7b-1c2a-4aaa-bc40-05401258d880%20(1).mp3"
        // autoPlay
        controls
      ></video>
      <button onClick={uploadData}>upload</button>
      {mapList()}
      <br />
      <br />
      {/* link to the cloud upload */}
      {/* <FileUpload name="demo" url="/api/S3APIs"></FileUpload> */}
    </div>
  );
}

export default Record;
