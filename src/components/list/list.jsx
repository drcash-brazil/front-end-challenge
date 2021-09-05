import React, { useEffect, useState } from 'react'
import "./list.css"
// IMPORT DO AXIOS PARA FAZER O GET DA MOCKY API
import axios from 'axios'

const List = () => {

    // FUNÇÃO PARA BUSCAR AS CLÍNICAS CADASTRADAS E TRAZER PARA A LISTAGEM
    const [clinicas, setClinicas] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/clinicas')
        .then((response) => {
            setClinicas(response.data);
            console.log(clinicas.data)
        });

    }, []);
    


    return (
    <div id="List" className="list">
        {/* HEADER E TÍTULOS DA LISTAGEM DE CLÍNICAS */}
        <h1 className="about-list">CONHEÇA NOSSAS CLÍNICAS E PARCEIRAS</h1>
        <div className="class-size">
        <div class="container-list"> 
            <thead className="content-thead">
                <tr>
                    <th>Nome</th>
                    <th>Logradouro</th>
                    <th>Número</th>
                    <th>UF</th>
                </tr>
            </thead>
            
        {/* MAP TRAZENDO AS INFORMAÇÕES CADASTRADAS NA API */}
        {clinicas.map((clinica) => (
                <div className="map-list">
                    <table>
                        <tbody>
                            <tr>
                                <td>{clinica.nome}</td>
                                <td>{clinica.logradouro}</td>
                                <td>{clinica.numero}</td>
                                <td>{clinica.uf}</td>
                            </tr>    
                        </tbody>
                    </table>
                </div>
                    
                ))}
        </div>
        </div>
    </div>
    )
}

export default List
