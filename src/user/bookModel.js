var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: {
        type: String,
        require: true
    }, 
    writer: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    }
});
module.exports = mongoose.model('books', bookSchema);