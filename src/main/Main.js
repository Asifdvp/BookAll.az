import React, { Component } from "react";
import "./main.css"



import sebet from "./sebet.svg"



import { Link } from "react-router-dom";



// icons

import store from '../redux/store';



export default class Main extends Component {

    state = {
        aze: [],
          tr: [],
        eng: []
    }

    getData = () => {
        fetch('http://localhost:3000/aze/')
            .then(res => res.json())
            .then(data => this.setState({ aze: data }))


            fetch('http://localhost:3000/tr/')
            .then(res => res.json())
            .then(data => this.setState({ tr: data }))


            fetch('http://localhost:3000/eng/')
            .then(res => res.json())
            .then(data => this.setState({ eng: data }))
    }

    componentDidMount() {
        this.getData();
    }

    // addToFavorite(e) {

    //     e.target.classList.toggle("heart-color")
    // }
    addToCard = (id) =>{
store.dispatch({
    type:"ADD_TO_CARD",
    payload:{
        id:id
    }
})
    }
    render() {


        return (
            <section className="main">

                {/* Azerbaycan nesrleri */}
                <section >
                    <div className="main-content">
                        <div className="xett"></div>
                        <h1>Azərbaycan Nəşrləri</h1>
                        <div className="xett"></div>
                        <Link to="aze">
                        <button type="button" className="daha">
                            Daha Çox
                        </button> </Link>
                    </div>
                    <div className="cards">
{this.state.aze.filter(item=>item.id<6)
.map(item=>(
 <div className="card">
 <div className="card-img">
     <img alt="img" className="cardi" src={item.book_img} />
    
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
 <div className="price" >
   {item.book_price} AZN
     <img src={sebet} alt="sebet" onClick={()=>this.addToCard(item.id)} />
 </div>

</div>
))}
                       

                    </div>
                </section>

{/* Turk nesrleri */}
                <section >
                    <div className="main-content">
                        <div className="xett"></div>
                        <h1>Türk Nəşrləri</h1>
                        <div className="xett"></div>
                        <Link to="tr">
                        <button type="button" className="daha">
                            Daha Çox
                        </button> </Link>
                    </div>
                    <div className="cards">
{this.state.tr.filter(item=>item.id<16)
.map(item=>(
 <div className="card">
 <div className="card-img">
     <img alt="img" className="cardi" src={item.book_img} />
   
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
     <img src={sebet} alt="sebet"  onClick={()=>this.addToCard(item.id)}/>
 </div>

</div>
))}
                       






                    </div>
                </section>  


           {/* English nesrleri */}
           <section >
                    <div className="main-content">
                        <div className="xett"></div>
                        <h1>İngilis Nəşrləri</h1>
                        <div className="xett"></div>
                        <Link to="en">
                        <button type="button" className="daha">
                            Daha Çox
                        </button> </Link>
                    </div>
                    <div className="cards">
{this.state.eng.filter(item=>item.id<26)
.map(item=>(
 <div className="card">
 <div className="card-img">
     <img alt="img" className="cardi" src={item.book_img} />
     
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
     <img src={sebet} alt="sebet" onClick={()=>this.addToCard(item.id)} />
 </div>

</div>
))}
                       






                    </div>
                </section>  




            </section>
        )
    }
}