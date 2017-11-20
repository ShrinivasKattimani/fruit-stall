const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Fruit = require('../models/fruit');

// Connection string
// User name: userShrinivas
// Password: pwdShrinivas
const db = "mongodb://userShrinivas:pwdShrinivas@ds113136.mlab.com:13136/fruitstall";

// To avoid the errors
mongoose.Promise = global.Promise;

// Connect to DB.If any errors, console.
mongoose.connect(db,{
        useMongoClient: true
    },
    function(err){
        if(err){
            console.log(err)
        }
    }
);

// API that returns list of all the fruits.
router.get('/fruits', function(req, resp){
    console.log('Get all the fruits');
    Fruit.find({})
    .exec(function(error, fruits){
        if(error){
            console.log(error);
        }
        else{
            resp.json(fruits);
        }
    })
});

// API that returns a fruit based on the ID passed.
router.get('/fruit/:id', function(req, resp){
    console.log('Get fruit by ID');
    Fruit.findById(req.params.id)
    .exec(function(error, fruits){
        if(error){
            console.log(error);
        }
        else{
            resp.json(fruits);
        }
    })
});

// API that adds a new fruit to the DB.
router.post('/fruit', function(req, resp){
    console.log('Inserting a new fruit');
    // create new fruit instance;
    var newFruit = new Fruit();
    // Capture all the values from request
    newFruit.name = req.body.name;
    newFruit.imageUrl = req.body.imageUrl;
    newFruit.price = req.body.price;
    // save the fruit.
    newFruit.save(function(err, insertedFruit){
        if(err){
            console.log("inserting new fruit Failed! "+ err);
        }
        else{
            resp.json(insertedFruit);
        }
    });
});

// API to update a fruit by it's ID.
router.put('/fruit/:id', function(req, resp){
    console.log('Updating a fruit');

    Fruit.findByIdAndUpdate(req.params.id,{
        $set: {
            name: req.body.name,
            imageUrl: req.body.imageUrl,
            price: req.body.price
        }
    },{
        new : true
    },function(err, updatedFruit){
        if(err){
            console.log('Updating fruit failed' + err)
        }
        else{
            resp.json(updatedFruit);
        }
    });
});

// API to delete a fruit by it's ID.
router.delete('/fruit/:id', function(req, resp){
    console.log('Deleting a fruit');

    Fruit.findByIdAndRemove(req.params.id, function(err, deletedFruit){
        if(err){
            resp.send('Deleting fruit failed' + err);
        }
        else{
            resp.json(deletedFruit);
        }
    });
});


module.exports = router;