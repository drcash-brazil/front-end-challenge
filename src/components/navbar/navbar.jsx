import React from "react"
// IMPORT PARA OS COMPONENTES VISUAIS DA NAVBAR 
import "./navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
// IMPORT LOGO -> ARQUIVO .PSD NA PASTA CASO NECESSÁRIO EDIÇÃO
import Logo from "../images/logo.png"
// IMPORTS REACT FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// IMPORT PARA TRANSIÇÃO ENTRE PÁGINAS
import {Link} from "react-scroll"


const Navbar = () => {
  return (
  <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top"> {/* BACKGROUND DA NAVBAR */}
    
    <div className="container"> {/* CONTAINER JUSTIFY-CONTENTS */}
          <a class="navbar-brand" href="#"><img className="logo" src={Logo}></img></a> {/* LOGO DA PLATAFORMA */}
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars}/> {/* MENU VERSÃO RESPONSIVA MOBILE */}
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto"> {/* MENU -> MS:AUTO PARA SETAR OS ITENS A DIREITA */}

              <li className="nav-item active">  {/* LINK PARA HOMEPAGE */}
                <Link smooth={true} to="Home" offset={-110} className="nav-link" href="#">Homepage<span className="sr-only"></span></Link>
              </li>
              <li className="nav-item"> {/* LINK PARA INFORMAÇÕES SOBRE A EMPRESA */}
                <Link smooth={true} to="About" offset={-110} className="nav-link" href="#">Quem somos</Link>
              </li>
              <li className="nav-item"> {/* LINK CADASTRO DE CLÍNICAS -> SOMENTE USUÁRIO, NECESSITA LOGIN */}
                <Link smooth={true} to="Form" offset={-110} className="nav-link" href="#">Cadastro de Clínicas</Link>
              </li>
              <li className="nav-item"> {/* LINK PARA LISTAGEM DAS CLINICAS CADASTRADAS */}
                <Link smooth={true} to="List" offset={-110} className="nav-link" href="#">Nossas Clínicas</Link>
              </li>            
            </ul>
          </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar