import React from "react";
import sebet from "../../main/sebet.svg";
import { Link } from "react-router-dom";
import {AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart";
import store from "../../redux/store";

export default class All extends React.Component{
    
    state = {
        all: [],
    }



    componentDidMount() {
       store.subscribe(()=>{
           const state =store.getState();
           this.setState({all:state.nesr[0]},()=>{
               console.log(this.state.all.length)    
           })
       })
    }
    addToFavorite(e) {

        e.target.classList.toggle("heart-color")
    }
    render(){
        return(     
            <section className="main">
            
        <section >
                    <div className="main-content">
                        <div className="xett"></div>
                        <h1> Nəşrləri</h1>
                        <div className="xett"></div>
                       
                    </div>
                    
                    <div className="cards">

{this.state.all
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
  
  
  
  
   
</section>

            
        )
    }
}