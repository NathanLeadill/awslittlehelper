const AWS = require('aws-sdk')
let accessKey = '';
let secretKey = '';
let s3;
/**
 * 
 * @param {*} accessKey 
 * @param {*} secretKey 
 */
exports.setAWSData = function (accessKey, secretKey) {
    accessKey = aKey;
    secretKey = sKey;
    s3 = new AWS.S3({
        accessKeyId: aKey,
        secretAccessKey: sKey,
    })
}
/**
 * @name uploadFile
 * @description This function uploades a file to the S3 Bucket w
 * @param {File} file The file object 
 * @param {String} fileName The filename with the extension to save to S3
 * @param {Function} callback The function you want to call when the file has been uploaded, or if there was an error
 * @param {String} tagString this is a string key=value,key=value @todo this will eventually be an object and i will do the work
 * @param {String} bucket This is the string of the bucket you want to upload the file to
 */
exports.uploadFile = function (bucket, file, fileName, callback, tagString) {
    const params = {
        Bucket: bucket,
        Key: fileName,
        Body: fs.createReadStream(file.path).on('error', (err) => console.error('File Error', err)),
        Tagging: tagString
    }
    if (!checkFileExists(fileName)) {
        console.log(`${fileName} File Uploaded to ${bucket} Bucket on S3`)
        s3.upload(params, callback);
    }
}

/**
 * @name deleteFile
 * @description This is the function to delete a file from a specific bucket
 * @param {String} filePath This is the path to the file you want to delete, including filename and extension
 * @param {Fuction} callback This is the function you want to call on completion or error.
 */
exports.deleteFile = function (bucket, filePath, callback) {
    const params = {
        Bucket: bucket,
        Key: filePath,
    };

    s3.deleteObject(params, callback)
}