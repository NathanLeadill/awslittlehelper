/* eslint-disable consistent-return */
const AWS = require('aws-sdk');
const fs = require('fs');

let s3;
/**
 *
 * @param {*} accessKey
 * @param {*} secretKey
 */
const setAWSData = (aKey, sKey) => {
    s3 = new AWS.S3({
        accessKeyId: aKey,
        secretAccessKey: sKey,
    });
};

/**
 * @name deleteFile
 * @description This is the function to delete a file from a specific bucket
 * @param {String} filePath This is the path to the file you want to delete, including filename and extension
 * @param {Fuction} callback This is the function you want to call on completion or error.
 */
const deleteFile = (bucket, filePath, callback) => {
    const params = {
        Bucket: bucket,
        Key: filePath,
    };

    s3.deleteObject(params, callback);
};

const checkFileExists = (bucket, path) => {
    const params = {
        Bucket: bucket,
        Key: path,
    };
    s3.headObject(params, (err, metadata) => {
        if (err && err.code === 'NotFound') {
            console.log(`${path} cannot be found in the specified bucket`);
            return false;
        } deleteFile(path, (err, data) => {
            if (err) return true;
            return false;
        });
    });
};

/**
 * @name uploadFile
 * @description This function uploades a file to the S3 Bucket w
 * @param {File} file The file object
 * @param {String} fileName The filename with the extension to save to S3
 * @param {Function} callback The function you want to call when the file has been uploaded, or if there was an error
 * @param {String} tagString this is a string key=value,key=value @todo this will eventually be an object and i will do the work
 * @param {String} bucket This is the string of the bucket you want to upload the file to
 */
const uploadFile = (bucket, file, fileName, callback, tagString) => {
    const params = {
        Bucket: bucket,
        Key: fileName,
        Body: fs.createReadStream(file.path).on('error', (err) => console.error('File Error', err)),
        Tagging: tagString,
    };
    if (!checkFileExists(fileName)) {
        console.log(`${fileName} File Uploaded to ${bucket} Bucket on S3`);
        s3.upload(params, callback);
    }
};

const createBucket = (bucketName, callback) => {
    const bucketParams = { Bucket: bucketName };
    s3.createBucket(bucketParams, callback);
};

const listBuckets = (callback) => {
    s3.listBuckets(callback);
};

const deleteBucket = (bucketName, callback) => {
    const bucketParams = { Bucket: bucketName };
    s3.deleteBucket(bucketParams, callback);
};

const listObjectsInBucket = (bucketName, callback) => {
    const bucketParams = { Bucket: bucketName };
    s3.listObjects(bucketParams, callback);
};

module.exports = {
    setAWSData,
    uploadFile,
    deleteFile,
    checkFileExists,
    createBucket,
    listBuckets,
    deleteBucket,
    listObjectsInBucket,
};
