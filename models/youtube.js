const mongoose = require('mongoose');

const youtubeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    vid:{
        type: String,
        required: true
    },
    thumbnails:{
        default : {
            url: String,
        },
        medium : {
            url: String,
        },
    },
    publishTime:{
        type: String,
    }



})
module.exports = mongoose.model('Youtube', youtubeSchema);