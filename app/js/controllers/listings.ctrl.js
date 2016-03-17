app.controller('ListingsCtrl',ListingsCtrl);

function ListingsCtrl($http, $scope, api,listingsSrv, listings, $state, optionsSrv){
	var ctrl = this;

	///////Restrict access could go here if not in app.js////
	///////In this particular case, it would restrict both front&back since this controller controls both
	// if(localStorage.authToken == undefined){
	// 	$state.go('auth');
	// }
	ctrl.listingsSrv = listingsSrv;
	ctrl.optionsSrv = optionsSrv;
	ctrl.$http = $http;
	ctrl.$state = $state;

	ctrl.listings = listings;
	ctrl.listing_edit_btn = 'Edit Listing';
	ctrl.listing_delete_btn = 'Delete Listing';
	
	ctrl.country = '';
	ctrl.city = '';
	ctrl.category = '';

	ctrl.countries = ctrl.optionsSrv.countries;
	ctrl.cities = ctrl.optionsSrv.cities;
	ctrl.categories = ctrl.optionsSrv.categories;

	console.log(ctrl.listings);

	ctrl.getListings = function(){
		ctrl.$http.get('/listings').then(function(res) {
		ctrl.listings = res.data;
		console.log(ctrl.listings);
		});
	};

	ctrl.goToEdit = function(id){

		ctrl.$state.go('adminedit',{listingId:id});
		
	};
	ctrl.logout = function(){
		localStorage.removeItem('authToken');
		localStorage.removeItem('saveduser');
		ctrl.$state.go('auth');
	};

	ctrl.goToDetail = function(id){

		ctrl.$state.go('itemdetail',{listingId:id});
		
	};

	ctrl.clearFilter = function(){
		ctrl.search.$ = '';
		filter: ctrl.country = "";
		filter: ctrl.city = "";
		filter: ctrl.category = "";
	}


};