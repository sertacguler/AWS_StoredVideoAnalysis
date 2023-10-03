const AWS = require('aws-sdk');
require('dotenv').config();

  const rekognition = new AWS.Rekognition({
    region: process.env.REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID
  });
  
  async function getLabelDetectionMethod(jobId) {
    console.log(jobId);
    let {
      Labels: labels,
      NextToken: nextToken,
    } = await rekognition.getLabelDetection({ 
      JobId: jobId,
      //MaxResults: 10,
      SortBy: "TIMESTAMP"
     }).promise();
    console.log("nextToken: ",nextToken,"   labels:",labels);

    while (nextToken) {
      let response = await rekognition.getLabelDetection({ JobId: jobId, NextToken: nextToken }).promise();
      nextToken = response.NextToken;
     
      labels.push(response.Labels);
    }
    return labels;
  }

  const data = '2f0c284b9e7f5b5aa5bbe728e1d210b472b1983c2427dbd51be1efa1d48ab2af';
  getLabelDetectionMethod(data);
