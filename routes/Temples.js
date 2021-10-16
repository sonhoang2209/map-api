const express = require('express');
const router = express.Router();
const Post = require('../models/Temple')


router.get('/' , async (req , res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.get('/:postId' , async (req , res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json( post );
    }catch( err ) {
        res.json({message: err});
    }
    

});

router.post('/add' , async (req , res) => {
    const post = new Post({
        name: req.body.name,
        lat: req.body.lat,
        lng: req.body.lng,
        type: req.body.type,
        address: req.body.address,
        introduction: req.body.introduction,
    });

    try{
        const savePost = await post.save();
        res.json(savePost);
    }catch( err ) {
        res.json({message: err});
    }
});

router.post('/del/:postId' , async (req , res) => {
    
    try{
        const removePosts = await Post.remove({_id: req.params.postId})
        res.json(removePosts);
    }
    catch( err ) {
        res.json({message: err});
    }
});

router.post('/upd/:postId' , async (req , res) => {
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId}, 
            { $set: {
                name:req.body.name ,
                lat: req.body.lat,
                lng: req.body.lng
            }} 
        );
        res.json(updatePost);
    }
    catch( err ) {
        res.json({message: err});
    }
});

module.exports = router;

