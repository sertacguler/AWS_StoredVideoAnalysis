const AWS = require('aws-sdk');
require('dotenv').config();

  const rekognition = new AWS.Rekognition({
    region: process.env.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID
  });
  
  var params = {
    Video: {
      S3Object: {
        Bucket: 'video-rekognition-bucket-sertac',
        Name: 'song.mp4',
      }
    },
    NotificationChannel: {
      RoleArn: 'arn:aws:iam::308271413166:role/serviceVideoRekognitionSertac',
      SNSTopicArn: 'arn:aws:sns:eu-central-1:308271413166:AmazonRekognitionTopic'
    }
  };
  rekognition.startLabelDetection(params, function(err, data) {
    if (err) console.log(err, err); // an error occurred
    else {
        console.log("sertac",data);  // successful response
    }         
  });