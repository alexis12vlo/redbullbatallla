import redbulllogo from './redbulllogo.svg'
import {AiOutlineQrcode} from 'react-icons/ai'
import {GiMagnifyingGlass} from 'react-icons/gi'
import {IoPersonOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsXLg} from 'react-icons/bs'
import './header.scss'
import redbulllogoimg from './logo-red-bull.png'
import videoheader from './videoheader.mp4'
import React, { useState } from 'react';


export default function Header() {

const [fixed,setFixed]=useState({fix:'relative',fix2:'relative',margintopletra:'',margintopnav2:'-20px',marginleft:'',marginleftlogo:'',margintop:''})
const [equis, setEquis] = useState({back:'linear-gradient(to bottom,rgba(0,22,43,0),rgba(0,22,43,.1) 44%,rgba(0,22,43,.67))',logo:GiHamburgerMenu,display:'none',display2:'flex'});
   window.addEventListener('scroll', (event) => {
     if (window.scrollY > 10) {
      fixed.fix='fixed';
      fixed.fix2='fixed';

      fixed.marginleft='450px'
      fixed.marginleftlogo='0px'
      fixed.margintopletra='55px'
      fixed.margintopnav2='570px'

      fixed.margintop='-50px'
      setFixed({...fixed})
    }else{
      fixed.fix2='relative';
      fixed.margintopnav2='0px'

      fixed.margintop='0px'      
      fixed.marginleftlogo='0px'
      fixed.fix='relative';
      fixed.marginleft=''
      fixed.margintopletra='0px'
      setFixed({...fixed})
    }
    if (window.scrollY >300) {
      fixed.margintopnav2='570px'

      fixed.margintop='0px'      
      fixed.marginleftlogo='0px'
      fixed.fix='relative';
      fixed.fix2='fixed';

      fixed.marginleft=''
      fixed.margintopletra='-20px'
      setFixed({...fixed})


    }
      if (window.scrollY >3700) {
      fixed.margintopnav2='0px'

      fixed.margintop='-200px'      
      fixed.marginleftlogo='0px'
      fixed.fix='relative';
      fixed.fix2='fixed';

      fixed.marginleft=''
      fixed.margintopletra='-20px'
      setFixed({...fixed})


    }
    });


  function ClickAmburguesa(){
    if(equis.logo==GiHamburgerMenu){
    equis.back='#00162B'
    equis.display='flex'
    equis.display2='none'
    equis.logo=BsXLg;
    setEquis({...equis})
    }else{
    equis.back='linear-gradient(to bottom,rgba(0,22,43,0),rgba(0,22,43,.38) 44%,rgba(0,22,43,.67))'
    equis.display='none'
    equis.display2='flex'
    equis.logo=GiHamburgerMenu;
    setEquis({...equis})

    }


  }
  return (
    <div className="Header">

         <video className="VideoHeader" loop autoPlay muted>
          <source src={videoheader} type="video/mp4" loop autoPlay/>
         </video>
     
        <div className="Header_Login">
          <div>
            <AiOutlineQrcode className="Menu_Logo"/>
          </div>
          <div>
            <button className="MundoRedBull">
            <img className="Image" src={redbulllogo} alt=""/>
            <span className="MundoRedBull_P">Mundo Red Bull</span> 
            </button>
          </div>
          <div>
            <IoPersonOutline className="Persona"/>
            <GiMagnifyingGlass className="Lupa"/>
          </div>
        </div>
        <div style={{background:equis.back}} className="Header_Text">
          <div  className="Header_Nav">
            <div   style={{position:fixed.fix,marginLeft:fixed.marginleftlogo,marginTop:fixed.margintop}} className="Header_Nav_Logo">
              <img src={redbulllogoimg} alt=""/>
            </div>
            <div  style={{position:fixed.fix,marginLeft:fixed.marginleft,marginTop:fixed.margintop}} className="Header_Nav_App">
              <div  className="Nav_Menu">
                <nav className="Menu">
                  <ul>
                   <li><a href="#">Artistas</a></li>
                   <li><a href="#">Eventos</a></li>
                   <li><a href="#">Audio</a></li>
                   <li><a href="#">Videos</a></li>
                   <li><a href="#">Noticias</a></li>
                  </ul>
                </nav>
              </div>  
              <div className="Header_Nav_Button">
                <button className="Button_App">APP</button>
              </div>
              <div className="Header_Nav_Button">
                <equis.logo onClick={ClickAmburguesa} className="Amburguesa"/>
              </div>

            </div>
          </div>

          <div style={{display:equis.display}} className="Amburguesa_Nav">

              <div>
                 <nav className="Menu_Amburgesa">
                  <ul>
                   <li><a href="#">Inicio</a></li>
                   <li><a href="#">Artistas</a></li>
                   <li><a href="#">Eventos</a></li>
                   <li><a href="#">Audio</a></li>
                   <li><a href="#">Videos</a></li>
                   <li><a href="#">Noticias</a></li>
                   <li><a href="#">Historia</a></li>
                   <li><a href="#">Tienda</a></li>
                  </ul>
                </nav>
              </div>



          </div>


          <div style={{display:equis.display2,marginTop:fixed.margintopletra}} className="Header_Logo">
            <img src={redbulllogoimg} alt=""/>
          </div>
          <div style={{display:equis.display2}} className="Header_Titulo">
            <h1>Red Bull Batalla</h1>
          </div>
          <div style={{display:equis.display2,position:fixed.fix2,marginTop:fixed.margintopnav2}} className="Nav_2">
                <nav className="Menu">
                  <ul>
                   <li><a href="#">Arriba</a></li>
                   <li><a href="#">Artistas</a></li>
                   <li><a href="#">Eventos</a></li>
                   <li><a href="#">Noticias</a></li>
                   <li><a href="#">Info</a></li>
                   <li><a href="#">Final Internacional</a></li>
                  </ul>
                </nav>
          </div>




        </div>
    </div>
  );
}