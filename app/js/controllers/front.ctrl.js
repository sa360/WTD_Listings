app.controller('FrontCtrl',FrontCtrl);

function FrontCtrl($http,$location, $stateParams,api,listingsSrv){
	var ctrl = this;
	ctrl.listingsSrv = listingsSrv;
	// ctrl.$location = $location;
	ctrl.$http = $http;



};