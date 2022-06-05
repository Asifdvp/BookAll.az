import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Carousel from './Carousel/Carousel';
import About from './about/About';
import Footer from './Footer.js/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Main from "./main/Main"
import Product from './Product/Product';
import Search from './Search/Search';
import Sebet from './Sebet/Sebet';
import Sign from './Sign/Sign';
import Elan from './User/Elan';
import Hesab from './User/hesab';
import Sifaris from './User/Sifaris';
import User from './User/User';
import Yeni from './User/yeni';
import Aze from './Components/puplications/Aze';
import Tr from './Components/puplications/Tr';
import En from './Components/puplications/En';
import Best from './Components/Best/Best';

function App() {
  return (
    <>
    <Header/>
   

<Routes>
<Route path='/login' element = {<Login/>}/> 
<Route path='/best' element = {<Best/>}/> 
<Route path='/aze' element = {<Aze/>}/> 
<Route path='/tr' element = {<Tr/>}/> 
<Route path='/eng' element = {<En/>}/> 
<Route path='/about' element = {<About/>}/> 
<Route path='/sign' element = {<Sign/>}/> 
<Route path='/product' element = {<Product/>}/>
<Route path='/aze/product' element = {<Product/>}/>
<Route path='/tr/product' element = {<Product/>}/>
<Route path='/eng/product' element = {<Product/>}/>
<Route path='/best/product' element = {<Product/>}/>
<Route path='/search' element = {<Search/>}/>
<Route path='/sebet' element = {<Sebet/>}/>
<Route path='/user' element = {<User/>}/>
<Route path='/elan' element = {<Elan/>}/>
<Route path='/sifaris' element={
  <>
<Sifaris/>


</>
}/>

<Route path='/yeni' element = {<Yeni/>}/>
<Route path='/hesab' element = {<Hesab/>}/>
<Route path='/' element= { 
<>
<Carousel/>
<Main/>

</>
}   />
  </Routes>
    <Footer/>
    </>
  );
}

export default App;
