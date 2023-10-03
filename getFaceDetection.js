const AWS = require('aws-sdk');
require('dotenv').config();

  const rekognition = new AWS.Rekognition({
    region: process.env.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID
  });
  
  async function getFaceDetectionMethod(jobId) {
    console.log(jobId);
    let {
      Labels: labels,
      NextToken: nextToken,
    } = await rekognition.getFaceDetection({ 
      JobId: jobId,
     }).promise();
    console.log("nextToken: ",nextToken,"   labels:",labels);

    while (nextToken) {
      let response = await rekognition.getLabelDetection({ JobId: jobId, NextToken: nextToken }).promise();
      nextToken = response.NextToken;
     
      labels.push(response.Labels);
    }
    return labels;
  }

  const data = '2a33e9239b844a68b736d6e9638171eac36fae8a542321327c5cfb3e02e58b2c';
  getFaceDetectionMethod(data);
