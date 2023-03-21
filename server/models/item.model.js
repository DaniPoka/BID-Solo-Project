const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [3, 'The minimun is 3'],
        
    },
    brand: {
        type: String,
        minlength: [3, 'The minimun is 3'],
        
    },
    imgurl: {

    },
    description: {
        type: String,
        minlength: [10, 'The minimun is 10'],
        
    },
    category: {
        type: String,        
    },
    price: {
        type: Number,        
    },

}, { timestamps: true });

module.exports.Item = mongoose.model('Item', ItemSchema);



