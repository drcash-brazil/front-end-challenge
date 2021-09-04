import First from "../First/first"
import Third from "../Third/third";
import ReactDOM from 'react-dom';
import React from "react";
import { useEffect } from "react";

/*Importando biblioteca Jquery */
import $ from 'jquery'
import 'jquery-mask-plugin/dist/jquery.mask.min.js'

/*Importante pacote sweet alert, para personalizar o alert do javascript */
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'


export default function Second(props){

    /*Função para preencher os campos da segunda página do form, após retornar a ela pela primeira página */
    useEffect(() => {
        if(props.secondData !== undefined){
            document.getElementById('cep').value = props.secondData.cep
            document.getElementById('street').value = props.secondData.street
            document.getElementById('district').value = props.secondData.district
            document.getElementById('number').value = props.secondData.number
            document.getElementById('city').value = props.secondData.city
            document.getElementById('uf').value = props.secondData.uf
        }
    })

    /*Função para exibir a primeira página do form após clicar em retornar na segunda página */
    function renderFirst(){
        /*Criando o json que será responsável por armazenar os dados da segunda página do form */
        var jsonSecond = {
            'cep': document.getElementById('cep').value,
            'street': document.getElementById('street').value,
            'district': document.getElementById('district').value,
            'number': document.getElementById('number').value,
            'city': document.getElementById('city').value,
            'uf': document.getElementById('uf').value
        }
        
        ReactDOM.render(
            <React.StrictMode>
                {/*Enviando o json como parâmetro para a primeira página e também recuperando o json da primeira página para enviar novamente para ela quando retornar */}
                <First firstData={props.firstData} secondData={jsonSecond}/>
            </React.StrictMode>,
            document.getElementById('form')
        );
    }

    /*Função para exibir a segunda terceira do form após clicar em salvar na segunda página */
    function renderThird(){
        ReactDOM.render(
            <React.StrictMode>
                <Third/>
            </React.StrictMode>,
            document.getElementById('form')
        );
        /*Chamando a função que realizará o post dos dados no mockapi.io */
        postMock()
    }

    /*Função que recupera o cep da api viaCEP baseado no cep inserido no campo cep do form */
    function getCep(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        /*Recuperando o value do campo cep */
        var cep = document.getElementById('cep').value
        
        fetch("https://viacep.com.br/ws/"+cep+"/json/", requestOptions)
        .then /* Liga-se à resolução da promessa do FETCH. */ ((response) => response.json() /* JSON retorna OUTRA promessa. */ )
        .then /* Liga-se à resolução da promessa método JSON de RESPONSE. */ ((addres) =>{
            /* Passa o JSON recebido como parâmetro para a função insertAddres */
            insertAddres(addres)
        })
        .catch(console.error);
    }

    /*Função responsável por inserir o endereço nos campos do form, baseado no endereço recuperado anteriormente pelo cep informado */
    function insertAddres(addres){
        document.getElementById('street').value=(addres.logradouro);
        document.getElementById('district').value=(addres.bairro);
        document.getElementById('city').value=(addres.localidade);
        document.getElementById('uf').value=(addres.uf);
    }

    /*Função para validação dos dados do form da segunda página, garantir que todos os campos estejam preenchidos */
    function handleClick(e) {
        e.preventDefault();
        var cep = document.getElementById('cep').value
        var street = document.getElementById('street').value
        var district = document.getElementById('district').value
        var number = document.getElementById('number').value
        var city = document.getElementById('city').value
        var uf = document.getElementById('uf').value
        var error = false
        if(cep === "" || cep < 8 || street === "" || district === "" || number === "" || city === "" || uf === ""){
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
            /*Chamando a função que renderizará a terceira página do form */
            renderThird()
        }
    }

    /*Função que realizará o post dos dados recuperados nos inputs no mockapi.io */
    function postMock(){
        /*Recuperando a data atual para enviar para a API */
        var date = new Date()
        var day = String(date.getDate()).padStart(2, '0')
        var month = String(date.getMonth() + 1).padStart(2, '0')
        var year = date.getFullYear()
        var today = day + '/' + month + '/' + year

        /*Recuperando a hora atual para enviar para a API */
        var hour = String(date.getHours()).padStart(2, '0')
        var minutes = String(date.getMinutes()).padStart(2, '0')
        var currentTime = hour + ':' + minutes

        var axios = require('axios');
        /*Criando o json que será enviado para a API */
        var data = JSON.stringify({
            "createdAt": today + ' - ' + currentTime,
            "name": props.firstData.name,
            "cpf": props.firstData.cpf,
            "capital": props.firstData.capital,
            "cep": document.getElementById('cep').value,
            "street": document.getElementById('street').value,
            "district": document.getElementById('district').value,
            "number": document.getElementById('number').value,
            "city": document.getElementById('city').value,
            "uf": document.getElementById('uf').value
        });

        /*Config do método POST */
        var config = {
        method: 'post',
        url: 'https://6132a37cab7b1e001799b58a.mockapi.io/api/v1/clinics/',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        })
        .catch(function (error) {
        console.log(error);
        }); 
    }

    /*Máscara jQuery para o campo 'cep' */
    $(document).ready(function () {
        $('#cep').mask('00000-000', { reverse: false });
    });


    return(
        <>
        {/*Começo do html da segunda página do form*/}
        <div className="input-box">
            <input name="cep" type="cep" id="cep" size="10" maxLength="9" placeholder="CEP" onBlur={getCep}/>
            <input name="street" type="street" id="street" placeholder="Rua"/>
        </div>
        <div className="input-box">
            <input name="district" type="district" id="district" placeholder="Bairro"/>
            <input name="number" type="text" id="number" placeholder="Numero"/>
        </div>
        <div className="input-box">
            <input name="city" type="city" id="city" placeholder="Cidade"/>
            <input name="uf" type="uf" id="uf" placeholder="UF"/>
        </div>
        <div className="input-box button-box">
            <button className="cancel">Cancelar</button>
            <button onClick={renderFirst}>Retornar</button>
            <button type="submit" onClick={handleClick} className="save">Salvar</button>
        </div>
        {/*Fim do html da segunda página do form*/}
        </>
    )
}