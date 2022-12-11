const mongoose = require("mongoose")
const validator = require('validator')

const enrollSchema = new mongoose.Schema({
	user:{
     type: mongoose.Schema.Types.ObjectId,
		 required: true,
		 ref: 'User',
	},
	fee_payment_date:{
		type:Date,
		required:True,
	},
	batch:{
		type:Numbermber,
		required:True,
	}
})

const Enroll = mongoose.model('Enroll',enrollSchema);
module.exports = Enroll