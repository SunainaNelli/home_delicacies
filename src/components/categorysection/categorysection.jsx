import React from "react";
import ItemCard from "../card/itemcard";
import './categorysection.css';


export default function CategorySection({title, items}){
   
    return(
        <div className="category-section">
            <h2>{title}</h2>
            <div className="items-list">
                {items.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};