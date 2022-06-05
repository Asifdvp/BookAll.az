import React from "react";
import a_one from "../../main/azerbaycan/1.jpg";
import two from "../../main/azerbaycan/2.png";
import three from "../../main/azerbaycan/3.jpg";
import four from "../../main/azerbaycan/4.jpg";
import five from "../../main/azerbaycan/5.png";
import sebet from "../../main/sebet.svg";
import { Link } from "react-router-dom";
import {AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart";

export default class Tr extends React.Component{
    
    state = {
        tr: [],
    }

    getData = () => {
        fetch('http://localhost:3000/tr/')
            .then(res => res.json())
            .then(data => this.setState({ tr: data }))
    }


    componentDidMount() {
        this.getData();
    }
    render(){

        return(
            <section className="main">
            
        <section >
                    <div className="main-content">
                        <div className="xett"></div>
                        <h1>Azərbaycan Nəşrləri</h1>
                        <div className="xett"></div>
                       
                    </div>
                    <div className="cards">
{this.state.tr
.map(item=>(
 <div className="card">
 <div className="card-img">
     <img alt="img" className="cardi" src={a_one} />
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