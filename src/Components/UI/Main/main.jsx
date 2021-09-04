import React from 'react'
import ReactDOM from 'react-dom';
import './main.css'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Listing from '../ListingPage/listing'

/*Importando o pacote Background slider responsável por fazer o slider das imagens na tela Home*/
import BackgroundSlider from 'react-background-slider'
/*Importando as imagens para o slider */
import imageSlider1 from '../../../Utils/Images/dentist.jpg'
import imageSlider2 from '../../../Utils/Images/lines.jpg'
import imageSlider3 from '../../../Utils/Images/doctor.jpg'

/*Importando as imagens para o component about */
import imageBackgroundAbout1 from '../../../Utils/Images/register.png'
import imageBackgroundAbout2 from '../../../Utils/Images/security.png'

/*Importando o ícone de seta do pacote react-icons utilizado na home */
import { FaArrowCircleDown } from 'react-icons/fa'

export default function Main(){

    /*Função que renderizará o component Listing ao clicar no botão cadastrar e nos links da section about */
    function renderListing(){
        ReactDOM.render(
            <React.StrictMode>
                <Listing/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    var lineBreak = '\n'

    return(
        <>
        {/*Início do html do component Main */}
        {/*Renderizando o component Header */}
        <Header />
        <section className="hero">
            {/*Renderizando as imagens de background com o backgroundSlider importado anteriormente */}
            <BackgroundSlider images={[ imageSlider1, imageSlider2, imageSlider3 ]} duration={5} transition={1.5}/>
            <div className="content">
                <div className="content-text">
                    <div className="title">
                        <h1>Cadastre já a sua clínica em nossa rede!</h1>
                    </div>
                    <div className="text">
                        <p>Obtenha as melhores vantagens.</p>
                    </div>
                    <div className="button">
                        <button onClick={renderListing}>CADASTRAR</button>
                    </div>
                    <div className="arrow">
                        <FaArrowCircleDown />
                    </div>
                </div>
            </div>
        </section>
        <section className="about">
            <div className="content">
                <div className="text1">
                    <p className="white-space"><span onClick={renderListing}>Cadastre a sua clínica</span> para que{lineBreak}possamos cada vez mais ampliar a{lineBreak}nossa rede e sempre mantermos{lineBreak}um constante aprimoramento de{lineBreak}nossa gerência!</p>
                </div>
                <div className="image" >
                    <img src={imageBackgroundAbout1} alt="imagem cadastre-se" />
                </div>
                <div className="image">
                    <img src={imageBackgroundAbout2} alt="imagem dados seguros" />
                </div>
                <div className="text2">
                    <p className="white-space">Garantimos sempre a total{lineBreak}<span onClick={renderListing}>integridade e segurança</span> de todos os seus{lineBreak}dados cadastrados conosco</p>
                </div>
            </div>
        </section>
        {/*Renderizando o component footer */}
        <Footer />
        {/*Início do html do component Main */}
        </>
    )
}