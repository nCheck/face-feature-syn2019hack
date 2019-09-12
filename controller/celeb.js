const mongoose = require('mongoose');
const Celeb = mongoose.model('Celeb');

const data = require('../data');

module.exports.addCeleb = (req , res) =>{

    Celeb.insertMany( data , (err , doc)=>{

        if (err){
            res.send({ status : "error" , data : err });
        }
        else{
            res.send( { status : "success" } );
        }

    } )

}


module.exports.getCeleb = (req , res) =>{

    Celeb.find( {} , (err , doc)=>{

        if (err){
            res.send({ status : "error" , data : err });
        }
        else{
            res.send( { status : "success" , data : doc } );
        }

    } )

}

module.exports.deleteAll = (req , res) =>{

    Celeb.remove( {} , (err , doc)=>{

        if (err){
            res.send({ status : "error" , data : err });
        }
        else{
            res.send( { status : "success" , data : doc } );
        }

    } )

}

module.exports.executeQuery = ( req , res ) =>{

    let query = req.body;
    console.log(query);
    for( var q in query ){
        query[q] = parseInt(query[q]);
    }
    Celeb.find( query, { folder_name: 1 , image_name : 1 } , (err , doc)=>{

        if (err){
            res.send({ status : "error" , data : err });
        }
        else{
            res.send( { status : "success" , data : doc } );
        }

    } )

}

var nlp = require('./nlp').getNlp;

module.exports.showResult = ( req , res ) =>{

    let query = req.body;
    console.log(query);

    // let txt = query['nlp'];

    // query = nlp(txt)

    delete query['nlp'];

    // console.log('new Query', query, txt);

    for( var q in query ){
        query[q] = parseInt(query[q]);
    }

    Celeb.find( query, { folder_name: 1 , image_name : 1 } , (err , doc)=>{

        if (err){
            res.send({ status : "error" , data : err });
        }
        else{
            // console.log(doc)
            res.render( 'images' , { data : doc } );
        }

    } )

}


module.exports.deleteTrash = (req , res)=>{

    let query = {folder_name:"Audrey Hepburn"}

    Celeb.deleteMany(query, (err,doc)=>{

        res.send(doc);

    })

}

module.exports.deleteById = ( req , res ) =>{


    Celeb.deleteOne( {_id : req.params.id} , (err , doc)=>{

        res.send(doc);

    } );

}