let accessKey = '';
let secretKey = '';
let s3;

const setAWSData = (aKey, sKey) => {
    accessKey = aKey;
    secretKey = sKey;
    s3 = new AWS.S3({
        accessKeyId: aKey,
        secretAccessKey: sKey,
    })
    console.log(s3);
}

module.exports = { setAwsData }