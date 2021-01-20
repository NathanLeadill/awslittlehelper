let accessKey = '';
let secretKey = '';
let s3;

exports.setAWSData = (aKey, sKey) => {
    accessKey = aKey;
    secretKey = sKey;
    s3 = new AWS.S3({
        accessKeyId: aKey,
        secretAccessKey: sKey,
    })
    console.log(s3);
}
