var express 	= require('express');
var models	 	= require('./models');
var bodyParser  = require('body-parser');
var authentication = require("./middleware/auth");
var nodemailer	= require('nodemailer');
var app 		= express();

try{
	var env = require('./config/env_dev');
}
catch(err){
	var env = require('./config/env_prod');
}

//app config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './../app/'));

//route config
var listing_routes = require('./routes/listing');
var auth_routes = require('./routes/auth');
var user_routes = require('./routes/users');
var contact_routes = require('./routes/contact');

//route set
app.use('/api/listing',listing_routes);
app.use('/api/auth',auth_routes);
app.use('/api/users', user_routes);
app.use('/api/contact', contact_routes);



// create hardcoded data
// var listing = {
// 	name: "listing",
//     url: "url",
//     email: "email",
//     phone: "6471111234",
//     address: "address",
//     description: "Description",
//     user_id: 1,
//     live: true,
//     approved: true
// };
// models.Listing.create(listing).then (function(listings){
// 	console.log('listing created!: ' + listings);
// });

// models.Listing.findAll().then(function(listings){
// 	console.log(listings);
// });


//start server and database
models.sequelize.sync().then(function(){
	app.listen(env.port,function(){
		console.log('Listening on '+env.host+':'+env.port);
		console.log('Stop Server With CTRL + C');
	});
});