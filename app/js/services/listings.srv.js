app.service('listingsSrv',ListingsService);

function ListingsService($state,api){
	//dependencies
	this.api = api;
	this.state = $state;
	this.listings = [];
	var ctrl = this;

	ctrl.getListings = function(){
		var _this = this;
		return this.api.request('/listing',{},'GET')
		.then(function(res){
			//success promise
			console.log(res);
			_this.listingsSrv = res.data.listings;
			return res.data;
		},function(res){
			//error promise
			console.log(res);
			return;
		});
	};

	ctrl.getListing = function(listingId){
		return this.api.request('/listing/'+listingId,{},'GET');
	};

	ctrl.addListing = function(listing){
		var _this = this;
		console.log(listing);
		this.api.request('/listing',listing,'POST')
		.then(function(res){
			console.log(res);
			if(res.status === 200){
				//listing was added successfully
				_this.listings.push(res.data.listing);
				_this.state.go('dashboard');

			};
		});
	};

	ctrl.editListing = function(listing, listingId){
		console.log(listing);
		return this.api.request('/listing/'+listingId,listing,'PUT');
	};


	ctrl.deleteListing = function(listing, listingId){
		return this.api.request('/listing/'+listingId,{},'DEL');
	};

	ctrl.removeListing = function(listingId){
		for(var i =0;i<this.listings.length;i++){
			if(this.listings[i].id = listingId){
				splice
			};
		};
	};

	ctrl.updateListingList = function(listing, listingId){
		for(index in this.listings){
			if(this.listings[index].id == listingId){
				this.listings[index].name 				= listing.name;
				this.listings[index].url 				= listing.url;
				this.listings[index].email 				= listing.email;
				this.listings[index].phone 				= listing.phone;
				this.listings[index].country 			= listing.country;
				// this.listings[index].state 				= listing.state;
				this.listings[index].city 				= listing.city;
				this.listings[index].address 			= listing.address;
				// this.listings[index].category1 			= listing.category1;
				this.listings[index].category 			= listing.category;
				// this.listings[index].imagename 			= listing.imagename;
				// this.listings[index].image 				= listing.image;
				this.listings[index].description 		= listing.description;
				this.listings[index].user_id 			= listing.user_id;
				this.listings[index].live 				= listing.live;
				this.listings[index].approved 			= listing.approved;
			};
		};
	};


};

