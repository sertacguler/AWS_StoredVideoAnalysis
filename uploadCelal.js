const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config();

var S3 = null;
const bucketName = "video-rekognition-bucket-sertac";
const contentType = "image/jpg"; // video/mp4
const fileName = "qwerty1.jpg"

const fileData = fs.readFileSync(fileName);
try {
    S3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID
    });
    console.log("authorization end");
    S3.upload({
        Bucket: bucketName,
        Key: fileName,
        Body: fileData,
        ContentType: contentType
    }, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`File uploaded successfully. ${data.Location}`);
        }
    });
    console.log("upload end");
} catch (err) {
    console.log("Error: ",err);
}