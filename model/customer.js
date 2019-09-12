var mongoose = require('mongoose');
var Schema = mongoose.Schema


var custSchema = new Schema({
    
    customerId : {
        type : Number,
        default : 101
    } ,

    name : {
        type : String,
        default : "Gaurav Rai"
    } ,
    age : {
        type : Number,
        required : true
    },
    phoneNo : {
        type : Number,
        default : 9762622540
    },
    rating : {
        type : Number,
        default : 0
    }

});




module.exports = mongoose.model('Customer' , custSchema);