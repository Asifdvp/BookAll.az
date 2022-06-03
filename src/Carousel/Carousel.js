import React, { Component } from "react";
import "./carpusel.css"
import logo from "./icon.svg"
import big from "./C.PNG"
 import Carousel from 'react-bootstrap/Carousel';
 import 'bootstrap/dist/css/bootstrap.min.css';


export default class Carousel1 extends Component {
    render(){
        return(
            <section className="carousel">
<Carousel touch="true">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={big}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={big}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={big}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </section>
        )
    }
}