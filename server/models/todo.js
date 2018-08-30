const mongoose = require('mongoose')

var Todo = mongoose.model('Todo', {
    text:{
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    compeletedAt:{
        type: Number,
        default: null
    }
})

module.exports = {Todo}