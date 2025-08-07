import React from 'react';
import './itemcard.css';
import { Link } from 'react-router-dom';
import samplePic from '../../assets/samplePic.jpg'


export default function ItemCard({item}) {
    const firstSize = item.sizes[0];

    return(
    <div className='item-card'>
        <Link to={`/home_delicacies/product/${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
        <img src={samplePic} alt={item.name} />
        <h3>{item.name}</h3>
       <div className='tagline'>
        <p>Price:</p><h4>{firstSize.price}/-</h4><p>for</p><h4> {firstSize.size}</h4>
        </div>
        </Link>
    </div>
    );
}