app.service('UsersSrv',UsersService);

function UsersService($state,api){
	//dependencies
	this.api = api;
	this.state = $state;
	this.users = [];
	this.user = null;
	var ctrl = this;

	ctrl.setUser = function(user){
		var ctrl = this;
		ctrl.user = user;
		localStorage.saveduser = JSON.stringify(user);
		console.log('User Was SET!');
	}

	ctrl.returnUser = function(){
		var ctrl = this;
		if(ctrl.user == null){
			if(localStorage.saveduser != undefined){
				ctrl.user = JSON.parse(localStorage.saveduser)
			}
		}
		return ctrl.user;
	}
	ctrl.getUsers = function(){
		var _this = this;
		return this.api.request('/users',{},'GET')
		.then(function(res){
			//success promise
			console.log(res);
			_this.usersSrv = res.data.users;
			return res.data.users;
		},function(res){
			//error promise
			console.log(res);
			return;
		});
	};

	ctrl.getUser = function(userId){
		return this.api.request('/user/'+userId,{},'GET');
	};

	ctrl.editUser = function(user, userId){
		console.log(user);
		return this.api.request('/user/'+userId,user,'PUT');
	};


	ctrl.deleteUser = function(user, userId){
		return this.api.request('/user/'+userId,{},'DEL');
	};

	ctrl.removeUser = function(userId){
		for(var i =0;i<this.users.length;i++){
			if(this.users[i].id = userId){
				splice
			};
		};
	};

	ctrl.updateUserList = function(user, userId){
		for(index in this.users){
			if(this.users[index].id == userId){
				this.users[index].fname 				= user.fname;
				this.users[index].lname 				= user.lname;
				this.users[index].email 				= user.email;
				this.users[index].password 				= user.password;
				this.users[index].listing_ids			= user.listing_ids;

			};
		};
	};


};