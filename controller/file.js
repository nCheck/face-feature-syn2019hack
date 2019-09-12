 
const mongoose = require('mongoose');
const request = require('request');
const Celeb = mongoose.model('Celeb');

var express=require("express");
const multer = require('multer');
const path = require('path');
var parser=require('body-parser');

var app    = express();
app.use(parser.urlencoded({extended:true}));
const fs=require('fs');

module.exports.uploadFile = (req , res) =>{
	var name = null, filename = Date.now()+'.jpg',
								destination = null
	var Male = 0;

    
                                
	const storage = multer.diskStorage({
	  destination: function(req, file, cb){
		name = req.body.file_name;
		destination = './public/data/'+name;
		console.log(name , filename , destination)
		if (!fs.existsSync(destination)){
			fs.mkdirSync(destination);
		}
	
		cb(null,destination);
		
	  },
	  filename: function(req, file, cb){
	    cb(null,filename);
	  }

	});
	var upload = multer({ storage: storage }).single('file'); //selected-file
	upload(req, res, (err) => {
		if(err){
			res.send('err ' + err);
		} else {
			if(req.file == undefined){
			//res.send('Error: No File Selected!');
			res.send({status:"no file"});
			} else {
			
			name = req.body.file_name;
			if ( req.body.gender == '1' ){
				Male = 1;
			}
				
            request.post({url:'http://localhost:5000/predict', form: {folder_name: name , image_name : filename }}, function(err,httpResponse,body){ 

				var respo = body.split(';');

				var query = {folder_name: name , image_name : filename, Male : Male}

				for ( var r of respo ){
					query[r] = 1

				}

				// Celeb.create( query , (err , doc) =>{

				// 	res.send({status:"success" , data : respo})

				// })

				res.send({status:"success" , data : respo});
                

             })

            

			}
		}
	});

}


module.exports.testUpload = (req , res) =>{
	console.log("test ",req.body)
	// console.log(req)
	var name = req.body.name, filename = Date.now()+'.jpg',
								destination = './public/test/'+req.body.file_name;
	var Male = 0;

    console.log(name , filename , destination)
                                
	const storage = multer.diskStorage({
	  destination: function(req , file , cb){
		// console.log(req.body, "isnide des");
		destination = './public/test/'+req.body.file_name;
		if (!fs.existsSync(destination)){
			fs.mkdirSync(destination);
		}
	    cb(null,destination);
	  },
	  filename: function(req, file, cb){
		console.log(req.body, "isnide filname");
	    cb(null,filename);
	  }

	});
	var upload = multer({ storage: storage }).single('file'); //selected-file
	upload(req, res, (err) => {
		if(err){
			res.send({ error: err});
		} else {
			if(req.file == undefined){
			//res.send('Error: No File Selected!');
			res.send({status:"no file"});
			} else {
            
			setTimeout(()=>{
				res.send({data : ['hello', 'bye' , 'demo']})
			}, 1500)

            

			}
		}
	});

}
