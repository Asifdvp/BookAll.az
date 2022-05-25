import React from 'react';
import "./sebet.css";
import sebet from "./sebet.png"
import sebet2 from "./2.jpg"
export default class Sebet extends React.Component{
    render(){
       return(
<section className='sebet-section'>
<div className='sebet-container'>
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
<td className='mehsul-remove'> X</td>

    </tr>
<tr className='xett'> 
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
<td className='mehsul-remove'> X</td>

  
  
    </tr>
<tr className='xett'> 
    <td> <hr/></td>
</tr>
</tbody>
    </table>


    </div>

    </div>
<div className='sifaris'>  
<div className='sifaris-left'>
<div className='sifaris-about'>
<form>
    <h1>Sifariş Məlumatları</h1>
    <div className='ad-soyad'> 
    <label htmlFor='name'>Adınız<span>*</span>  <input name='name'  placeholder='Adınızı daxil edin'/> </label>
        
<label htmlFor='name' >Soyadınız<span>*</span> <input name='name' placeholder='Soyadınızı daxil edin'/> </label>

    </div>

<label htmlFor='name'>Ata Adı<span>*</span>  </label>
<input name='name' placeholder='Ata adınızı daxil edin'/>
<label htmlFor='name'>Çatdırılma yeri (Şəhər, rayon, metro, poçt və s.) <span>*</span>  </label>
<input name='name' placeholder='Ata adınızı daxil edin'/>
<label htmlFor='name'>Əlaqə Nömrəsi<span>*</span>  </label>
<input name='name' placeholder='Əlaqə nömrənizi daxil edin'/>

</form>
    </div>
</div>
<div className='sifaris-right'></div>

</div>
    </section>
       )
    }
}