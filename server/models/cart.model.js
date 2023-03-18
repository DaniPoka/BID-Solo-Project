const cartSchema = mongoose.Schema({
    product: [itemSchema],
    quantity: {
        type: Number,
        default: 0,
    },
    total: {
        type: Number,
        default: 0,
    },
    __v: { type: Number, select: false },
});

exports.Cart = mongoose.model("Cart", cartSchema);
