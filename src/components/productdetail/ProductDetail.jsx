import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PicklesContext } from '../../context/PicklesContext';
import samplePic from '../../assets/samplePic.jpg';
import './productDetail.css';
import CartComponent from '../cartcomponent/cartcomponent';
import CategorySection from '../categorysection/categorysection';


export default function ProductDetail() {
    const{ product } = useParams();
    const{ pickles, podi, snacks } = useContext(PicklesContext);


    const allProducts = [...pickles, ...podi, ...snacks];

    const item = allProducts.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === product);

    const [selectedSize, setSelectedSize] = useState(item ? item.sizes[0] : null);

    useEffect(() => {
        if (item) {
            setSelectedSize(item.sizes[0]);
        }   
    },[item]);

    if(!item) {
        return <div>Product not found</div>;
    }

    const category = pickles.includes(item) ? 'pickles' : podi.includes(item) ? 'podi' : 'snacks';

    const relatedProducts = allProducts.filter(p => {
        if (category === 'pickles') return !pickles.includes(p);
        if (category === 'podi') return !podi.includes(p);
        if (category === 'snacks') return !snacks.includes(p);
        return true;
    });

   
    return(
    <div>
        <h2 className='heading-product'>{item.name}</h2>
        <div className='product-detail-container'>
            <div className='product-detail-jar'>
                <img src={samplePic} alt={item.name} />
            </div>
            <div className='middle-div'>
                <div className='middle-caption'>
                    <h3>{item.name}</h3>
                    <p>Price: Rs {selectedSize.price}</p>
                    <p>Size: {selectedSize.size}</p>
                </div>
                <p>Description: {item.description}</p>
            </div>
            <div><CartComponent item={item} /></div>
        </div>    
        
        <CategorySection title='Our other Products' items={relatedProducts}/>
    </div>   
    );
}