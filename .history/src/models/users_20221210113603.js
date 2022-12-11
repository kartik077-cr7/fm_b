const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({

	name: {
		type: String,
		required: true,
		trim: true
	},
	email:{
		type:String,
		unique: true,
		required: true,
		trim:true,
		validate(value){
			if(!validator.isEmail(value))
			  throw new Error('Email is invalid')
		}
	},
	age:{
		type:Number,
		default: 0,
		validate(value){
			if(value < 0)
			  throw new Error('Age must be a positive number')
		}
	},
	dob:{
		type:Date,
		required:true,
	},
	feePayed:{
		type:Boolean
	},
	feePaymentDate:{
		type:Date,
	},
	password:{
		type:String,
		require: true,
	}
})

const User = mongoose.model('User',userSchema)

module.exports = User