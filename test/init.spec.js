const mongoUnit = require('mongo-unit')
const {DB_NAME} = process.env;

before(async () => {
    await mongoUnit.start({
        dbName: DB_NAME
    });
    console.log('In-momery MongoDB started');
});

after(async () => {
    await mongoUnit.stop();
    console.log('In-momery MongoDB stopped');
});