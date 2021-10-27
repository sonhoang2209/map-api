const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    introduction:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    image:{
        type: string,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Coffee', PostSchema);