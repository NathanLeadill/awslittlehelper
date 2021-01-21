const s3 = require('./helpers/s3.helpers');
const glacier = require('./helpers/glacier.helper');
const dynamo = require('./helpers/dynamo.helper');

module.exports = { s3, glacier, dynamo };
