app.service('api', ApiService);

function ApiService($http) {
	this.http = $http;
	var ctrl = this;
  	this.BASE_URL = 'http://52.50.174.204/api';


  	ctrl.request = function(endpoint, data, method){
  		if(method == 'POST'){
		    data = JSON.stringify(data);
		    return this.http.post(this.BASE_URL + endpoint,data)
	  	}
	  	else if(method == 'GET'){
		    data = this.formatGetData(data);
		    return this.http.get(this.BASE_URL + endpoint+data);
	  	}
	  	else if(method == 'PUT'){
		    data = JSON.stringify(data);
		    return this.http.put(this.BASE_URL + endpoint,data);
	 		}
	 	else if(method == 'DEL'){
	    	return this.http.delete(this.BASE_URL + endpoint);
	  	}
	};


	ctrl.formatGetData = function(data){
		var data_string = '?';
		for(item in data){
		    if(data_string == '?'){
		      data_string += item+'='+encodeURIComponent(data[item]);
		    }
		    else{
		      data_string +='&'+item+'='+encodeURIComponent(data[item]);
		    }
		}
		if(data_string == '?'){return '';}
			return data_string;
	};

	//helper function for serializing data for the api
	ctrl.serializeData = function(data){
	    // If this is not an object, defer to native stringification.
	    if ( ! angular.isObject( data ) ) { 
	        return( ( data == null ) ? "" : data.toString() ); 
	    }
	    var buffer = [];
	    // Serialize each key in the object.
	    for ( var name in data ) { 
	        if ( ! data.hasOwnProperty( name ) ) { 
	            continue; 
	        }
	        var value = data[ name ];
	        buffer.push(
	            encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )
	        ); 
	    }
	    // Serialize the buffer and clean it up for transportation.
	    var source = buffer.join( "&" ).replace( /%20/g, "+" ); 
	    return(source); 
	};

};