import fs from "fs";
import AWS from "aws-sdk";
import formidable from "formidable";

const s3Client = new AWS.S3({
  endpoint: process.env.DO_SPACES_URL,
  region: "nyc3",
  credentials: {
    accessKeyId: process.env.DO_SPACES_ID,
    secretAccessKey: process.env.DO_SPACES_SECRET,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function Hanlder(req, res) {
  console.log("req!!!!!!!!!!!!!!!!!!!!!!", req?.body?.mediaBlobUrl);
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    try {
      // console.log(
      //   "files! !!!!!!!!!!!!!!!!!!",
      //   fs.createReadStream(req.body.mediaBlobUrl)
      // );

      // const file = new File([req.body.mediaBlobUrl], "filename");
      // console.log("fileasdfasdfasdfadsfasddfdsa", file);
      return s3Client.putObject(
        {
          Bucket: process.env.DO_SPACES_BUCKET,
          // Key: files.demo.originalFilename,
          Key: "newQui",
          Body: fs.createReadStream(
            "C:/Users/Yoga/Desktop/VidRecoder/VidRecorder/pages/api/newQ.mp3"
          ),
          ACL: "public-read",
        },
        async () => res.status(205).send("file-uplaoded")
      );
    } catch (e) {
      console.log(e);
    }
    return;
  });
}
