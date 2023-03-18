const { Cart } = require("../models/cart.model");

module.exports.createCart = async (request, response) => {
    try {
        const cart = await Cart.create(request.body);
        response.json(cart);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updateCartProduct = async (request, response) => {
    try {
        const cart = await Cart.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(cart);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getCart = async (request, response) => {
    try {
        const cart = await Cart.findOne({_id:request.params.id})
        response.json(cart);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}