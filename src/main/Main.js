import React, { Component } from "react";
import "./main.css"

//Azerbaycan bolmesi 
import one from "./azerbaycan/1.jpg";
import two from "./azerbaycan/2.png";
import three from "./azerbaycan/3.jpg";
import four from "./azerbaycan/4.jpg";
import five from "./azerbaycan/5.png";



//turk bolmesi


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


// icons

import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";


export default class Main extends Component {

    state = {
        data: []
    }


    getData = () => {
        fetch('http://localhost:3000/publications')
            .then(res => res.json())
            .then(data => this.setState({ data: data }))
    }


    componentDidMount() {
        this.getData()
    }

    addToFavorite(e) {

        e.target.classList.toggle("heart-color")
    }
    render() {

        console.log(this.state.data)
        return (
            <section className="main">
                <section className="az">
                    <div className="main-content">
                        <div className="xett"></div>
                        <h1>Azərbaycan Nəşrləri</h1>
                        <div className="xett"></div>
                        <button type="button" className="daha">
                            Daha Çox
                        </button>
                    </div>
                    <div className="cards">

                        
                   
                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={one} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>
                                        Malva,
                                        <br />
                                        Maksim Qorki</p>
                                </div>
                            </Link>
                            <div className="price">
                                3 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>

                        {/* <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={two} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>Malva,
                                        <br />
                                        Maksim Qorki</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={three} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>Malva,
                                        <br />
                                        Maksim Qorki</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={four} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>Malva,
                                        <br />
                                        Maksim Qorki</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={five} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>Malva,
                                        <br />
                                        Maksim Qorki</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div> */}





                    </div>
                </section>





                <section className="az">
                    <div className="main-content">
                        <div className="xett"></div>
                        <h1>Türk Nəşrləri</h1>
                        <div className="xett"></div>
                        <button type="button" className="daha">
                            Daha Çox
                        </button>
                    </div>
                    <div className="cards">

                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={tthree} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>
                                        1984
                                        <br />
                                        George Orwell</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={ttwo} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>5 saniye kuralı
                                        <br />
                                        Mel Robbins</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={three} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>Malva,
                                        <br />
                                        Maksim Qorki</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={four} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>Malva,
                                        <br />
                                        Maksim Qorki</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={five} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>Malva,
                                        <br />
                                        Maksim Qorki</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>





                    </div>
                </section>
                <section className="az">
                    <div className="main-content">
                        <div className="xett"></div>
                        <h1>İngilis Nəşrləri</h1>
                        <div className="xett"></div>
                        <button type="button" className="daha">
                            Daha Çox
                        </button>
                    </div>
                    <div className="cards">

                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={tthree} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>
                                        1984
                                        <br />
                                        George Orwell</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={ttwo} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>5 saniye kuralı
                                        <br />
                                        Mel Robbins</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={three} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>Malva,
                                        <br />
                                        Maksim Qorki</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={four} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>Malva,
                                        <br />
                                        Maksim Qorki</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img alt="img" className="cardi" src={five} />
                                <div >
                                    <AiFillHeart className="heart" onClick={this.addToFavorite} />
                                </div>
                            </div>
                            <Link to="product">
                                <div className="card-context">
                                    <p>Malva,
                                        <br />
                                        Maksim Qorki</p>
                                </div>
                            </Link>
                            <div className="price">
                                3.25 AZN
                                <img src={sebet} alt="sebet" />
                            </div>

                        </div>





                    </div>
                </section>









            </section>
        )
    }
}