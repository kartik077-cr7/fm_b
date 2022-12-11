const mongoose = require('mongoose')
const validator = require('validator')


const users = new mongoose.Schema({

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
	password:{
		type:String,
		require: true,
	}
})