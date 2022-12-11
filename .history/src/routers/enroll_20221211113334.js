const express = require('express')
const Enroll = require('../models/enroll')
const User = require('../models/users')
const router = new express.Router() 

router.post('/enroll',async(req,res) => {

	console.log("REQUES IS ",req.body);
	const user = await User.findOne({email:req.body.email});
  console.log("USER is ",user);

	if(user)
	{
		console.log("USER ID IS ",user._id);
	  const enrollment = new Enroll({
			...req.body,
			user:user._id
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