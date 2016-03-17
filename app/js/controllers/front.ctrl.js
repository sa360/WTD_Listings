app.controller('FrontCtrl',FrontCtrl);

function FrontCtrl($http, $scope, api,listingsSrv, listings, $state, $stateParams, optionsSrv){
	var ctrl = this;
	ctrl.listings = listings;
	ctrl.listingsSrv = listingsSrv;
	ctrl.optionsSrv = optionsSrv;
	ctrl.$http = $http;
	ctrl.$state = $state;

	ctrl.countries = ctrl.optionsSrv.countries;
	ctrl.cities = ctrl.optionsSrv.cities;
	ctrl.categories = ctrl.optionsSrv.categories;



	ctrl.getListings = function(){
		ctrl.$http.get('/listings').then(function(res) {
		ctrl.listings = res.data;
		console.log(ctrl.listings);
		});
	};

  	ctrl.curPage = 0;
	ctrl.listingsPerPage = 6;


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