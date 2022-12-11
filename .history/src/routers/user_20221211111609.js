const express = require('express')
const { route } = require('../app')
const User = require('../models/users')

const router = new express.Router()

router.get('/',async(req,res) => {
	res.status(200).send('Hello Buddy!!')
})

router.post('/users',async(req,res) => {
	const user = new User(req.body)
	try{
		await user.save();
		res.status(201).send({user});
	}catch(e){
		res.status(400).send(e)
	}
})

router.post('/users/login', async(req,res) => {
	try{
		console.log("req is ",req.body.email," and ",req.body.password);
		const user = await User.findByCredentials("2019077@iiitdmj.ac.in","CSECSECSE");
		console.log("user is ",user);
		res.send({user})
	}catch(e){
		console.log("ERROR IS ",e);
		res.status(400).send(e);
	}
})

module.exports = router