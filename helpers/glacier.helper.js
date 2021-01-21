const AWS = require('aws-sdk');
const fs = require('fs');

let glacier;
/**
 *
 * @param {*} accessKey
 * @param {*} secretKey
 */
const setAWSData = (aKey, sKey) => {
    glacier = new AWS.Glacier({
        accessKeyId: aKey,
        secretAccessKey: sKey,
    });
};

/**
 * @name createVault
 * @description Creates an S3 Glacier Vault to store archive files.
 * @param {String} glacierName Name of S3 Glacier your want to create
 * @param {Function} callback Callback function to call when you create a vault
 */
const createVault = (glacierName, callback) => {
    const params = {
        vaultName: glacierName,
    };

    glacier.createVault(params, callback);
};

/**
 * @name uploadToVault
 * @description Upload archive to vault under 4GB otherwise use uploadMultPart
 * @param {String} vaultName The name of the s3 glacier object you want to upload to
 * @param {Buffer} body This is a buffer of the object you want to upload to glacier
 * @param {Function} callback Callback function to run when upload either completes or errors
 */
const uploadToVault = (vaultName, body, callback) => {
    const params = {
        vaultName,
        body: fs.createReadStream(body.path).on('error', (err) => console.error('File Error', err)),
    };
    glacier.uploadArchive(params, callback);
};

module.exports = { setAWSData, createVault, uploadToVault };
