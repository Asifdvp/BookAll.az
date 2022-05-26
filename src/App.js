import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Carousel from './Carousel/Carousel';
import Footer from './Footer.js/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Main from "./main/Main"
import Product from './Product/Product';
import Search from './Search/Search';
import Sebet from './Sebet/Sebet';
import Sign from './Sign/Sign';

function App() {
  return (
    <>
    <Header/>
   

<Routes>
<Route path='/login' element={<Login/>}/> 
<Route path='/sign' element={<Sign/>}/> 
<Route path='/' element={ 
<>
<Carousel/>
<Main/>

</>
}   />



  </Routes>

  
   
   
   
    {/* <Carousel/> 
     <Main/> */}
{/*  
   <Sebet/> */}
{/* <Search/> */}
{/* <Login/> */}
    {/* <Product/> */}
    <Footer/>
    </>
  );
}

export default App;
