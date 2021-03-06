import React, { PureComponent } from "react";
import "./sebet.css";

import logo from "./logo.svg";
import store from "../redux/store";
export default class Sebet extends PureComponent {
  state = {
    cartGoods: [],
  };
  componentDidMount() {
    window.addEventListener("load", () => {
     
        let carts = JSON.parse(localStorage.getItem("carts"));
        this.setState({ cartGoods: carts});
      
    });
    if (localStorage.getItem("carts") === null) {
      let state = store.getState();
      this.setState({ cartGoods: state.localCarts });
    } else {
      let carts = JSON.parse(localStorage.getItem("carts"));
      this.setState({ cartGoods: carts });
    }
    // let state = store.getState();
    // this.setState({cartGoods:state.localCarts})
  }

  deleteItem(id, index) {
    let elm_id = (id.target.parentElement.children[4].textContent - 564) / 564;
    store.dispatch({
      type: "DELETE_ITEM",
      payload: { id: elm_id },
    });



















    
    let carts = JSON.parse(localStorage.getItem("carts"));
    this.setState({ cartGoods: carts });
    // let state = store.getState();
    // this.setState({ cartGoods: state.cart });
    // this.setState({cartGoods:store.getState().cart})
  }

  render() {
    // console.log(this.state.cartGoods)
    // console.log(store.getState().cart)
    return (
      <section className="sebet-section">
        <div className="sebet-container">
          <div className="sebet-div">
            <table>
              <tr className="bas">
                <th className="meshul-name"> Məhsul</th>
                <th className="mehsul-text">Adı </th>
                <th className="mehsul-qiymet"> Qiymət</th>
                <th className="mehsul-say"> Say</th>
                <th className="mehsul-kod"> Kodu</th>
                <th className="mehsul-remove"> </th>
              </tr>
              <tbody>
                {this.state.cartGoods.length ? (
                  <>
                    {this.state.cartGoods.map((item, index) => (
                      <tr>
                        <td className="mehsul-name">
                          {" "}
                          <img src={item.book_img} alt="dsfs" />
                        </td>
                        <td className="mehsul-text">
                          {item.book_name}, {item.book_author}
                        </td>
                        <td className="mehsul-qiymet">
                          {" "}
                          {item.book_price} {"   "} AZN{" "}
                        </td>
                        <td className="mehsul-say">
                          <input
                            type={"text"}
                            style={{ background: "white" }}
                            value={1}
                            disabled
                          />
                        </td>

                        <td className="mehsul-remove"> {index * 564 + 564} </td>
                        <td
                          className="mehsul-remove"
                          onClick={(item) => this.deleteItem(item)}
                        >
                          {" "}
                          X
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <p className="bos">Səbət Boşdur</p>
                )}

                {/* <tr>
<td className='mehsul-name'> <img src={sebet2} alt="dsfs"/></td>
<td className='mehsul-text'>Danışığınla həyat qazan</td>
<td className='mehsul-qiymet'> 15,29</td>
<td className='mehsul-say'>
    <input type="number" value="1"/>
</td>
<td className='mehsul-cem'> 15,29</td>
<td className='mehsul-remove'> X</td>

  
  
    </tr>
<tr className='xettb'> 
    <td> <hr/></td>
</tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="sifaris">
          <div className="sifaris-left">
            <div className="sifaris-about">
              <form>
                <h1>Sifariş Məlumatları</h1>
                <div className="ad-soyad">
                  <label htmlFor="name">
                    Adınız<span>*</span>{" "}
                    <input name="name" placeholder="Adınızı daxil edin" />{" "}
                  </label>

                  <label htmlFor="surname">
                    Soyadınız<span>*</span>{" "}
                    <input name="surname" placeholder="Soyadınızı daxil edin" />{" "}
                  </label>
                </div>

                <label htmlFor="surname">
                  Ata Adı<span>*</span>{" "}
                </label>
                <input name="surname" placeholder="Ata adınızı daxil edin" />

                <label htmlFor="phone">
                  Əlaqə Nömrəsi<span>*</span>{" "}
                </label>
                <input
                  name="phone"
                  type="phone"
                  placeholder="Əlaqə nömrənizi daxil edin"
                />

                <label htmlFor="name">
                  Sifarişi Götürəcəm<span>*</span>{" "}
                </label>
                <select>
                  <option>Mağazadan Götürəcəm </option>

                  <option>Ünvana Çatdırılma 5 AZN </option>
                  <option>Metroya Çatdırılma 2 AZN </option>
                </select>
                <label htmlFor="name">
                  Çatdırılma yeri (Şəhər, rayon, metro, poçt və s.)
                  <span>*</span>{" "}
                </label>
                <input name="name" placeholder="Ünvanı daxil edin " />
                <label htmlFor="name">
                  Əlavə Qeydləriniz<span>*</span>{" "}
                </label>
                <textarea name="name" placeholder="Qeydlərinizi daxil edin" />
              </form>
            </div>
          </div>

          <div className="sifaris-left">
            <div className="sifaris-about">
              <img src={logo} alt="logo" />
              <h1>Çatdırılma Haqqında </h1>
              <div className="right-about">
                <p>
                  {" "}
                  Çatdırılma bizim kuryer xidməti tərəfindən, sifariş daxil
                  olandan dərhal sonra, 24 saat ərzində həyata keçirilir. Biz
                  istirahət günləri də daxil olmaqla, hər gün saat 10:00-dan
                  22:00-dək sifarişləri çatdırırıq. Bizim kuryerlər bağlamanın
                  çatdırılma gününü və vaxtını təyin etmək, eləcə də ünvanı
                  dəqiqləşdirmək üçün sifarişin qeydiyyatında göstərdiyiniz
                  telefona zəng edib, sizinlə əlaqə saxlayacaqlar.
                </p>
              </div>

              <h1 style={{ marginTop: "20px" }}>Ödənişi necə etmək? </h1>
              <div className="right-about">
                <p>
                  {" "}
                  Siz sifarişi aldığınız zaman pulu nağd şəkildə kuryerə
                  ödəyirsiniz. Sizə sifarişlə birlikdə əldə etdiyiniz mal
                  haqqında bütün məlumatların qeyd olunduğu qəbz verilir.
                </p>
              </div>
            </div>
            <div className="son">
              <div className="cat">Cəmi: 18.88 AZN </div>
              <button type="button" className="sonb">
                Sifarişi Təsdiqlə
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
