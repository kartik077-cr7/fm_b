const express = require('express')
const Enroll = require('../models/enroll')
const router = new express.Router() 

router.post('/enroll',async(req,res) => {

	console.log('req.boyd is ',req.body);

	res.status(200).send("HELLO !23")
})

module.exports = router