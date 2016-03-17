app.controller('ListingCtrl',ListingCtrl);

function ListingCtrl($http, $location, $stateParams, api, listingsSrv, optionsSrv,UsersSrv){
	var ctrl = this;
	ctrl.listingsSrv = listingsSrv;
	ctrl.optionsSrv = optionsSrv;
	ctrl.$location = $location;
	ctrl.$http = $http;
	ctrl.UsersSrv = UsersSrv;

	ctrl.listing = {};
	ctrl.listing_edit_btn = 'Save Changes';
	ctrl.listing_delete_btn = 'Delete Listing';
	// ctrl.free= 'No';

	ctrl.countries = ctrl.optionsSrv.countries;
	ctrl.cities = ctrl.optionsSrv.cities;
	ctrl.categories = ctrl.optionsSrv.categories;

	ctrl.user = UsersSrv.returnUser();
	console.log('USER IN LISTINGS CTRL');
	console.log(ctrl.user);


	if($stateParams.listingId != undefined){
		listingsSrv.getListing($stateParams.listingId)
		.then(function(res){
			console.log(res);
			ctrl.listing = res.data;

			for(var index in ctrl.countries){
				if(ctrl.listing.country == ctrl.countries[index].value){
					ctrl.country = ctrl.countries[index];
				}
			}
			for(var index in ctrl.cities){
				if(ctrl.listing.city == ctrl.cities[index].value){
					ctrl.city = ctrl.cities[index];
				}
			}
			for(var index in ctrl.categories){
				if(ctrl.listing.category == ctrl.categories[index].value){
					ctrl.category = ctrl.categories[index];
				}
			}
			
		})
	};


	ctrl.getListing = function(){
		ctrl.$http.get('/listings/'+listingId)
		.then(function(res) {
			ctrl.listing = res.data;
			console.log(ctrl.listing);
		});
	};

	ctrl.addListing = function(isValid){
		console.log('hello');
		console.log(isValid);
		var listing = {
		    name				: ctrl.name,
		    url					: ctrl.url,
		    email				: ctrl.email,
		    phone				: ctrl.phone,
		    country				: ctrl.country,
		    // state				: ctrl.state,
		    city				: ctrl.city,
		    address				: ctrl.address,
		    free				: ctrl.free,
		    category			: ctrl.category,
		    // imagename			: ctrl.imagename,
		    // image 				: ctrl.image,
		    description			: ctrl.description,
		    user_id				: ctrl.user.id,
		    live				: true,
		    approved			: true
		}
		// console.log(listing);
		if (isValid){
			ctrl.listingsSrv.addListing(listing);
		}
	};


	ctrl.editListing = function(id){

		// ctrl.listing_update_btn = "Updating";
		var listing = {
		    name				: ctrl.listing.name,
		    url					: ctrl.listing.url,
		    email				: ctrl.listing.email,
		    phone				: ctrl.listing.phone,
		    country				: ctrl.country.value,
		    // state				: ctrl.state,
		    city				: ctrl.city.value,
		    address				: ctrl.listing.address,
		    free				: ctrl.listing.free,
		    category			: ctrl.category.value,
		    // imagename			: ctrl.imagename,
		    // image 				: ctrl.image,
		    description			: ctrl.listing.description,
		    user_id				: ctrl.user.id,
		    live				: true,
		    approved			: true
		}
		ctrl.listingsSrv.editListing(listing, ctrl.listing.id)
		.then(function(res){
			ctrl.$location.path('/dashboard');
		});
	};

	ctrl.deleteListing = function(id){
		console.log(id);
		ctrl.listingsSrv.deleteListing(ctrl.listing, ctrl.listing.id)
		.then(function(res) {
			console.log(res);
			// ctrl.getListings();
			ctrl.$location.path('/dashboard');
		});
	};


};

