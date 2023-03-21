const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
    },
    imgurl: {

    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
    },
    stock: {
        type: Number
    },
    fav : {
        type: Boolean,
        default: false
    }
    

},);

module.exports.Item = mongoose.model('Item', ItemSchema);



