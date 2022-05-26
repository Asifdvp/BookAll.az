import React,{Component} from "react";
import "./main.css"
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import seven from "./7.jpg";
import five from "./5.jpg";
import eight from "./8.jpg";
import nine from "./9.jpg";
import six from "./6.jpg";
import ten from "./10.jpg";
import eleven from "./11.jpg";
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
    <img alt="img" className="cardi" src={three} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Yay tapşırıqları,
        <br/>
        Orxan Bəyov</p>
</div>
<div className="price">
    3.25 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
    </Link>
    



        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={two} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Dostlar Məntiq öyrənir</p>
</div>
<div className="price">
    2.99 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={seven} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Dostlar Riyaziyyat öyrənir</p>
</div>
<div className="price">
    1.65 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={eight} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Azərbaycan Dili <br/> Yarpaq Testi</p>
</div>
<div className="price">
    3.10 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={nine} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Dünya Möcüzələri</p>
</div>
<div className="price">
    5.59 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
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
<section className="az">
    <div className="main-content">
        <div className="xett"></div>
        <h1>Kirayə Kitablar</h1>
        <div className="xett"></div>
        <button type="button"  className="daha">
            Daha Çox
        </button>
    </div>
    <div className="cards">
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={one} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Malva,Maksim Qorki</p>
</div>
<div className="price">
0.10 AZN
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
    <p>Cey Eşer,13 Səbəb</p>
</div>
<div className="price">
    0.10 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={six} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Stephen King,11.22.63</p>
</div>
<div className="price">
    0.10 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={ten} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Albert Camus,Yad</p>
</div>
<div className="price">
   0.10 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
        <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={eleven} />
    <div className="heart">
        <img src={like} alt="like"/>
    </div>
</div>
<div className="card-context">
    <p>Jack London,Ağ Diş</p>
</div>
<div className="price">
   0.10 AZN
<img src={sebet} alt="sebet"/>
</div>
        </div>
    </div>
</section>




        </section>
    )
}
}