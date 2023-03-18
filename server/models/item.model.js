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
    quantity : {
        type: Number
    },
    fav : {
        type: Boolean
    }
    

},);

module.exports.Item = mongoose.model('Item', ItemSchema);



