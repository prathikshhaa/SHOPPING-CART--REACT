import React from 'react'
import { useState } from 'react'
import './card.css'
const pro=[
    {
        id:1,
        title:"CLASSIC CABLE KNIT TURTLE NECK SWEATER",
        brand:"ALLEN",
        image:"https://www.rareism.com/cdn/shop/files/ALLEN-OFF-WHITE0589HERO_900x.jpg?v=1691154440",
        price:2000,
    },
    {
        id:2,
        title:"STATEMENT SLEEVE SATIN TOP",
        brand:"Emm",
        image:"https://www.rareism.com/cdn/shop/products/IMG_0037_7910c17b-2a0a-48d3-b861-0980efcdf127_1452x1799.jpg?v=1655027894",
        price:1500,
    },
    {
        id:3,
        title:"Colourblocked Shirt Midi Dress (XS)",
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSCh4b4JuzhbbW_EtnRRkn-aE4uXmgpkOe6DglsgC3sMsUN_FDfkby0oxAsVXAxK9GNqcdDQJ9Dj2JAmkMd0-LO3IyZmTcUaj0oM4N-efkqldcEBKzgCDhRwQ&usqp=CAE",
        brand:"Debacco",
        price:1000,
    }
]
export default function ClothesForWomen() {
    const [quan,setQuan]=useState(0);
    const inc=()=>{
        setQuan(quan+1);
    };
    const dec=()=>{
        if(quan>=1)
        setQuan(quan-1);
    };
    const fun =()=>{
        alert('Added to wishlist');
    };
  return (
    <>
    <div className='box-1'>
    {
        pro.map((item)=>(
            <div className='category' >
            <h3>{item.title}</h3>
            <img src={item.image} alt='img'/>
            <h3>{item.brand}</h3>
            <h4>"₹"{item.price}</h4>
            <button className='btn-card' onClick={fun}>Add to Cart</button>
            <br></br>
            <button className='btn-card' onClick={inc}>+</button>
            <span>{quan}</span>
            <button className='btn-card' onClick={dec}>-</button>
            </div>  
             )
        )
    } 
  </div>
  </>
  )
}
