import React from "react";
import sebet from "../../main/sebet.svg";
import { Link } from "react-router-dom";
import {AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart";
import store from "../../redux/store";
import Public from "./public";
import "./All.css"
import axios from "axios"
export default class All extends React.Component{
    
    state = {
        all:[]
    }

getData =  () =>{
 axios.get("http://localhost:3000/aze")
.then(res=>this.setState({all:res.data}));

// fetch("http://localhost:3000/aze")
// .then(res=>res.json())
// .data(data=>console.log(data))
}
  componentDidMount() { 
      this.getData()
    // const state =store.getState();
    // this.setState({all:state.publics[0]})
      store.subscribe(()=>{
          const state = store.getState();
          this.setState({all:state.nesr[0]})   
      })
    
           
    }
    addToFavorite(e) {

        e.target.classList.toggle("heart-color")
    }
    render(){
        return( <section className="all-section"> 
           
             <Public className="all-public"/>   
            <section className="main">
             
        <section >
                    <div className="main-content">
                        <div className="xett"></div>
                        <h1> Nəşrlər</h1>
                        <div className="xett"></div>
                       
                    </div>
          
         
                    <div className="cards" id="public_card">
 {this.state.all.length ?
 <>
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
))}  </>
  :
<p className="loading">Məlumatlar Yüklənir............</p>


}
                    </div>
              
                </section>
  
  
  
  
   
</section>
</section>
            
        )
    }
}