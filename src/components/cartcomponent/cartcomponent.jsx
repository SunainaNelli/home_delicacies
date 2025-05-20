import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { CartContext } from '../../context/CartContext';
import './cartcomponent.css';

export default function CartComponent({ item }) {
    const { addItemToCart } = useContext(CartContext);
    const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleSizeChange = (event) => {
        const size = event.target.value;
        const selected = item.sizes.find(s => s.size === size);
        setSelectedSize(selected);
    };

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            return newQuantity > 0 ? newQuantity : 1; 
        });
    };

    const handleBuyItNow = () => {
        addItemToCart({ ...item, ...selectedSize }, quantity);
        navigate('/payment');
    };

    return (
        <div className='cart-component'>
            <p>Size</p>
            <select onChange={handleSizeChange} value={selectedSize.size}>
                {item.sizes.map(size => (
                    <option key={size.size} value={size.size}>{size.size}</option>
                ))}
            </select>
            <p>Quantity</p>
            <div className='add-remove-div'>
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <button className='button-addcart' 
                    onClick={() => addItemToCart({ ...item, ...selectedSize }, quantity)}>Add to Cart</button>
            <button className='button-buynow'
                    onClick={handleBuyItNow}>Buy it now</button>
            <h3>Shipping and Delivery details:</h3>
        </div>
    );
}