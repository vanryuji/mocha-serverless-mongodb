'use strict';

const {connDb} = require("./connDb");

module.exports.test1 = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `insert Hello, the current time is ${new Date().toTimeString()}.`,
        }),
    };

    const db = await connDb();
    await db.collection('testCollection').insertOne({test: 'test data'});
    const docCount = await db.collection('testCollection').count();
    console.log('doc count:', docCount);
    const lastDoc = await db.collection('testCollection').findOne(
        {},
        {sort: { _id: -1 }},
    );
    console.log('last doc:', lastDoc);

    callback(null, response);
};

module.exports.test2 = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `get Hello, the current time is ${new Date().toTimeString()}.`,
        }),
    };

    const db = await connDb();
    const docCount = await db.collection('testCollection').count();
    console.log('doc count:', docCount);
    const lastDoc = await db.collection('testCollection').findOne(
        {},
        {sort: { _id: -1 }},
    );
    console.log('last doc:', lastDoc);

    callback(null, response);
};
