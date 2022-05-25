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
    3.59 AZN
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
    <p>Dostlar Məntiq öyrənir</p>
</div>
<div className="price">
    2.59 AZN
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
    1.59 AZN
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
    3.59 AZN
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