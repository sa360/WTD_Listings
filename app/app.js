'use strict';

var app = angular.module('listingsApp',[
		'ui.router',
	]);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'partials/home.html',
		controller:'FrontCtrl as ctrl',
	})
	.state('listings',{
		url:'/listings',
		templateUrl:'partials/listings.html',
		controller:'ListingsCtrl as ctrl',
		resolve: {
			// listings: function(api, listingSrv) {
			// 	return 'hello world'
			// }
		}
	})

	.state('dashboard',{
		url:'/dashboard',
		controller:'ListingsCtrl as ctrl',
		templateUrl:'partials/admin_dashboard.html',
		resolve: {
			listings: function(listingsSrv) {
				// make an api call here to get listings, return that value
				// return api.request('/listing',{},'GET')
				return listingsSrv.getListings();
				// return 'hello';
			}
		}
	})

	.state('adminadd',{
		url:'/adminadd',
		controller:'ListingCtrl as ctrl',
		templateUrl:'partials/admin_add.html'
	})

	.state('adminedit',{
		url:'/adminedit/:listingId',
		controller:'ListingCtrl as ctrl',
		templateUrl:'partials/admin_edit.html',
			listings: function(listingsSrv){
				return listingSrv.getListing();
			}
	});

});