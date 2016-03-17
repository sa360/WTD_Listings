(function(){
	'use-strict';

	angular
		.module('listingsApp')
		.controller('AuthCtrl',AuthCtrl);

	AuthCtrl.$inject = ['$http', '$state','UsersSrv'];

	function AuthCtrl($http, $state,UsersSrv){
		var ctrl = this;

		//buttons
		ctrl.register_btn = 'Sign Up';
		ctrl.auth_btn = "Log In";

		//Functions
		ctrl.register = register;
		ctrl.authenticate = authenticate;
		ctrl.$state = $state;
		

		function register(){
			//check passwords
			if(ctrl.password == ctrl.repassword){
				var user = {
					email:ctrl.email,
					password:ctrl.password,
					fname: ctrl.fname,
					lname: ctrl.lname
				}
				user = JSON.stringify(user);
				$http.post('/api/auth/register',user)
				.then(function(res){
					console.log(res);
					ctrl.register_btn = res.data.msg;
					ctrl.$state.go('dashboard');				})
			}
			else{
				ctrl.register_btn = "Passwords Don't Match";
			}
		}

		function authenticate(){
			var user = {
				email:ctrl.email,
				password:ctrl.password
			}

			user = JSON.stringify(user);
			$http.post('/api/auth/authenticate',user)
				.then(function(res){
					console.log(res);
					localStorage.loginEmail = ctrl.email;
					ctrl.auth_btn = res.data.msg;

					console.log('THE USER OBJECT');
					console.log(res);
					UsersSrv.setUser(res.data.user);
					ctrl.$state.go('dashboard');
				});
			
		}
	}
})();