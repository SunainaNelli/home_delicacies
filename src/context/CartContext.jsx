import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id && cartItem.size === item.size);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id && cartItem.size === item.size
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity }];
            }
        });
    };

    const removeItemFromCart = (itemId, size, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === itemId && cartItem.size === size);
            if (!existingItem) {
                return prevItems; // Item not found, return the previous state
            }
            if (existingItem.quantity <= quantity) {
                return prevItems.filter(cartItem => !(cartItem.id === itemId && cartItem.size === size));
            } else {
                return prevItems.map(cartItem =>
                    cartItem.id === itemId && cartItem.size === size
                        ? { ...cartItem, quantity: cartItem.quantity - quantity }
                        : cartItem
                );
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};