import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PicklesContext } from '../../context/PicklesContext';
import { CartContext } from '../../context/CartContext';
import './home.css';
import CategorySection from '../categorysection/categorysection';

export default function Home() {
    const { pickles, podi, snacks} = useContext(PicklesContext);
    

    return (
        <div className='home-container'>
           
            <h1>Welcome to Home Delicacies</h1>
            <CategorySection title='Pickles' items={pickles}/>
            <CategorySection title='Podi' items={podi}/>
            <CategorySection title='Evening Snacks' items={snacks}/>
            
        </div>
    );
}