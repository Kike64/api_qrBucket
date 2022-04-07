require('dotenv').config();
const AWS = require("aws-sdk");
const fs = require("fs");

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const Bucket = process.env.BUCKETNAME;

const s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey
});

const uploadFile = async (file) => {

    const fileStream = fs.createReadStream(`./temp/${file}`);

    const uploadParams = {
        Bucket: Bucket,
        Body: fileStream,
        Key: file
    };
    try {
        const upload = await s3.upload(uploadParams).promise();
        return { "URL": upload.Location };
    } catch {
        return { "error": "error al subir archivo al bucket" };
    }
    
    

};

module.exports = uploadFile;

