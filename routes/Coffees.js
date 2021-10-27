const express = require('express');
const router = express.Router();
const Coffee = require('../models/Coffee')

router.get('/' , async (req , res) => {
    try{
        const coffees = await Coffee.find();
        res.json(coffees);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.get('/:coffeeId' , async (req , res) => {
    try{
        const coffee = await Coffee.findById(req.params.coffeeId);
        res.json( coffee );
    }catch( err ) {
        res.json({message: err});
    }
    

});

router.post('/add' , async (req , res) => {
    const coffee = new Coffee({
        title: req.body.nameTemple,
        introduction: req.body.lat,
        price: req.body.lng,
        type: req.body.type,
        image: req.body.image,
    });

    try{
        const saveCoffee = await Coffee.save();
        res.json(saveCoffee);
    }catch( err ) {
        res.json({message: err});
    }
});

router.delete('/del/:coffeeId' , async (req , res) => {
    
    try{
        const removeCoffees = await Coffee.remove({_id: req.params.coffeeId})
        res.json(removeCoffees);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.patch('/upd/:coffeeId' , async (req , res) => {
    try{
        const updateCoffee = await coffee.updateOne(
            {_id: req.params.coffeeId}, 
            { $set: {
                title: req.body.nameTemple,
                introduction: req.body.lat,
                price: req.body.lng,
                type: req.body.type,
                image: req.body.image,
            }} 
        );
        res.json(updateCoffee);
    }
    catch( err ) {
        res.json({message: err});
    }
});

module.exports = router;

