const express = require('express')
const User = require('../models/users')

const router = new express.Router()


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
		const user = await User.findByCredentials(req.body.email,req.body.password);
		res.send({user})
	}catch(e){
		res.status(400).send();
	}
})

module.exports = router