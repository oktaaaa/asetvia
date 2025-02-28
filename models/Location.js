const mongoose = require('mongoose')
const LocationSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Location', LocationSchema)