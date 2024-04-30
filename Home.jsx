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
        brand:"EMM",
        image:"https://www.rareism.com/cdn/shop/products/IMG_0037_7910c17b-2a0a-48d3-b861-0980efcdf127_1452x1799.jpg?v=1655027894",
        price:1500,
    },
    {
        id:3,
        title:"Colourblocked Shirt Midi Dress (XS)",
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSCh4b4JuzhbbW_EtnRRkn-aE4uXmgpkOe6DglsgC3sMsUN_FDfkby0oxAsVXAxK9GNqcdDQJ9Dj2JAmkMd0-LO3IyZmTcUaj0oM4N-efkqldcEBKzgCDhRwQ&usqp=CAE",
        brand:"DEBACCO",
        price:1000,
    },
    {
        id:1,
        title:"FLORAL PRINT SHIRT",
        brand:"LILIUM",
        image:"https://thehouseofrare.com/cdn/shop/products/HERO-IMG_0028-CC_1452x1799.jpg?v=1699271463",
        price:1500,
    },
    {
        id:2,
        title:"ILLUSIVE GEOMETRIC PRINT SHIRT",
        brand:"HEXA",
        image:"https://thehouseofrare.com/cdn/shop/products/DSC_0622_900x.jpg?v=1663778205",
        price:2000,
    },
    {
        id:3,
        title:"Plain Shirt With Mandarin Collar - Pista ",
        brand:"AUSTIN",
        image:"https://poe.net.in/cdn/shop/files/IMG_3677_e2e5dd0e-b8e0-4216-bb4e-8774ef417096_3000x.jpg?v=1700483242",
        price:1500,
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
