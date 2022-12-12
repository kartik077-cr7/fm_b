const { MongoClient, ServerApiVersion } = require('mongodb');

const connectionURL ="mongodb+srv://kartik:CSEkartik@cluster0.yzpph30.mongodb.net/?retryWrites=true&w=majority";
const database = 'test'

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error,client) => {

	if(error)
	{
		console.log('ERROR ',error);
		return;
	}

	const db = client.db(database);
  db.collection('slots').insertOne({number:4,startTime:"5",endTime:"6",prefix:"PM"})
})