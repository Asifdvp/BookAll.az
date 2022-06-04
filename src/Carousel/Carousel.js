import React, { Component } from "react";
import "./carousel.css"
import one from "./carousel-img/1.PNG"
import two from "./carousel-img/2.png"
import three from "./carousel-img/3.PNG"
import Carousel from 'react-bootstrap/Carousel';
 import 'bootstrap/dist/css/bootstrap.min.css';


export default class Carousel1 extends Component {
    render(){
        return(
            <section className="carousel">
<Carousel touch={true} prevIcon={false} nextIcon={false}>
  <Carousel.Item  interval={2000} >
    <img
      className="d-block carousel-img"
      src={one}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block carousel-img"
      src={three}
      alt="Second slide"
    />
  
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block carousel-img"
      src={two}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
            </section>
        )
    }
}