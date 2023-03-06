const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [3, 'The minimun is 3'],
        required: [true, 'This data is required']
    },
    brand: {
        type: String,
        minlength: [3, 'The minimun is 3'],
        required: [true, 'This data is required']
    },
    imgurl: {
        type: URL,
        required: [true]
    },
    description: {
        type: String,
        minlength: [10, 'The minimun is 10'],
        required: [true, 'This data is required']
    },
    moreinfo: {
        type: String,
        minlength: [10, 'The minimun is 10'],
        required: [false]
    }

}, { timestamps: true });

module.exports.Item = mongoose.model('Item', ItemSchema);



