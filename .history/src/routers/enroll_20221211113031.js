const express = require('express')
const Enroll = require('../models/enroll')
const User = require('../models/users')
const router = new express.Router() 

router.post('/enroll',async(req,res) => {

	const user = await User.findOne({email:email});

	if(user)
	{
	  const enrollment = new Enroll({
			...req.body,
			user:user.user._id
		})

		try{
			await enrollment.save()
			res.status(201).send(enrollment);
		}
		catch(e){
			res.status(400).send(e)
		}
	}
	else 
	{
     res.status(400).send("USER NOT VALID")
	}
})

module.exports = router