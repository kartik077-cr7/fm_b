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

	console.log("login request received",req.body);
	try{
		const user = await User.findByCredentials(req.body.email,req.body.password);
		console.log("user is ",user);
		res.send({user})
	}catch(e){
		res.status(400).send(e);
	}
})

router.post('/users/register',async(req,res) => {
	
	console.log("loging request received",req.body);
	
	console.log('req.body is ',req.body);

	try{
		const user = new User({
			...req.body,
		});

		await user.save();
		res.send({user});
	}catch(e){
		res.status(400).send(e);
	}

})

module.exports = router