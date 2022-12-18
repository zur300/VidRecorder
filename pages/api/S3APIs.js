import AWS from "aws-sdk";
import fs from "fs";

import {
  BUCKET_URL,
  DO_SPACES_BUCKET,
  DO_SPACES_ID,
  DO_SPACES_SECRET,
  DO_SPACES_URL,
} from "../consts";

const s3Client = new AWS.S3({
  endpoint: DO_SPACES_URL,
  region: "nyc3",
  credentials: {
    accessKeyId: DO_SPACES_ID,
    secretAccessKey: DO_SPACES_SECRET,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export const getUrlsList = async () => {
  return s3Client
    .listObjectsV2({
      Bucket: DO_SPACES_BUCKET,
      MaxKeys: 10,
    })
    .promise()
    .then((data) => {
      const urls = [];
      data.Contents.map((file) => {
        const fileKey = file.Key;
        const fileUrl = BUCKET_URL + encodeURIComponent(fileKey);
        urls.push(fileUrl);
      });
      return urls;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const uploadData = async () => {
  // console.log(fs.createReadStream);
  const body = fs.createReadStream(
    "C:/Users/Yoga/Desktop/abilisense/abilisense/pages/api/newQ.mp3"
  );

  console.log(body);
  return s3Client
    .putObject({
      Bucket: DO_SPACES_BUCKET,
      Key: "files.demo.originalFilename",
      Body: body,
      ACL: "public-read",
    })
    .promise()
    .then(() => {
      res.status(200).send("file-uplaoded");
    })
    .catch((err) => {
      console.log(err);
    });
};

// return s3Client.putObject(
//   {
//     Bucket: DO_SPACES_BUCKET,
//     Key: files.demo.originalFilename,
//     Body: fs.createReadStream(
//       "C:/Users/Yoga/Desktop/abilisense/abilisense/pages/api/newQ.mp3"
//     ),
//     ACL: "public-read",
//   },
//   async () => res.status(200).send("file-uplaoded")
// );

// return s3Client.getObject(
//   {
//     Bucket: process.env.DO_SPACES_BUCKET,
//     // Key: files.demo.originalFilename,
//     Key: "newQ",
//     // Body: fs.createReadStream(
//     //   "C:/Users/Yoga/Desktop/abilisense/abilisense/pages/api/newQ.mp3"
//     // ),
//     // ACL: "public-read",
//   },
//   async (err, data) => {
//     res.status(205).send("file-dowloaded");
//     console.log(data);
//   }
// );
