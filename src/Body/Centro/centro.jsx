
import './centro.scss'
import BatallaImg from  './batalla.img.jpg'
import Aczecino from './aczino-bicampeon.jpg'
import McWilly from './mc-willy.jpg'
import Crescendo from './crescendo-cover.jpg'
import BatallaDeLosGallos from './batalla-de-los-gallos.jpg'
import Paises from './Paises/Paises.jsx'
import ecuador from './ecuadorbandera.png'
import peru from './perubandera.png'
import colombia from './colombia.png'
import estadosunidos from './estadosunidosbandera.png'
import argentina from './argentinabandera.png'
import dominicana from './dominicanabandera.png'
import chile from './chilebandera.png'
import españa from './españabandera.png'
import mexico from './mexicobandera.png'
import redbulllogo from './redbullbatallalogo.png'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'

import React, { useState } from 'react';



import {AiOutlineDoubleLeft} from 'react-icons/ai'
import {AiOutlineDoubleRight} from 'react-icons/ai'
export default function Centro() {

  const [transi,Settransi]=useState({x:0,display:'flex',display2:'flex'})

  function ClickFlechaRigth(){
    if (window.innerWidth < 700){
      transi.x=transi.x-100;
      Settransi({...transi})
    }else{


      if(transi.x==-1500){
        transi.display2='0'
      Settransi({...transi})

      }else{
         transi.display2='1'
         transi.display='1'

      Settransi({...transi})
      }

      transi.x=transi.x-500;
      Settransi({...transi})
    }

  }
   function ClickFlechaLeft(){
      if (window.innerWidth < 700){
      transi.x=transi.x+100;
      Settransi({...transi})
    }else{

      if(transi.x==1500){
        transi.display='0'
      Settransi({...transi})

      }else{
         transi.display='1'
         transi.display2='1'

      Settransi({...transi})
      }
      transi.x=transi.x+500;
      Settransi({...transi})

}
  }

  var paises=[{año:"2021",dia:"10",mes:"Sep",img:colombia,ciudad:"Bogota,Colombia"},
  {año:"2021",dia:"17",mes:"Sep",img:estadosunidos,ciudad:"Estados Unidos"},
  {año:"2021",dia:"24",mes:"Sep",img:peru,ciudad:"Lima,Perú"},
  {año:"2021",dia:"07",mes:"Oct",img:españa,ciudad:"Madrid,España"},
  {año:"2021",dia:"16",mes:"Oct",img:dominicana,ciudad:"Santo Domingo"},
  {año:"2021",dia:"29",mes:"Oct",img:argentina,ciudad:"Buenos Aires"},
  {año:"2021",dia:"12",mes:"Nov",img:ecuador,ciudad:"Quito,Ecuador"},
  {año:"2021",dia:"10",mes:"Dic",img:chile,ciudad:"Villa del Mar"},
  {año:"2022",dia:"01",mes:"Jul",img:mexico,ciudad:"Monterrey"},
  {año:"2022",dia:"15",mes:"Jul",img:ecuador,ciudad:"Quito,Ecuador"},
  {año:"2022",dia:"15",mes:"Jul",img:ecuador,ciudad:"Quito,Ecuador"},
  {año:"2022",dia:"29",mes:"Jul",img:españa,ciudad:"España"},
  {año:"2022",dia:"11",mes:"Ago",img:colombia,ciudad:"Bogota"},
  {año:"2022",dia:"23",mes:"Sep",img:peru,ciudad:"Lima,Perú"},
  {año:"2022",dia:"07",mes:"Oct",img:estadosunidos,ciudad:"Estados Unidos"}]




  return (
    <div className="Centro">


        <div className="Centro_Red_Bull_Batalla">
          <div className="Centro_Red_Bull_Batalla_Container">
            <div className="Centro_Red_Bull_Batalla_Container_Text">
              <div className="Centro_Red_Bull_Batalla_Container_Text_H1">
                <h1>Red Bull Batalla Perú 2022</h1>
              </div>
              <div className="Centro_Red_Bull_Batalla_Container_Text_P">
                <p>Las audiciones ya se dieron y ahora vienen las Regionales. Pero antes, Red Bull Batalla tiene una sorpresa para clasificar a la Final Nacional.</p>
              </div>
              <div className="Centro_Red_Bull_Batalla_Container_Text_Bottoms">
                <button>Leer artículo</button>
                <h2>MC Battle · 3 Min</h2>
              </div>

            </div>



          </div>



        </div>




        <div className="Centro_Noticias_Destacadas">
          <div className="Centro_Noticias_Destacadas_Container">


              <div className="Centro_Noticias_Destacadas_Container_Imagenes">
                <div className="Centro_Noticias_Destacadas_Container_Imagenes_H1">
                    <div className="Centro_Noticias_Destacadas_Container_Imagenes_Border">
                    </div>
                    <h1>NOTICIAS DESTACADAS</h1>

                </div>



                <div className="Centro_Noticias_Destacadas_Container_Imagenes_Cards">
                  <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card">
                    <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card_Image">
                      <img src={BatallaImg} alt="" />
                    </div>
                    <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card_P">
                      <p>Freestyle peruano: los colectivos de Lima</p>

                    </div>
                  </div>
                  <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card">


                    <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card_Image">
                      <img src={Aczecino} alt=""/>

                    </div>
                    <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card_P">
                      <p>El documental que cuenta la vuelta del público a una Final Internacional</p>

                    </div>
                  </div>

                  <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card">

                   <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card_Image">
                      <img src={McWilly} alt=""/>

                    </div>
                    <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card_P">
                      <p>MC Willy Campeón de Raptonda</p>

                    </div>
                  </div>

                  <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card">

                   <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card_Image">
                      <img src={BatallaDeLosGallos} alt=""/>

                    </div>
                    <div className="Centro_Noticias_Destacadas_Container_Imagenes_Card_P">
                      <p>Los últimos campeones de Red Bull Batalla Perú</p>

                    </div>
                  </div>


                </div>



              </div>




              <div className="Centro_Noticias_Destacadas_Container_Escucha">
                <div className="Centro_Noticias_Destacadas_Container_Escucha_Container">
                    <div className="Images">

                       

                    </div>

                    <div className="Centro_Noticias_Destacadas_Container_Escucha_Container_Text">

                        <div className="Centro_Noticias_Destacadas_Container_Escucha_Container_Text_H1">
                          <h1>Escucha "Crescendo", el himno de Red Bull Batalla de 2021</h1>

                        </div>   

                        <div className="Centro_Noticias_Destacadas_Container_Escucha_Container_Text_P">
                          <p>Los MCs de la Final Internacional han grabado el tradicional himno con base de Mykka </p>
                        </div>   

                    </div>

                </div>




              </div>


          </div>



        </div>










        <div className="Centro_Eventos">
            <div className="ImageEventos">
              <div className="ImageEventosContainer">
              </div>
            </div>
            <div className="Centro_Noticias_Destacadas_Container_Imagenes_H1 Titulo">
                    <div className="Centro_Noticias_Destacadas_Container_Imagenes_Border">
                    </div>
                    <h1>Eventos</h1>

            </div>
            <div className="Flechas">
            <div style={{opacity:transi.display}} onClick={ClickFlechaLeft}  ><AiOutlineDoubleLeft className="FlechaLeft"/></div>
            <div style={{opacity:transi.display2}} onClick={ClickFlechaRigth} ><AiOutlineDoubleRight className="FlechaRigth" /></div>   

            </div>
            <div id='Paiss' style={{transform:`translateX(${transi.x}px)`}}className="Centro_Eventos_Container">
                {paises.map((pais)=> <Paises pais={pais} />)}

            </div>

        </div>



        <div className="RedBullBatalla">
          <div className="RedBullBatalla_Container">
            <div className="RedBullBatalla_Container_Titulo">
              <h1>Red Bull Batalla</h1>
            </div>
            <div className="RedBullBatalla_Container_Divisor">
            </div>
            <div className="RedBullBatalla_Container_Paises">
              <h2>11 PAÍSES • 13 EVENTOS • 1 FINAL INTERNACIONAL</h2>
            </div>
            <div className="RedBullBatalla_Container_Divisor"></div>
            <div className="RedBullBatalla_Container_P">
              <p>VUELVE LA MADRE DE TODAS LAS BATALLAS: RED BULL BATALLA 2021. PARTICIPA CON TU VIDEO A TRAVÉS DE LA APP. SI TU FREE ES SELECCIONADO PODRÁS DEMOSTRAR TU TALENTO EN EL ESCENARIO Y COMPETIR POR UNA PLAZA EN LA FINAL INTERNACIONAL.</p>
            </div>
            <div className="RedBullBatalla_Container_Logo">
              <img src={redbulllogo} alt=""/>
            </div>
          </div>

        </div>



        <div className="VerMas">
          <div className="VerMas_Container">
            <div className="VerMas_Container_Titulo">
              <h1>VER MÁS RED BULL BATALLA</h1>
            </div>
            <div className="VerMas_Container_Logos">
              <button className="Insta"><AiOutlineInstagram className="Logos " /> Seguir</button>
              <button className="Face"><FaFacebookF className="Logos" /> Seguir</button>
              <button className="Twi"><AiOutlineTwitter className="Logos" /> Seguir</button>

            </div>

          </div>
        </div>


        <header>
          <div className="Header_Container">
            <div className="Header_Container_Productos">
              <div className="P">
                <p>Productos y compañía</p>
              </div>
              <div className="P">
                <p>Contacta con nosotros</p>
              </div>
              <div className="P">
                <p>Empleo</p>
              </div>
              <div className="P">
                <p>Medios</p>
              </div>
              <div className="P">
                <p>Tienda</p>
              </div>

            </div>

            <div className="Header_Container_Productos">
              <div className="P">
                <p>Ajustes Cookies</p>
              </div>
              <div className="P">
                <p>Política de privacidad</p>
              </div>
              <div className="P">
                <p>Términos de uso</p>
              </div>
              <div className="P">
                <p>Edita</p>
              </div>
              <div className="P">
                <p>Protección de la marca</p>
              </div>
              <div className="P">
                <p>Aviso de fraude</p>
              </div>

            </div>

            <div className="Header_Container_Productos">
              <div className="P">
                <h2>© 2022 Red Bull</h2>
              </div>
            

            </div>

          </div>




        </header> 

    </div>
  );
}