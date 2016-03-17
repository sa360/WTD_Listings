app.controller('ContactCtrl',ContactCtrl);

function ContactCtrl($http, nodemailer, transporter, bodyParser){
	var ctrl = this;
	ctrl.$http = $http;
	var nodemailer = require('nodemailer');
	var transporter = nodemailer.createTransport();
	var bodyParser = require('body-parser')


 //sample code from: http://blog.ragingflame.co.za/2012/6/28/simple-form-handling-with-express-and-nodemailer
	// app.post('/contact', function (req, res) {
	//   var mailOpts, smtpTrans;
	//   //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
	//   smtpTrans = nodemailer.createTransport('SMTP', {
	//       service: 'Gmail',
	//       auth: {
	//           user: "suzanneadams360@gmail.com",
	//           pass: "?Fresh10Start10?" 
	//       }
	//   });
	//   //Mail options
	//   mailOpts = {
	//       from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
	//       to: 'contact@walkingtourdirectory.com',
	//       subject: 'Website contact form',
	//       text: req.body.message
	//   };
	//   smtpTrans.sendMail(mailOpts, function (error, response) {
	//       //Email not sent
	//       if (error) {
	//           res.render('contact', { title: 'WTD - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
	//       }
	//       //Yay!! Email sent
	//       else {
	//           res.render('contact', { title: 'WTD - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
	//       }
	//   });
	// });


// if(typeof msg !== 'undefined')
//   if(!!err)
//     div(class='msgbox err') #{msg}
//   else
//     div(class='msgbox success') #{msg}






 //    // Simple POST request example (passing data) :
 //    $http.post('/contact-form', data).
 //        success(function(data, status, headers, config) {
 //            // this callback will be called asynchronously when the response is available 
 //            			// $mdToast.show(
 //               //          $mdToast.simple()
 //               //              .content('Thanks for your message ' + data.contactName + ' You Rock!')
 //               //              .position($scope.getToastPosition())
 //               //              .hideDelay(5000)
 //               //      );
 
 //        }).
 //        error(function(data, status, headers, config) {
 //            // called asynchronously if an error occurs or server returns response with an error status.
 //        });

 
	// /**
	//  * Send an email when the contact from is submitted
	//  */
	// exports.sendMail = function(req, res) {
	 
	//     var data = req.body;
	 
	//     transporter.sendMail({
	//         from: data.contactEmail,
	//         to: 'contact@walkingtourdirectory.com',
	//         subject: 'CF Message from ' + data.contactName,
	//         text: data.contactMsg
	//     });
	 
	//     res.json(data);
	// };


};