const mongoose = require("mongoose")
const validator = require('validator')

const enrollSchema = new mongoose.Schema({
	email:{

	},
	fee_payment_date:{
		type:Date,
		required:True
	},
	batch:{
		type:Numbermber,
		required:True
	}
})