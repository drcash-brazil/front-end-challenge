import './header.css'
import Logo from '../../../Utils/Images/logo.png'
import Listing from '../ListingPage/listing'
import ReactDOM from 'react-dom'
import React from 'react'


export default function Header(){

    /*Função que renderizará o component Listing ao clicar em Cadastre sua clínica*/
    function renderListing(){
        ReactDOM.render(
            <React.StrictMode>
                <Listing/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    return(
        <>
        {/*Começo do html do header*/}
        <section className="header">
            <div className="content">
                <img className="logo" src={Logo} alt="logo iclinic"/>
                <div className="button">
                <button onClick={renderListing}>CADASTRE SUA CLÍNICA</button>
                </div>
            </div>
        </section>
        {/*Fim do html do footer*/}
        </>
    )
}