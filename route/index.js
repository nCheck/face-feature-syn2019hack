const express     =   require('express');
const router      =   express.Router();

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

router.route('/')
.get( (req , res) =>{
    
    res.render('index')
    
})

router.route('/images')
    .get( (req , res) =>{
     
        res.render('images')
        
    })




module.exports = router;