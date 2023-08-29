const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        minlength : 1,
        maxlength : 255,
    },
    completed : {
        type : Boolean,
        default : false
    },
    timestamp : {
        type : String,
        default : Date.now()
    }
});
module.exports = Task = mongoose.model('task', taskSchema);