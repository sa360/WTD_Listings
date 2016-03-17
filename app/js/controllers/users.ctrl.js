app.controller('UsersCtrl',UsersCtrl);

function UsersCtrl($http, $location, $stateParams, api, users){
	var ctrl = this;
	ctrl.$http = $http;
	ctrl.$state = $state;
	ctrl.users = users;


	ctrl.user_edit_btn = 'Edit user';
	ctrl.user_delete_btn = 'Delete user';

console.log('controller loaded');

// getUsers();

	ctrl.getUsers = function(){
		$http.get('/api/users')
		.then(function(res){
			console.log(res);
		});
	}

		ctrl.editUser = function(id){
		var user = {
		    fname				: ctrl.users.fname,
		    lname				: ctrl.users.lname,
		    email				: ctrl.users.email,
		    password			: ctrl.users.password,
		    listing_ids			: ctrl.users.listing_ids

		}
		ctrl.usersSrv.edituser(user, ctrl.user.id)
		.then(function(res){
			ctrl.$location.path('/dashboard');
		});
	};

	ctrl.deleteUser = function(id){
		console.log(id);
		ctrl.usersSrv.deleteuser(ctrl.user, ctrl.user.id)
		.then(function(res) {
			console.log(res);
			// ctrl.getusers();
			ctrl.$location.path('/dashboard');
		});
	};

};