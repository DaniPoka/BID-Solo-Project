const CartController = require('../controllers/cart.controller');
module.exports = function(app){
    app.post('/api/cart', CartController.createCart);
    app.get('/api/cart', CartController.getAllCartProduct);
    app.put('/api/cart/:id', CartController.updateCartProduct);
}
