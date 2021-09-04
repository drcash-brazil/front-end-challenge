import Form from '../../Form/form'
import Footer from '../Footer/footer'
import { useEffect, useState } from 'react'
import './listing.css'
import '../Header/header.css'
import Logo from '../../../Utils/Images/logo.png'
import Main from '../../UI/Main/main'
import ReactDOM from 'react-dom'
import React from 'react'

export default function Listing(){

    /*Função que renderizará o component Main ao clicar em Home */
    function renderMain(){
        ReactDOM.render(
            <React.StrictMode>
                <Main/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    /*Variável de estado para exibir e ocutar a modal do form */
    let [modalShow, setShowModal] = useState(false)
    /*Variável que receberá o json recuperado da mockapi.io */
    let [clinics, setClinics] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("https://6132a37cab7b1e001799b58a.mockapi.io/api/v1/clinics/", requestOptions)
        .then /* Liga-se à resolução da promessa do FETCH. */ ((response) => response.json() /* JSON retorna OUTRA promessa. */ )
        .then /* Liga-se à resolução da promessa método JSON de RESPONSE. */ ((resp) =>{
            /* Passa o JSON recebido como parâmetro para a função setClinics */
            setClinics(resp)
        })
        .catch(console.error);
    }, []);

    return(
        <>
        {/*Começo do html do Listing*/}
        <div id="listing">
        <section className="header">
            <div className="content">
                <img className="logo" src={Logo} alt="logo iclinic"/>
                <div className="button">
                    <button className="button" onClick={() => setShowModal(true)}>CADASTRE SUA CLÍNICA</button>
                    <button className="home" onClick={renderMain}>HOME</button>
                </div>
            </div>
        </section>

        <section className="main">
            <div className="content">
                <div className="title">
                    <p>Clinicas Já cadastradas</p>
                </div>
                {/*Início do map, invertendo a ordem do array para exibir em tela do mais recente para o mais antigo */}
                {clinics.slice(0).reverse().map((c, index) => {
                    return (
                        <div className="clinic">
                            <p><span>Dados</span></p>
                            <p><span>Nome:</span> {c.name}</p>
                            <p><span>Cpf:</span> {c.cpf}</p>
                            <p><span>Capital Social:</span> R${c.capital}</p>
                            <hr />
                            <p><span>Endereço</span></p>
                            <p><span>Rua:</span> {c.street}</p>
                            <p><span>Número:</span> {c.number}</p>
                            <p><span>Bairro:</span> {c.district}</p>
                            <p><span>Cidade:</span> {c.city}</p>
                            <p><span>Estado:</span> {c.uf}</p>
                            <p><span>CEP:</span> {c.cep}</p>
                            <p className="position">Cadastrado em:  {c.createdAt}</p>
                        </div>
                    )
                })}
                {/*Fim do map */}
            </div>

            {/*Início da modal */}
            <div className="backdrop" style={{display: (modalShow ? 'block' : 'none')}} onClick={() => setShowModal(false)}></div>
            <div className="modal-container" style={{display: (modalShow ? 'block' : 'none')}}>
                <div className="modal-content">
                    <div className="header-modal">
                        <p>Insira os dados da clínica</p>
                    </div>
                    <div className="main-modal">
                        <Form />
                    </div>
                </div>
            </div>
            {/*Fim da modal */}
        </section>
        </div>
        {/*Renderizando o footer */}
        <Footer />
        {/*Fim do html do Listing */}
        </>
    )
}