
import './App.css';
import Carousel from './Carousel/Carousel';
import Footer from './Footer.js/Footer';
import Header from './Header/Header';
import Icon from './Icon';
import Login from './Login/Login';
import Main from "./main/Main"
import Product from './Product/Product';
import Search from './Search/Search';
function App() {
  return (
    <>
    <Header/>


    <Carousel/> 
     <Main/>
     <Icon />
{/* <Search/> */}
{/* <Login/> */}
    {/* <Product/> */}
    <Footer/>
    </>
  );
}

export default App;
