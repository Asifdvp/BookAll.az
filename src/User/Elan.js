import React from "react";
import { Link } from "react-router-dom";
import sebet from "../Sebet/sebet.png"
import sebet2 from "./2.jpg";
import "./User.css"
export default class  Elan extends React.Component{
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
        <Link to="/elan">Elanlar</Link>
       
   </li>
    <li>
    <Link to="/hesab">Hesab Detalları</Link>
       
   </li>
    <li>
    <Link to="/login">Çıxış</Link>   
   </li>
    
</ul>


    </div>

    
</section>
                </div>
        
                <div className='new_mehsul bas'>

                

                 <Link to="/yeni" className='ag '> Yeni Mehsul Əlavə Et    +   </Link>


    </div>

<div className='sebet-div'>
<table>
<tr className='bas'> 
    <th className='meshul-name'>Elanlar</th> 
    <th className='mehsul-text'> </th> 
    <th className='mehsul-qiymet'> Qiymət</th> 
    <th className='mehsul-say'> Say</th> 
    <th className='mehsul-say'> </th> 
    <th className='mehsul-remove'> </th> 

</tr>
<tbody> 
<tr>
<td className='mehsul-name'> <img src={sebet} alt="dsfs"/></td>
<td className='mehsul-text'>Varlı Ata,Kasıb Ata </td>
<td className='mehsul-qiymet'> 0.10</td>
<td className='mehsul-say'>
    <input type="number" value="1"/>
</td>

<td className='mehsul-remove'>Düzəliş Et</td>
<td className='mehsul-remove'> Ləğv et</td>

    </tr>
<tr className='xettb'> 
    <td> <hr/></td>
</tr>


<tr>
<td className='mehsul-name'> <img src={sebet2} alt="dsfs"/></td>
<td className='mehsul-text'>Danışığınla həyat qazan</td>
<td className='mehsul-qiymet'> 0.10</td>
<td className='mehsul-say'>
    <input type="number" value="1"/>
</td>
<td className='mehsul-remove'>Düzəliş Et</td>
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


