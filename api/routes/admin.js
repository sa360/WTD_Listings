var express 	= require('express');
var models	 	= require('./../models');
var router 		= express.Router();

module.exports = router;


//get all listings  endpoint: http://localhost:8080/listings
router.get('/',function(request, response){
	models.listing.findAll().then(function(listings){
		res.json(listings);
		console.log(listings);
	});
});

//get by listing id
router.get('/:listingId', function(request, response){
	var where = {where:{id:req.params.listingId}}
	models.listing.find(where).then(function(listing){
		res.json(listing);
		console.log(listing);
	});
});

//add new listing
router.post('/',function(request, response){
	var newListing = request.body;
	models.listing.create(newListing).then (function(listings){
		res.json(listings);
		console.log(listings);
	});
});

//update/edit existing listing
router.put('/:listingId', function(request, response){
	var where = {where:{id:req.params.listingId}}
	var __listing = request.body;
	models.listing.find(where).then(function(listing){
		listing.updateAttributes({
		    name				: __listing.name,
		    url					: __listing.url,
		    email				: __listing.email,
		    phone				: __listing.phone,
		    // country				: __listing.country,
		    // state				: __listing.state,
		    // city				: __listing.city,
		    address				: __listing.address,
		    // category1			: __listing.category1,
		    // category2			: __listing.category2,
		    // imagename			: __listing.imagename,
		    // image 				: __listing.image,
		    description			: __listing.description,
		    user_id				: __listing.user_id,
		    live				: __listing.live,
		    approved			: __listing.approved
		});

	__listing.id = listing.id
	res.json(__listing);
	console.log(__listing);
	});
});


//delete particular listing by id
router.delete('/:listingId', function(request, response){
	var where = {where:{id:req.params.listingId}}
	models.listing.find(where).then(function(listing){
		listing.detroy();
		res.json({
			deleted:true
		});
		res.json(listings);
	});
});
