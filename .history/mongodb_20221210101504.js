const {MongoClient,ObjectId} = require('mongodb')

const connectionURL = 'mongodb+srv://kartik:<password>@fastapi.q1fhkbw.mongodb.net/?retryWrites=true&w=majority';
const database = 'customer_data'

MongoClient.connect(connectionURL, {useNewUrlParser:true},(error,client) => {

	if(error)
	{
		console.log('CONNECTION FAILED!!!!!! ',error);
		return;
	}

	const db = client.db(database);

})