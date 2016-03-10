app.controller('ListingCtrl',ListingCtrl);

function ListingCtrl($http, $location, $stateParams, api, listingsSrv){
	var ctrl = this;
	ctrl.listingsSrv = listingsSrv;
	ctrl.$location = $location;
	ctrl.$http = $http;

	ctrl.listing = {};
	ctrl.listing_edit_btn = 'Save Changes';
	ctrl.listing_delete_btn = 'Delete Listing';

	ctrl.countries = [
		{label:'Canada',value:'Canada'},
		{label:'England',value:'England'},
		{label:'France',value:'France'},
		{label:'United States',value:'United States'},
	];

	ctrl.cities = [
		{label:'Toronto',value:'Toronto'},
		{label:'Ottawa',value:'Ottawa'},
		{label:'Quebec',value:'Quebec'},
		{label:'Montreal',value:'Montreal'},
		{label:'Vancouver',value:'Vancouver'},
	];

	ctrl.categories = [
		{label:'Nature', value:'Nature'},
		{label:'Architecture', value:'Architecture'},
		{label:'History', value:'History'},
		{label:'Food', value:'Food'},

	];


	if($stateParams.listingId != undefined){
		listingsSrv.getListing($stateParams.listingId)
		.then(function(res){
			console.log(res);
			ctrl.listing = res.data;

			for(var option in ctrl.countries){
				if(ctrl.listing.country == ctrl.countries[country].value){
					ctrl.country = ctrl.countries[country];
				}
			}
			for(var option in ctrl.cities){
				if(ctrl.listing.city == ctrl.cities[city].value){
					ctrl.city = ctrl.cities[city];
				}
			}
			for(var option in ctrl.categories){
				if(ctrl.listing.category == ctrl.categories[category].value){
					ctrl.category = ctrl.categories[category];
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

	ctrl.addListing = function(){
		var listing = {
		    name				: ctrl.name,
		    url					: ctrl.url,
		    email				: ctrl.email,
		    phone				: ctrl.phone,
		    country				: ctrl.country,
		    // state				: ctrl.state,
		    city				: ctrl.city,
		    address				: ctrl.address,
		    // category1			: ctrl.category1,
		    category			: ctrl.category,
		    // imagename			: ctrl.imagename,
		    // image 				: ctrl.image,
		    description			: ctrl.description,
		    user_id				: ctrl.user_id,
		    live				: true,
		    approved			: true
		}
		// console.log(listing);
		ctrl.listingsSrv.addListing(listing);

	};


	ctrl.editListing = function(id){
		// ctrl.listing_update_btn = "Updating";
		ctrl.listingsSrv.editListing(ctrl.listing, ctrl.listing.id)
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

