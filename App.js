import React from 'react';
import{Routes,Route,BrowserRouter} from "react-router-dom";
import Home from './Home';
import ShirtsForMen from './ShirtsForMen'
import Navbar from './Navbar';
import ClothesForWomen from './ClothesForWomen';
import SearchBar from './SearchBar';
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element ={<Home/>} path="/" />
        <Route element ={<ShirtsForMen/>} path="/ShirtsForMen" />
        <Route element ={<ClothesForWomen/>} path="/ClothesForWomen" />
        <Route element ={<SearchBar/>} path="/SearchBar" />
      </Routes>
    </BrowserRouter>
    </>
  )
}

