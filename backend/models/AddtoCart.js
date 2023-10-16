const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product', // Reference to the Product model
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

const CartItem = mongoose.model('CartItem', CartItemSchema);
module.exports = CartItem;