app.controller('ListingsCtrl',ListingsCtrl);

function ListingsCtrl($http, $scope, api,listingsSrv, listings, $state){
	var ctrl = this;
	ctrl.listingsSrv = listingsSrv;
	ctrl.$http = $http;
	ctrl.$state = $state;

	ctrl.listings = listings;
	ctrl.listing_edit_btn = 'Edit Listing';
	ctrl.listing_delete_btn = 'Delete Listing';
	
	ctrl.country = '';
	ctrl.city = '';
	ctrl.category = '';

	// $scope.$watch(function(){
 //    	return listingsSrv.listings;
	// }, function (newValue) {
	//     ctrl.listings = listingsSrv.listings;
	// });
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

};