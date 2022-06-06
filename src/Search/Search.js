import React, { Component } from 'react';
import "./search.css";
import "../main/main.css";
import { Link } from "react-router-dom";
import {AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart";
import sebet from "./img/sebet.svg";

export default class Search extends Component{
    state = {
        aze: [],
    }

    getData = () => {
        fetch('http://localhost:3000/aze/')
            .then(res => res.json())
            .then(data => this.setState({ aze: data }))
    }


    componentDidMount() {
        this.getData();
    }
    addToFavorite(e) {

        e.target.classList.toggle("heart-color")
    }
    render(){
        return(
            <section className='searchBox'>

            {/* <div className='search-text'>Axtardığınız məhsul tapılmadı. Məhsul yoxdur və ya adı yanlış yazılmışdır...</div> */}
         <div className='search-all'>
             <div className='search-head'>
                 <p>5 Məhsul tapıldı...</p>
                 <div className='filter'>Qiymətə görə artan</div>
             </div>
             <section className="az">
    <div className="main-content">
        <div className="xett"></div>
        <h1>Nəticələr</h1>
        <div className="xett"></div>
      
    </div>
    <div className="cards">
{this.state.aze.filter(item=>item.id<6)
.map(item=>(
 <div className="card">
 <div className="card-img">
     <img alt="img" className="cardi" src={item.book_img} />
     <div >
         <AiFillHeart className="heart" onClick={this.addToFavorite} />
     </div>
 </div>
 <Link to="product">
     <div className="card-context">
         <p>
             <ul>
<li> Kitab adı:{item.book_name}  </li>
<li>   Yazar :{item.book_author}  </li>
<li>   Janr :{item.genre_name}  </li>
                 </ul>
             </p>
     </div>
 </Link>
 <div className="price">
   {item.book_price} AZN
     <img src={sebet} alt="sebet" />
 </div>

</div>
))}
                       
                    </div>
</section>
         </div>
            </section>
        )
    }
}