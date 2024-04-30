import React, { useState } from 'react';
import './Search.css';

export default function SearchBar() {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value);
    }

    const handleClick = (input) => {
        if (input.toLowerCase() === "men") {
            // Navigate to Men route
            window.location.href = "/ShirtsForMen"; // Alternatively, use history.push('/men') if using useHistory
        } 
        else if(input.toLowerCase() === "women")
            window.location.href = "/ClothesForWomen";
        else {
            // Handle other cases or show an error message
            console.log("Invalid search term");
        }
    }

    return (
        <div className='Searchbarcontainer'>
            <input
                placeholder='Type to search'
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            onChange={handleClick(input)}
        </div>
    );
}
