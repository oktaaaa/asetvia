const mongoose = require('mongoose')
const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: true
    },
    genre:{
        type: Array,
    },
    type:{
        type: String,
        required: true
    },
    yearReleased: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    review:{
        type: String,
        
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
}


)