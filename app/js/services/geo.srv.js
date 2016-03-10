app.service('geoSrv',GeoService);

function GeoService($state,api){
	//dependencies
	this.api = api;
	this.state = $state;
	this.listings = [];
}







