// imports:
// import { getMediaList } from "./GetMedia";
import React, { useState, useEffect } from "react"; // library of react skills
import { useSearchParams } from "next/navigation";
import { useReactMediaRecorder } from "react-media-recorder"; // the library that alow to record the video
import { Button } from "primereact/button"; // library of button types and styles from prime react
// FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations
import { FileUpload } from "primereact/fileupload"; // the library that upload files to the cloud
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
// import { url } from "inspector";
import { getUrlsList } from "./GetMedia";

// create a record function
function Record() {
  const [files, setFiles] = useState([]);
  const [blob, Setblob] = useState([undefined]);

  useEffect(() => {
    getAllFiles();
  }, []);

  const getAllFiles = async () => {
    const files = await getUrlsList();
    setFiles(files);
    console.log(files);
  };

  // const getAllFiles = () => {
  //   fetch("/api/S3APIs")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setFiles(data);
  //       console.log(files);
  //     })
  //     .catch((err) => console.log(err));
  // };

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

  useEffect(() => {
    console.log("mediaBlobUrl", mediaBlobUrl);
    if (mediaBlobUrl) {
      fetch("/api/S3APIs", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ mediaBlobUrl }),
      }).then((res) => {
        console.log("res", res);
      });
    }
  }, [mediaBlobUrl]);

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
        <video
          name={"video"}
          src={mediaBlobUrl}
          value={"mediaBlobUrl"}
          // autoPlay
          controls
        />
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

      {/* <video
        src="https://itay-audios.nyc3.digitaloceanspaces.com/703444fb-9425-4a63-b5fd-fed3f545b6dc.mp3"
        autoPlay
        controls
      ></video> */}
      {mapList()}
      <br />
      <br />
      {/* link to the cloud upload */}
      {/* <button name={"demo"} url={"/api/S3APIs"}>
        get list
      </button> */}

      {/* <button
        onClick={() => {
          getMediaList();
        }}
      >
        press
      </button> */}
    </div>
  );
}

export default Record;
