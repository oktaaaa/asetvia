const mongoose = require('mongoose')
const SkincareSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    expiredYear: {
        type: Date,
        required: true
    },
    stock:  {
        type: Number,
        required: true
    },
    
    position: {
        type: String,
        required: true
    },
    review:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Skincare', SkincareSchema)