var express = require('express');
var db = require('./../models/db');
var router = express.Router();

router.get('/reg', function(request, response){
	response.render("registration/reg");
});

router.post('/', function(request, response){
    var user = {
		username: request.body.username,
        password: request.body.password,
        conpassword: request.body.conpassword,
        email: request.body.email,
        phonenumber: request.body.phone,
        type: request.body.type
        
	};
});
module.exports = router;