import React, { Component } from "react";
import "./product.css";
import ag from "./ag.png";
import "../main/main.css";
import one from "./img/1.jpg";
import five from "./img//5.jpg";
import six from "./img/6.jpg";
import ten from "./img/10.jpg";
import eleven from "./img/11.jpg";
import like from "./img/like.png";
import sebet from "./img/sebet.svg";
import kiraye from "./kiraye.jpg";
export default class Product extends Component {
  render() {
    return (
      <section className="product">
          <div className="product-all">
          <div className="left">
          <div className="left-img-div">
            <img className="left-img" alt="img" src={kiraye} />
          </div>
        </div>
        <div className="right">
<div className="rall">
<h2>Ağ Diş</h2>
          <p>
            <p>
              <span className="ad">Yazar:</span>{" "}
              <span className="rtext">Maksim Qorki</span>
            </p>
            <p>
              <span className="ad">Janr:</span>{" "}
              <span className="rtext"> Klassika</span>
            </p>
            <p>
              <span className="ad">Dil:</span>{" "}
              <span className="rtext"> Azərbaycan Nəşrləri</span>
            </p>
        
            <p>
              <span className="ad">Səhifə Sayı:   </span>
              <span className="rtext">   96</span>
            </p>
            <p>
              <span className="ad">Baxışların sayı:</span>{" "}
              <span className="rtext">446 dəfə</span>
            </p>
            <p>
              <span className="ad">Elanın nömrəsi:</span>{" "}
              <span className="rtext">1020</span>
            </p>
            <p>
              <span className="ad">Kitab Sahibi:</span>{" "}
              <span className="rtext">Asif,+994 055-412-40-01</span>
            </p>
          </p>
          <div className="rprice"> Gündəlik 0.10 AZN</div>
          <div className="about">
            <div className="about-div">Bu Kitab Haqqında</div>
           <div className="about-tex">
              {/* <p>
                Cek Londonun “Ağdiş” romanı, şübhəsiz, dünya klassikasının nadir
                incilərindən sayılır. Yazıçının həyat təcrübəsinin, sərrast
                müşahidələrinin məhsulu olan əsərin eyniadlı qəhrəmanı sərt
                iqlim şəraitində dünyaya göz açan, insanın əsarəti altında
                yaşamaq uğrunda dişi ilə, dırnağı ilə mücadilə aparan
                yarıqurd-yarıköpəkdir.
              </p> */}
              <p>
              Öz zəhmətkeş həyatından ayrılan kəndli Vasili ilə gözəl
Malvanın münasibətləri unudulmaz əhvalatdır. Vasili ilə
oğlu Yakovun timsalında ata-oğul mövzusuna da yer ayrılıb.
Gündəlik həyatın incəliklərində gizlənən sarsıdıcı
dram və faciə heyrətamiz ustalıqla açılıb. Müəllifin gəncliyində
qələmə aldığı hekayə onun unudulmaz əsərlərindəndir.
İllər sonra ekranlaşdırılıb və film kimi də böyük
marağa səbəb olub.
              </p>
           
           
            </div> 
            {/* <div className="rsebet">
                <input type="number" value={1} className="reqem"/>
<div className="sebet-text">Səbətə At</div>
                </div> */}
          </div>
</div>
       
        </div>
          </div>
     
        <section className="az">
    <div className="main-content">
        <div className="xett"></div>
        <h1>Oxşar Kitablar</h1>
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
    <p>Cey Eşer,13 Səbəb</p>
</div>
<div className="price">
    7.60 AZN
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
    6.50 AZN
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
   4.80 AZN
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
   7.10 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
    </div>
</section>
      </section>
    );
  }
}
