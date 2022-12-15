import fs from "fs";
import AWS from "aws-sdk";
import formidable from "formidable";
import xml2js from "xml2js";

const xml =
  '<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><Name>itay-audios</Name></ListBucketResult>';

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
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    console.log(files.demo.filepath);
    if (!files.demo) {
      res.status(400).send("no file uploaded");
      return;
    }
    try {
      // return s3Client.putObject(
      //   {
      //     Bucket: process.env.DO_SPACES_BUCKET,
      //     // Key: files.demo.originalFilename,
      //     Key: "newQ",
      //     Body: fs.createReadStream(
      //       "C:/Users/Yoga/Desktop/abilisense/abilisense/pages/api/newQ.mp3"
      //     ),
      //     ACL: "public-read",
      //   },
      //   async () => res.status(205).send("file-uplaoded")
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

      const response = await s3Client.listObjectsV2(
        {
          Bucket: process.env.DO_SPACES_BUCKET,
          MaxKeys: 6,
          // Key: files.demo.originalFilename,
          // Key: "newQ",
          // Body: fs.createReadStream(
          //   "C:/Users/Yoga/Desktop/abilisense/abilisense/pages/api/newQ.mp3"
          // ),
          // ACL: "public-read",
        },
        (err, data) => {
          res.status(205).send("file-uplaoded");
          console.log(data?.Contents);

          // xml2js.parseString(data, function (err, result) {
          //   if (err) {
          //     console.log("ERROR: " + err);
          //     return;
          //   }
          //   fs.readFile(result, function (err, data) {
          //     var doc = new xmldoc.XmlDocument(data);
          //     console.log(doc);
          //   });

          // });
          // console.log(JSON.stringify(data));
        }
      );
    } catch (e) {
      console.log(e);
      res.status(500).send("Error uploading file");
    }
  });
}
