import React from "react";
import sebet from "../../main/sebet.svg";
import { Link } from "react-router-dom";
import {AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart";


export default function Posts({posts,loading}){
    if(loading){
        return <h2>Loading </h2>
    }
   

return(
    <>
                <section className="main">
            
         <section >
                     <div className="main-content">
                         <div className="xett"></div>
                         <h1>Çox Satılanlar</h1>
                         <div className="xett"></div>
                       
                     </div>
                     <div className="cards">
 {posts
 .map(item=>(
  <div className="card" key={item.id} >
  <div className="card-img">
      <img alt="img" className="cardi" src={item.book_img} />
      <div >
          <AiFillHeart className="heart" onClick={(e)=>{
  e.target.classList.toggle("heart-color")
          }} />
      </div>
  </div>
  <Link to="product" >
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


    </>
)
}