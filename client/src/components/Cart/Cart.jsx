import React, { useState } from 'react';
import { useCart } from '../Context/DataContext';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';

export default function Cart({ onRemove, onUpdate }) {
    const { items } = useCart();
    const [cartItems, setCartItems] = useState(items);

    const handleQuantityChange = (event, item) => {
        const newCartItems = cartItems.map(cartItem => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: parseInt(event.target.value) };
            }
            return cartItem;
        });
        setCartItems(newCartItems);
        onUpdate(item.id, parseInt(event.target.value));
    };

    const handleRemove = (item) => {
        const newCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(newCartItems);
        onRemove(item.id);
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    }

    const handleUpdateQuantity = (item, quantity) => {
        const newCartItems = cartItems.map(cartItem => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: quantity };
            }
            return cartItem;
        });
        setCartItems(newCartItems);
        onUpdate(item.id, quantity);
    };

    return (
        <div className="container">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems?.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <Typography variant="subtitle1">{item.title}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle1">${item.price}</Typography>
                                </TableCell>
                                <TableCell>
                                    <div className="quantity">
                                        <Button size="small" variant="outlined" onClick={() => handleUpdateQuantity(item, item.quantity - 1)} disabled={item.quantity <= 1}>-</Button>
                                        <TextField type="number" variant="outlined" size="small" value={item.quantity} onChange={(e) => handleQuantityChange(e, item)} className="quantityInput" inputProps={{ min: 1 }} />
                                        <Button size="small" variant="outlined" onClick={() => handleUpdateQuantity(item, item.quantity + 1)}>+</Button>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Button size="small" variant="contained" color="error" className="removeButton" onClick={() => handleRemove(item)}>Remove</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="h6" className="totalPrice">Total Price: ${calculateTotalPrice()}</Typography>
        </div>
    );
};