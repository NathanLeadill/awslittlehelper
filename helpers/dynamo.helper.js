const AWS = require('aws-sdk');
const fs = require('fs');

let dynamo;
/**
 *
 * @param {*} accessKey
 * @param {*} secretKey
 */
const setAWSData = (aKey, sKey) => {
    dynamo = new AWS.DynamoDB({
        accessKeyId: aKey,
        secretAccessKey: sKey,
    });
};

const generateDefinitions = (definitions) => definitions.map((definition) => ({
    AttributeName: definition.name,
    AttributeType: definition.type,
}));

const generateSchema = (schema) => schema.map((key) => ({
    AttributeName: key.name,
    KeyType: key.type,
}));

const createTable = (definitions, schema, tableName, callback) => {
    const params = {
        AttributeDefinitions: [...generateDefinitions(definitions)],
        KeySchema: [...generateSchema(schema)],
        TableName: tableName,
        StreamSpecification: {
            StreamEnabled: false,
        },
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
        },
    };

    dynamo.createTable(params, callback);
};

/**
 * @name deleteTable
 * @description Deletes the specified table from your account.
 * @param {String} tableName The name of the table you want to delete
 * @param {Function} callback The callback function you wwant to run when it's completed
 */
const deleteTable = (tableName, callback) => {
    const params = { TableName: tableName };
    dynamo.deleteTable(params, callback);
};

/**
 * @name listTables
 * @description Lists all the DynamoDB Tables you have.
 * @param {Number} limit Optional, if not set, default = 10
 * @param {Function} callback The callback function you wwant to run when it's completed
 */
const listTables = (callback, limit) => {
    dynamo.listTables({ Limit: (limit) || 10 }, callback);
};

module.exports = {
    setAWSData, createTable, listTables, deleteTable,
};
