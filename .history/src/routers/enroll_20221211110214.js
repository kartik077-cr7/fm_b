const express = require('express')
const Enroll = require('../models/enroll')
const router = new express.Router() 

router.post('/enroll',async(req,res) => {

	const enrollment = new Enroll({
		..req.body,
		user: req.user._id
	})
})