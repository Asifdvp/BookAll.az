import React, { Component } from 'react';
import "./search.css";
import "../main/main.css";
import one from "./img/1.jpeg";
import two from "./img/2.jpg";
import three from "./img/3.jpg";
import four from "./img/4.png";
import five from "./img/5.jpg";
import like from "./img/like.png";
import sebet from "./img/sebet.svg";

export default class Search extends Component{
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
        <button type="button"  className="daha">
            Daha Çox
        </button>
    </div>
    <div className="cards">
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={three} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Martin Eden
        <br/>
       Jack London</p>
</div>
<div className="price">
    6.79 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={two} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Dəniz Canavarı <br/> Jack London</p>
</div>
<div className="price">
     8.49 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={one} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Oyun <br/> Jack London</p>
</div>
<div className="price">
   8.99 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={four} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Beyaz Diş <br/> Jack London</p>
</div>
<div className="price">
    9.10 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={five} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Paris və Londonda <br/> qara qəpiksiz <br/> Corc Oruell</p>
</div>
<div className="price">
    9.59 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
    </div>
</section>
         </div>
            </section>
        )
    }
}