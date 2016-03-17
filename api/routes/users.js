var models 	= require('./../models');
var router 	= require('express').Router();

//get all users
router.get('/',function(req,res){
	models.User.findAll()
	.then(function(users){
		res.json({users:users});
	})
})


//get by user id
router.get('/:userId', function(request, response){
	var where = {where:{id:request.params.userId}}
	models.user.find(where).then(function(user){
		response.json(user);
		console.log(user);
	});
});

//add new user
router.post('/',function(request, response){
	var newuser = request.body;
	models.user.create(newuser).then (function(users){
		response.json(users);
		console.log(users);
	});
});



//WHEN WRITING PUT ENDPOINT FOR UPDATING
// make sure to convert the user_ids from array to string with JSON.stringify()

// ex user.user_ids = JSON.stringify(user.user_ids);

//also before you do the response.json() comman make sure you convert the object back from
// a string to array
// ex user.user_ids = JSON.parse(user.user_ids);


//update/edit existing user
router.put('/:userId', function(request, response){
	var where = {where:{id:request.params.userId}}
	var __user = request.body;
	models.user.find(where).then(function(user){
		user.updateAttributes({
		    fname				: __user.fname,
		    lname				: __user.lname,
		    email				: __user.email,
		    password			: __user.password,
		    listing_ids			: __user.listing_ids,
		});

	__user.id = user.id
	response.json(__user);
	console.log(__user);
	});
});


//delete particular user by id
router.delete('/:userId', function(request, response){
	var where = {where:{id:request.params.userId}}
	models.user.find(where).then(function(user){
		user.destroy();
		response.json({
			deleted:true
		});
		response.json(users);
	});
});

//delete test accounts via url bar
router.get('/remove/:userId',function(req,res){
	var where = {where:{id:req.params.userId}}
	models.User.find(where).then(function(user){
		user.destroy();
		res.json({
			deleted:true
		});	
	});
});


module.exports = router;