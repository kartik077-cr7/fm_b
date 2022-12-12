const mongoose = require('mongoose')
const validator = require('validator')
const Enroll = require('./enroll')

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
	dob:{
		type:Date,
		required:true,
	},
	password:{
		type:String,
		require: true,
	}
	
})

userSchema.virtual('enroll',{
	ref:'Enroll',
	localField: '_id',
	foreignField: 'user',
})

userSchema.statics.findByCredentials = async (email,password) => {
	
	const user = await User.findOne({ email:email })
	if(!user)
	  throw new Error('Unable to login');
	if(user.password != password)
	  throw new Error('Unable to Login')

	return user;

}


const User = mongoose.model('User',userSchema)

module.exports = User