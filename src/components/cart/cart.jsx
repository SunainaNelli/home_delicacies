import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart.css';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className='cart-container'>
                <h3>Your Cart is Empty</h3>
                <p>Redirecting to home page...</p>
            </div>
        );
    }
    return (
        <div className='cart-container'>
            <div className='breadcrumb'>
               <Link to="/">Home</Link> / <Link to="/cart">Cart</Link>   
            </div>
            <h3>Your Cart</h3>
            <div>
                {cartItems.map(pickle => (
                    <div key={pickle.id} className='cart-card'>
                        <img src='src/assets/samplePic.jpg' alt={pickle.name} />
                        <div>
                            <h3>{pickle.name}</h3>
                            <p>Rs: {pickle.price}/-</p>
                            <p>Size: {pickle.size}</p>
                        </div>
                        <div className='add-remove-container'>
                            <div className='add-remove'>
                                <button onClick={() => removeItemFromCart(pickle.id, pickle.size)}>-</button>
                                <span>{pickle.quantity}</span>
                                <button onClick={() => addItemToCart(pickle, 1)}>+</button>
                            </div>
                            <button className='remove-button' onClick={() => removeItemFromCart(pickle.id, pickle.size, pickle.quantity)}>
                                <i className='far fa-trash-alt'></i>
                            </button>
                        </div>
                        <h3>Rs. {pickle.price * pickle.quantity}/-</h3>
                    </div>
                ))}
                <div className='cart-total'>
                    <h2>subTotal: Rs. {totalPrice}/-</h2>
                    <Link to='/payment'>
                        <button className='payment-button'>Click to proceed</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}