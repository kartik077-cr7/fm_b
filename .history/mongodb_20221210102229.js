const { MongoClient, ServerApiVersion } = require('mongodb');

const connectionURL = "mongodb+srv://kartik:CSEkartik!@fastapi.q1fhkbw.mongodb.net/?retryWrites=true&w=majority";
const database = 'customer_data'

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error,client) => {

	if(error)
	{
		console.log('ERROR ',error);
		return;
	}

	const db = client.db(database);

})