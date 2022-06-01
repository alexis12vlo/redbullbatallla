
import './Paises.scss'
import logored from './logo-red-bull.png'
import React, { useState } from 'react';


function Paises({pais}) {

  const [displaypais,Setdisplaypais]=useState({display:'none',display2:'flex'})
  


  function ClickDisplay(){



    displaypais.display='flex'
    displaypais.display2='none'
    Setdisplaypais({...displaypais})
  
}
  function ClickDisplayOver(){


    displaypais.display='none'
    displaypais.display2='flex'
    Setdisplaypais({...displaypais})

  }

  

  return (

    <div  className="Paises">
      <div style={{display:displaypais.display2}}  onMouseLeave={ClickDisplayOver}
      onMouseOver={ClickDisplay} className="Paises_Container1">
         <h1>{pais.dia}</h1>
        <h2>{pais.mes}</h2>
        <div className="Bandera">
          <img src={pais.img} alt=""/>
        </div>
        <h3>{pais.ciudad}</h3>
      </div>

      <div style={{display:displaypais.display}} onMouseOver={ClickDisplay} onMouseLeave={ClickDisplayOver} className="Paises_Container2">
          <div className="Paises_Container2_Image">
          <img src={logored} alt=""/>
          </div>
          <h1>Red Bull Batalla Final Nacional {pais.ciudad}</h1>
          <h2>{pais.dia} {pais.mes} {pais.año}</h2>
          <div className="BanderaCiudad">
            <img src={pais.img} alt=""/>
            <h3>{pais.ciudad}</h3>
          </div>


      </div>
    </div>
  );
}

export default Paises;