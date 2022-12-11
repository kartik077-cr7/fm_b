const express = require('express')
const Enroll = require('../models/enroll')
const router = new express.Router() 

router.post('/enroll',async(req,res) => {

	console.log('req.boyd is ',req.body);

	return {"HELLO":"!23"}
})

module.exports = router