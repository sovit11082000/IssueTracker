const MongoClient = require('mongodb').MongoClient;

// Replace 'mydatabase' with the name of your local MongoDB database
const databaseName = 'admin';

// Create the MongoDB connection URL for localhost
const url = `mongodb://127.0.0.1:27017/${databaseName}.IssueTracker`;

async function getEmpData() {
    let client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    let connection = client.db(databaseName); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;
