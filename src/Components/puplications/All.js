import React from "react";
import sebet from "../../main/sebet.svg";
import { Link } from "react-router-dom";
import {AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart";
import store from "../../redux/store";
import Public from "./public";
import "./All.css"

export default class All extends React.Component{
    
    state = {
        all: [  {
            id: 1,
            publication_name: "aze",
            genre_name: "roman",
            book_img:
              "https://static.insales-cdn.com/images/products/1/6776/544881272/2022-05-11-09-26-171652246777.jpg",
            book_name: "Malva",
            book_author: "Maxim Qorki",
            book_price: 3,
            nesr: "Azerbaycan",
          },
          {
            id: 2,
            publication_name: "aze",
            genre_name: "roman",
            book_img:
              "https://static.insales-cdn.com/images/products/1/2745/350628537/Qorki_Firildaqci_qapaq_Mini_Esas.png",
            book_name: "Firildaqci",
            book_author: "Maxim Qorki",
            book_price: 4,
            nesr: "Azerbaycan",
          },
          {
            id: 3,
            publication_name: "aze",
            genre_name: "roman",
            book_img:
              "https://pdfmiraz.s3.us-east-2.amazonaws.com/uploads/posts/2022-04/s1536839523.webp",
            book_name: "Ana",
            book_author: "Maxim Qorki",
            book_price: 5,
            nesr: "Azerbaycan",
          },
          {
            id: 4,
            publication_name: "aze",
            genre_name: "dedektiv",
            book_img:
              "https://altunkitab.az/storage/439/conversions/cinayet_ve_ceza-blade.jpg",
            book_name: "Cinayet ve Ceza",
            book_author: "Dostoyevski",
            book_price: 4,
            nesr: "Azerbaycan",
          },
          {
            id: 5,
            publication_name: "aze",
            genre_name: "dedektiv",
            book_img:
              "https://static.insales-cdn.com/images/products/1/5114/171070458/af34ffdff697961ab14ea5ef0a53ea4c.jpg",
            book_name: "Boyuk oyun",
            book_author: "Cingiz Abdullayev",
            book_price: 5,
            nesr: "Azerbaycan",
          },
          {
            id: 6,
            publication_name: "aze",
            genre_name: "dedektiv",
            book_img:
              "https://static.insales-cdn.com/images/products/1/7083/282418091/Xeste-ruhlar--uz-qabigi-cover_1559112417.jpg",
            book_name: "Xeste ruhlar",
            book_author: "Elxan Elatli",
            book_price: 3,
            nesr: "Azerbaycan",
          },
          {
            id: 7,
            publication_name: "aze",
            genre_name: "fantastika",
            book_img:
              "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525721625l/40056904._SY475_.jpg",
            book_name: "Qaranlig gunes",
            book_author: "Zaur Penehov",
            book_price: 3,
            nesr: "Azerbaycan",
          },
          {
            id: 8,
            publication_name: "aze",
            genre_name: "fantastika",
            book_img:
              "https://static.insales-cdn.com/images/products/1/5640/281769480/Persi_Cekson_2_qapaq.png",
            book_name: "Ecineler Denizi",
            book_author: "Rick Riordan",
            book_price: 5,
            nesr: "Azerbaycan",
          },
          {
            id: 9,
            publication_name: "aze",
            genre_name: "fantastika",
            book_img:
              "https://upload.wikimedia.org/wikipedia/az/thumb/4/4e/Coan_Roulinq._Harri_Potter_v%C9%99_F%C9%99ls%C9%99f%C9%99_Da%C5%9F%C4%B101.jpg/235px-Coan_Roulinq._Harri_Potter_v%C9%99_F%C9%99ls%C9%99f%C9%99_Da%C5%9F%C4%B101.jpg",
            book_name: "Felsefe dasi",
            book_author: "C.K.Roulinq",
            book_price: 6,
            nesr: "Azerbaycan",
          }],
    }

getData =  () =>{

fetch("http://localhost:3000/aze")
.then(res=>res.json())
.data(data=>console.log(data))
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
</section>
            
        )
    }
}