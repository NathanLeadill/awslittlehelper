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
Firstly you must setup your S3 storage space with the correct access and secret key for your S3 account. See below to find out how to get this.

    const alh = require('awslittlehelper')
    alh.setAWSData('accessKey', 'secretKey')

### Uploading a file
    const alh = require('awslittlehelper');
    alh.uploadFile(bucketName, file, fileName, (error, data) => {
        if (data) // If success
	    else  // on Error
    })
 
### Deleting a file
    const alh = require('awslittlehelper');
    alh.deleteFile(bucketName, fileName, (error, data) => {
        if (data) // If success
	    else  // on Error
    })
### Check if file exists

    const alh = requite('awslittlehelper')
    alh.checkFileExists(bucket, path);

