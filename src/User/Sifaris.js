import React from "react";
import { Link } from "react-router-dom";
import sebet from "../Sebet/sebet.png"
import sebet2 from "./2.jpg";
import "./User.css"
export default class Sifaris extends React.Component{
    render(){
        return(
            <div className="sifaris-div">
            <div className="user">
            <section className="navbar">
    <div className="menu">
<ul>
<li>
        <Link to="/user">İdarə Paneli</Link>
       
   </li>
  
    <li>
        <Link to="/sifaris">Sifarişlər </Link>
       
   </li>
    <li>
        <Link to="sifaris">Elanla </Link>
       
   </li>
    <li>
        <Link to="sifaris">Hesab Detalları</Link>
       
   </li>
    <li>
        <Link to="sifaris">Çıxış</Link>   
   </li>
    
</ul>


    </div>

    
</section>
                </div>
           

<div className='sebet-div'>
<table>
<tr className='bas'> 
    <th className='meshul-name'> Məhsul</th> 
    <th className='mehsul-text'> </th> 
    <th className='mehsul-qiymet'> Qiymət</th> 
    <th className='mehsul-say'> Say</th> 
    <th className='mehsul-cem'>Cəmi </th> 
    <th className='mehsul-remove'> </th> 
</tr>
<tbody>
<tr>
<td className='mehsul-name'> <img src={sebet} alt="dsfs"/></td>
<td className='mehsul-text'>Varlı Ata,Kasıb Ata </td>
<td className='mehsul-qiymet'> 3,59</td>
<td className='mehsul-say'>
    <input type="number" value="1"/>
</td>
<td className='mehsul-cem'> 3,59</td>
<td className='mehsul-remove'> Ləğv et</td>

    </tr>
<tr className='xettb'> 
    <td> <hr/></td>
</tr>


<tr>
<td className='mehsul-name'> <img src={sebet2} alt="dsfs"/></td>
<td className='mehsul-text'>Danışığınla həyat qazan</td>
<td className='mehsul-qiymet'> 15,29</td>
<td className='mehsul-say'>
    <input type="number" value="1"/>
</td>
<td className='mehsul-cem'> 15,29</td>
<td className='mehsul-remove'>Ləğv et</td>

  
  
    </tr>
<tr className='xettb'> 
    <td> <hr/></td>
</tr>
</tbody>
    </table>


    </div>
            </div>
        )
    }
}


