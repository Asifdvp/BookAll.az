<!-- React icons -->
<!-- Installation -->

npm install @react-icons/all-files --save

<!-- Usage -->

import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
class Header extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
<!-- Not: İconu istifadə edərkən hər hansı bir etiketin daxilində yazmaq lazımdır, birbaşa <FaBeer/> yazdıqda işləməyəcək 
<h3> ><FaBerr/> </h3> işləyəcək -->


<!-- React.Bootstrap -->

  npm install react-bootstrap bootstrap
<!-- Usage -->
İstənilən component adını yazıb import edirsen
  import Caroousel from 'react-bootstrap/Carousel';

css
import 'bootstrap/dist/css/bootstrap.min.css';
