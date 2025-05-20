import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './payment.css';

export default function Payment() {
    const { cartItems, totalPrice } = useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <div className='payment-container'>
                <h3>Your Cart is Empty</h3>
                <p>Please add items to your cart before proceeding to payment.</p>
            </div>
        );
    }

    return (
        <div className='payment-container'>
            <h2>Payment Details</h2>
            <div className='payment-form'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='name'>Name on Card</label>
                        <input type='text' id='name' name='name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cardNumber'>Card Number</label>
                        <input type='text' id='cardNumber' name='cardNumber' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='expiryDate'>Expiry Date</label>
                        <input type='text' id='expiryDate' name='expiryDate' placeholder='MM/YY' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cvv'>CVV</label>
                        <input type='text' id='cvv' name='cvv' required />
                    </div>
                    <button type='submit'>Pay Now</button>
                </form>
            </div>
            <div className='cart-summary'>
                <h3>Order Summary</h3>
                {cartItems.map(item => (
                    <div key={item.id} className='cart-item'>
                        <p>{item.name} ({item.size})</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: Rs {item.price * item.quantity}/-</p>
                    </div>
                ))}
                <h3>Total: Rs {totalPrice}/-</h3>
            </div>
        </div>
    );
}