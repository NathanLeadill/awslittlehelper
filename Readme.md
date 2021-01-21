# Welcome to AWSLittleHelper
[![npm version](https://badge.fury.io/js/awslittlehelper.svg)](https://badge.fury.io/js/awslittlehelper)
Hi! I'm Nathan, and when I began using aws to handle storage for my Node apps, It took me a while to piece together the right stackoverflow questions to upload to S3 correctly. So I created awslittlehelper to allow people to quickly import functionality to access S3 and store data there from Express api's.

Below there is also examples for passing data to this form from a variety of sources, sweetalert2, react and others.


# Installation

To get started you need to install the latest version of awslittlehelper and its dependencies which you can install by running.

    npm install awslittlehelper
This should install the module to your work area and allow you to require it with the following line of code

    const alh = require('awslittlehelper')
 or
 

    import * as alh from 'awslittlehelper'

## Usage in S3
 
Ok so now you've imported the functionality to your project lets get using it.
### Set AWS data
Firstly you must setup your S3 storage space with the correct access and secret key for your S3 account. See below to find out how to get this. Service is either s3 or glacier. More will be added as I flesh out the module

    const alh = require('awslittlehelper')
    alh.<service>.setAWSData('accessKey', 'secretKey')

### Create Bucket
    const alh = require('awslittlehelper');
    alh.s3.createBucket('bucketName', callbackFunc);
    
### List Buckets
    const alh = require('awslittlehelper');
    alh.s3.listBuckets(callbackFunc);

### List all objects in a bucket
    const alh = require('awslittlehelper');
    alh.s3.listObjectsInBucket(bucketName, callbackFunc)

### Delete Bucket
    const alh = require('awslittlehelper');
    alt.s3.deleteBucket(bucketName);

### Uploading a file
    const alh = require('awslittlehelper');
    alh.s3.uploadFile(bucketName, file, fileName, callbackFunc)
 
### Deleting a file
    const alh = require('awslittlehelper');
    alh.s3.deleteFile(bucketName, fileName, callbackFunc)
    
### Check if file exists
    const alh = requite('awslittlehelper')
    alh.s3.checkFileExists(bucket, path, callbackFunc);

## Usage in DynamoDB
You can also use AWSLittlehelper to create and manage DynamoDB. Don't forget to set your aws data using the .setAWSData

### Create DynamoDB
Firstly you need to create the correct data object to pass to the DynamoDB. I've simplified this as much as i can so you just have to follow the below format and you'll be off.

     const definitons = [
	    { name:  'col1', type:  'S' },
	    { name:  'col2', type:  'N' },
    ];
    const schema = [
	    { name:  'col1', type:  'HASH' },
	    { name:  'col2', type:  'RANGE' },
    ];
 Once you've created these, you can just simply pass this to the create Dynamo function like below.
 

    const alh = require('awslittlehelper');
    alh.dynamo.createTable(definitions, schema, tableName, callback);

### List DynamoDB Tables
Limit is an optional parameter, if not specified it defaults to 10.

    const alh = require('awslittlehelper');
    alh.dynamo.listTables(callback, limit);
### Delete DynamoDB Table

    const alh = require('awslittlehelper');
    alh.dynamo.deleteTable(tableName, callback);
