const mongoose = require('mongoose')
const validator = require('validator')
const Enroll = require('./enroll')

const slotSchema = new mongoose.Schema({
	number:{
    type:Number,
		unique:true,
		required: true,
	},
	startTime:{
    type:String,
		required:true,
	},
	endTime:{
    type: String,
		require: true,
	}, 
	prefix:{
		type: String,
		required: true,
	}
})

slotSchema.virtual('enroll',{
	ref:'Enroll',
	localField:'_id',
	foreignField:'batch'
})

const Slot = mongoose.model('Slot',slotSchema);
module.exports = Slot