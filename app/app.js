'use strict';

var app = angular.module('listingsApp',[
		'ui.router', 'ngMessages', 'angular-jwt'
	]);

// injected this so front and back end can have diff backgrounds
app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        // $state.transitionTo('home');
}]);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home',{
		url:'/',
		views: {
            '': { templateUrl: 'partials/home.html',
            	controller:'FrontCtrl as ctrl',
            	resolve: {
					listings: function(listingsSrv) {
					// make an api call to get listings, return that value
					return listingsSrv.getListings();
					}
				}
			},
            'nav@home': { templateUrl: 'partials/topbar_front.html'},	
		},
		data: {
	        		bodyClass: 'bgfront'
    		}
	})
	.state('listings',{
		url:'/listings',
		views: {
            '': { templateUrl: 'partials/listings.html',
            	controller:'ListingsCtrl as ctrl',
            	resolve: {
					listings: function(listingsSrv) {
					return listingsSrv.getListings();
					}
				}
			},
            'nav@listings': { templateUrl: 'partials/topbar_front.html'},
		},
		data: {
	        		bodyClass: 'bgfront'
    		}
	})

	.state('itemdetail',{
		url:'/itemdetail/:listingId',
		views: {
            '': { 
				controller:'ListingCtrl as ctrl',
				templateUrl:'partials/item_detail.html'
				// resolve: {
				// 	listings: function(listingsSrv){
				// 		return listingsSrv.getListing();
				// 	}
				// }
			},
            'nav@itemdetail': { templateUrl: 'partials/topbar_front.html'},	
		},
		data: {
        	bodyClass: 'bgfront'
    	}
	})

	.state('welcome',{
		url:'/welcome',
		views: {
            '': { 
            	templateUrl: 'partials/welcome.html',
            	controller:'FrontCtrl as ctrl',
				resolve: {
					listings: function() {
					return null;
					}
				}
			},
            'nav@welcome': { templateUrl: 'partials/topbar_front.html'}	
		},
		data: {
	        bodyClass: 'bgfront'
    	}
	})

	.state('why',{
		url:'/why',
		views: {
            '': { 
            	templateUrl: 'partials/why.html',
            	controller:'FrontCtrl as ctrl',
            	resolve: {
					listings: function() {
					return null;
					}
				}
			},
            'nav@why': { templateUrl: 'partials/topbar_front.html'},	
		},
		data: {
	        bodyClass: 'bgfront'
    	},
	})

	.state('contact',{
		url:'/contact',
		views: {
            '': { 
            	templateUrl: 'partials/contact.html',
            	controller:'FrontCtrl as ctrl',
            	resolve: {
					listings: function() {
					return null;
					}
				}
			},
            'nav@contact': { templateUrl: 'partials/topbar_front.html'},	
		},
		data: {
	        bodyClass: 'bgfront'
    	},
	})

	.state('dashboard',{
		url:'/dashboard',
		views: {
			'': {
				templateUrl:'partials/admin_dashboard.html',
				controller:'ListingsCtrl as ctrl',
				resolve: {
						statecheck:function($state){
							if(localStorage.authToken == undefined){
								$state.go('auth');
							}
						},
						listings: function(listingsSrv) {
						// make an api call here to get listings, return that value
						// return api.request('/listing',{},'GET')
							if(localStorage.authToken != undefined){
								return listingsSrv.getListings();
							}
						// return 'hello';
						}
						
				},
			},
			'nav2@dashboard':{ templateUrl: 'partials/topbar_admin.html'},
		},
		// injected this so front and back end can have diff backgrounds
		data: {
        	bodyClass: 'bgadmin'
    	}
	})

	.state('adminadd',{
		url:'/adminadd',
		views: {
			'': {
				templateUrl:'partials/admin_add.html',
				controller:'ListingCtrl as ctrl',
				resolve: {
						statecheck:function($state){
							if(localStorage.authToken == undefined){
								$state.go('auth');
							}
						}
				}
			},
			'nav2@adminadd':{ templateUrl: 'partials/topbar_admin.html'},
		},
		data: {
        	bodyClass: 'bgadmin'
    	}
	})

	.state('adminedit',{
		url:'/adminedit/:listingId',
		views: {
			'': {
				templateUrl:'partials/admin_edit.html',
				controller:'ListingCtrl as ctrl',
				resolve: {
						statecheck:function($state){
							if(localStorage.authToken == undefined){
								$state.go('auth');
							}
						}

				//(duplication of listingctrl if stateparams, so deleted this as extra)
				// resolve: {
				// 	listings: function(listingsSrv){
				// 		return listingsSrv.getListing();
				// 	}
				// },
				}
			},
			'nav2@adminedit':{ templateUrl: 'partials/topbar_admin.html'},
		},
		data: {
        	bodyClass: 'bgadmin'
    	}
	})

	.state('adminusers',{
		url:'/adminusers',
		views: {
			'': {
				templateUrl:'partials/admin_users.html',
				controller:'UsersCtrl as ctrl',
				resolve: {
						statecheck:function($state){
							if(localStorage.authToken == undefined){
								$state.go('auth');
							}
						},
				},
			},
			'nav3@register':{ templateUrl: 'partials/topbar_admin.html'}
		},
		data: {
        	bodyClass: 'bgadmin'
    	}
	})

	.state('auth',{
		url:'/auth',
		views: {
			'': {
				templateUrl:'partials/auth.html',
				controller:'AuthCtrl as ctrl'
			},
			'nav3@auth':{ templateUrl: 'partials/topbar_login.html'}
		},
		data: {
        	bodyClass: 'bgfront'
    	}
	})

	.state('register',{
		url:'/register',
		views: {
			'': {
				templateUrl:'partials/register.html',
				controller:'AuthCtrl as ctrl',
			},
			'nav3@register':{ templateUrl: 'partials/topbar_login.html'},
		},
		data: {
        	bodyClass: 'bgfront'
    	}
	})

	$httpProvider.interceptors.push(function(jwtHelper){
		return {
			request:function(config){
				if(localStorage.authToken != undefined){
					config.headers.authentication = localStorage.authToken;
				}
				return config;
			},
			response:function(response){
				var auth_token = response.headers('authentication');
				if(auth_token){
					var decrypt_token = jwtHelper.decodeToken(auth_token);
					if(decrypt_token.email){
						localStorage.authToken = auth_token;
					}
					
				}
				return response;
			}
		}
	});

});