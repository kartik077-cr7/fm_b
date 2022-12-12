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
		const fee_payment_date = new Date();

	  const enrollment = new Enroll({
			...req.body,
			user:user._id,
			fee_payment_date:fee_payment_date
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

router.post('/check_enroll',async(req,res) => {

	console.log("CHECK ENROLLMENT REQUEST RECEIVED ");
	const user = await User.findOne({email:req.body.email});
	const findEnroll = await Enroll.findOne({user:user._id});
	console.log("enrollment is ",findEnroll);

	if(findEnroll)
	{
     const enrollmentDate = findEnroll.fee_payment_date;
		 var date = new Date();

		 if( (date.getMonth() != enrollmentDate.getMonth() ) || (date.getFullYear() - user.dob.getFullYear()) >= 65)
		 {
			 await Enroll.deleteOne({_id:findEnroll._id});
			 res.send({enrollment:"NO"});
		 }
		 else 
		   res.send({enrollment:"YES",feepayment_data: findEnroll.fee_payment_date,name:user.name,dob:user.dob});

	}
	else
	  res.send({enrollment:"NO"});
});



module.exports = router