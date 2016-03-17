var express 	= require('express');
var models	 	= require('./../models');
var router 		= express.Router();

module.exports = router;


//get all listings  endpoint: http://localhost:8080/listings
router.get('/',function(request, response){
	models.Listing.findAll().then(function(listings){
		response.json(listings);
		console.log(listings);
	});
});

//get by listing id
router.get('/:listingId', function(request, response){
	var where = {where:{id:request.params.listingId}}
	models.Listing.find(where).then(function(listing){
		response.json(listing);
		console.log(listing);
	});
});

//add new listing
router.post('/',function(request, response){
	var newListing = request.body;
	models.Listing.create(newListing).then (function(listings){
		response.json(listings);
		console.log(listings);
	});
});

//update/edit existing listing
router.put('/:listingId', function(request, response){
	var where = {where:{id:request.params.listingId}}
	var __listing = request.body;
	models.Listing.find(where).then(function(listing){
		listing.updateAttributes({
		    name				: __listing.name,
		    url					: __listing.url,
		    email				: __listing.email,
		    phone				: __listing.phone,
		    country				: __listing.country,
		    // state				: __listing.state,
		    city				: __listing.city,
		    address				: __listing.address,
		    free				: __listing.free,
		    category			: __listing.category,
		    // imagename			: __listing.imagename,
		    // image 				: __listing.image,
		    description			: __listing.description,
		    user_id				: __listing.user_id,
		    live				: __listing.live,
		    approved			: __listing.approved
		});

	__listing.id = listing.id
	response.json(__listing);
	console.log(__listing);
	});
});


//delete particular listing by id
router.delete('/:listingId', function(request, response){
	var where = {where:{id:request.params.listingId}}
	models.Listing.find(where).then(function(listing){
		listing.destroy();
		response.json({
			deleted:true
		});
		response.json(listings);
	});
});



