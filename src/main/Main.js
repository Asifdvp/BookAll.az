import React,{Component} from "react";
import "./main.css"

//Azerbaycan bolmesi 
import one from "./azerbaycan/1.jpg";
import two from "./azerbaycan/2.jpg";
import three from "./azerbaycan/3.jpg";
import four from "./azerbaycan/4.jpg";
import five from "./azerbaycan/5.jpg";



//turk bolmesi

import like from "./like.png";
import sebet from "./sebet.svg"



import tone from "./turk/1.jpg";
import ttwo from "./turk/2.jpg";
import tthree from "./turk/3.jpg";
import tseven from "./turk/4.jpg";
import tfive from "./turk/5.jpg";


import { Link } from "react-router-dom";

import ione from "./ingiils/1.jpg";
import itwo from "./ingiils/2.jpg";
import ithree from "./ingiils/3.jpg";
import iseven from "./ingiils/4.jpg";
import ifive from "./ingiils/5.jpg";


export default class Main extends Component {
render(){
    return(
        <section className="main">
<section className="az">
    <div className="main-content">
        <div className="xett"></div>
        <h1>Azərbaycan Nəşrləri</h1>
        <div className="xett"></div>
        <button type="button"  className="daha">
            Daha Çox
        </button>
    </div>
    <div className="cards">
   
   <Link to="product"> 
   <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={one} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Malva,
        <br/>
       Maksim Qorki</p>
</div>
<div className="price">
    3.25 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
    </Link>
    <Link to="product"> 
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={two} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Cen Eyşan <br/>
        13 Səbəb </p>
</div>
<div className="price">
   6.8 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        </Link>
        <Link to="product">
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={three} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>11.22.63 <br/> Stephen King</p>
</div>
<div className="price">
    10.65 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        </Link>
        <Link to="product">
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={four} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Ağ Diş <br/> Jack London</p>
</div>
<div className="price">
    8.10 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        </Link>
        <Link to="product">
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={five} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Yad <br/>
    Albert Camus</p>
</div>
<div className="price">
    9.59 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        </Link>
    </div>
</section>
<section className="az">
    <div className="main-content">
        <div className="xett"></div>
        <h1>Türk Nəşrləri</h1>
        <div className="xett"></div>
        <button type="button"  className="daha">
            Daha Çox
        </button>
    </div>
    <div className="cards">
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={tthree} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>1984,
        <br/>
       George Orwell</p>
</div>
<div className="price">
    10.49 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={ttwo} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>5 saniye kuralı, <br/> Mel Robbins</p>
</div>
<div className="price">
    12.59 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={tone} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Aci Kahve,<br/> Agatha Chrsitie</p>
</div>
<div className="price">
    11.99 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={tfive} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Travma ve İyileşme  <br/> Judith Herman</p>
</div>
<div className="price">
    13.59 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={tseven} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Üç Kız Kardeş <br/> Iclal Aydın</p>
</div>
<div className="price">
    15.99 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
    </div>
</section>



<section className="az">
    <div className="main-content">
        <div className="xett"></div>
        <h1>İngilis Nəşrləri</h1>
        <div className="xett"></div>
        <button type="button"  className="daha">
            Daha Çox
        </button>
    </div>
    <div className="cards">
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={ithree} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>YAlices Adventures in Wonderland
        <br/>
        Lewis Carroll</p>
</div>
<div className="price">
    7.99 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={ifive} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Hadji Murad <br/> Leo Tolstoy</p>
</div>
<div className="price">
    8.99 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={itwo} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>1984 <br/>George Orwell</p>
</div>
<div className="price">
    11.99 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={iseven} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>The 1619 Project <br/> Nikole Hannah-Jones</p>
</div>
<div className="price">
    52.14 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={ione} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Will Smith</p>
</div>
<div className="price">
    31.28 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
    </div>
</section>




        </section>
    )
}
}