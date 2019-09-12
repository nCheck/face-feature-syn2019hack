const express     =   require('express');
const router      =   express.Router();


const celebCtrl = require('../controller/celeb');
const fileCtrl = require('../controller/file');


// router.route('/customer')
//     .get( customerCtrl.getAllCustomer )
//     .post( customerCtrl.addCustomer )

// router.route('/customer/:customerId')
//     .get( customerCtrl.getCustomer )
//     .post( customerCtrl.updateCustomer )

// router.route('/customer/:customerId/delete')
//     .get( customerCtrl.deleteCustomer )


router.route('/load')
.get( celebCtrl.addCeleb )
.post( (req , res)=>{
    console.log(req.body);
    res.send({status:"success"});
})

router.route('/show')
.get( celebCtrl.getCeleb )
.post( (req , res)=>{
    console.log(req.body);
    res.send({status:"success"});
})

router.route('/clean')
.get( celebCtrl.deleteTrash )
.post( (req , res)=>{
    console.log(req.body);
    res.send({status:"success"});
})

router.route('/clean/:id')
.get( celebCtrl.deleteById )
.post( (req , res)=>{
    console.log(req.body);
    res.send({status:"success"});
})

    
router.route('/predict')
    .get(  )
    .post( celebCtrl.showResult )


router.route('/upload/:name/:gender')
    .get( (req , res) =>{
        res.render('upload');
    } )
    .post( fileCtrl.uploadFile )

router.route('/upload')
    .get( (req , res) =>{
        res.render('upload');
    } )
    .post( fileCtrl.uploadFile )






/*
To learn more about method chaining, refer:
https://medium.com/backticks-tildes/understanding-method-chaining-in-javascript-647a9004bd4f
*/

module.exports = router