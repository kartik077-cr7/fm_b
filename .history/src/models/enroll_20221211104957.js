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
		required:true,
	},
	batch:{
		type:Numbermber,
		required:true,
	}
})

const Enroll = mongoose.model('Enroll',enrollSchema);
module.exports = Enroll