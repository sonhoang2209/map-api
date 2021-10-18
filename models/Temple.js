const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    lat:{
        type: Number,
        required:true
    },
    lng:{
        type: Number,
        required:true
    },
    type:{
        type: Number,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    introduction:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('map_temples', PostSchema);