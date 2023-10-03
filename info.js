const fs = require('fs');

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

const fileName = "PhuketThailand.mp4";
const fileContent = fs.readFileSync(fileName);

( async () => {
    await S3
    .putObject({
        Body:fileContent,
        Bucket:'video-rekognition-bucket-sertac',
        Key:'PhuketThailand.mp4',
        ContentType:"video/mp4"
    }).promise()
})();

/*
const fileName = "qwerty.jpg";
const fileContent = fs.readFileSync(fileName);

( async () => {
    await S3
    .putObject({
        Body:fileContent,
        Bucket:'video-rekognition-bucket-sertac',
        Key:'qwerty.jpg',
        ContentType:"image/JPG"
    }).promise()
})();
*/
/*
( async () => {
    await S3
    .putObject({
        Body:'Hello World',
        Bucket:'video-rekognition-bucket-sertac',
        Key:'firstTXT.txt'
    }).promise()
})();
*/

/*
cd ~

mkdir .aws

touch credentials

aws_access_key_id = AKIAUPRTIO6XBZUCBBVN
aws_secret_access_key = 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
*/