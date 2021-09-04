import Second from "../Second/second"
import ReactDOM from 'react-dom'
import React from 'react'
import { useEffect } from "react"

/*Importando biblioteca Jquery */
import $ from 'jquery'
import 'jquery-mask-plugin/dist/jquery.mask.min.js'

/*Importante pacote sweet alert, para personalizar o alert do javascript */
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'


export default function First(props){

    /*Função para preencher os campos da primeira página do form, após retornar a ela pela segunda página */
    useEffect(() => {
        if(props.firstData !== undefined){
            document.getElementById('name').value = props.firstData.name
            document.getElementById('cpf').value = props.firstData.cpf
            document.getElementById('capital').value = props.firstData.capital
        }
    })

    /*Função para exibir a segunda página do form após clicar em avançar na primeira página */
    function renderSecond(){
        /*Criando o json que será responsável por armazenar os dados da primeira página do form */
        var jsonFirsth = {
            'name': document.getElementById('name').value,
            'cpf': document.getElementById('cpf').value,
            'capital': document.getElementById('capital').value
        }

        ReactDOM.render(
            <React.StrictMode>
                {/*Enviando o json como parâmetro para a segunda página e também recuperando o json da segunda página para enviar novamente para ela depois */}
                <Second firstData={jsonFirsth} secondData={props.secondData}/>
            </React.StrictMode>,
            document.getElementById('form')
        );
    }

    /*Máscara jQuery para o campo 'cep' */
    $(document).ready(function () {
        $('#cpf').mask('000.000.000-40', { reverse: false });
    });

    /*Máscara jQuery para o campo 'valor' */
    $(document).ready(function () {
        $('#capital').mask('000.000.000.000.000,00', { reverse: true });
    });

    /*Função para validação dos dados do form da primeira página, garantir que todos os campos estejam preenchidos */
    function handleClick(e) {
        e.preventDefault();
        var name = document.getElementById('name').value
        var cpf = document.getElementById('cpf').value
        var capital = document.getElementById('cpf').value
        var error = false
        if(name === "" || cpf === "" || cpf < 11 || capital === ""){
            error = true
            /*Utilizando o sweet alert importando anteriormente */
            Swal.fire({
                title: 'Erro!',
                text: 'Preencha todos os dados corretamente para continuar',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        else if(error !== true){
            renderSecond()
        }
    }

    return(
        <>
        {/*Começo do html da primeira página do form*/}
        <div className="input-box">
            <input name="name" type="text" id="name" placeholder="Nome da clínica"/>
        </div>
        <div className="input-box">
            <input name="cpf" type="text" id="cpf" placeholder="CPF do responsável"/>
        </div>
        <div className="input-box">
            <input name="capital" type="text" id="capital" placeholder="Capital social da clínica"/>
        </div>
        <div className="input-box button-box">
            <button className="cancel">Cancelar</button>
            <button onClick={handleClick}>Avançar</button>
        </div>
        {/*Fim do html da primeira página do form*/}
        </>
    )
}