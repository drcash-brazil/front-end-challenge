import React from 'react'
import "./footer.css"

// IMPOR DOS BOTÕES DE COMPARTILHARMENTO 
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share"


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        
                        <div className="d-flex">
                            <a href="https://api.whatsapp.com/send?phone=5511934497994&text=Preciso%20de%20atendimento%20sobre%20o%20iClinic!" target="_blank">+55 (11) 9 3449 7994</a>
                        </div>

                        <div className="d-flex">
                            <p><a href="mailto:mwsleonardo@gmail.com">mwsleonardo@gmail.com</a></p>
                        </div>

                        <div className="d-flex">
                            <p>Rua Nova prata 148, Vila Maria - São Paulo/SP</p>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">Quem somos</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Rede credenciada</a>
                                <br />
                                <a className="footer-nav">Cadastro de clínicas</a>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-5 col-md-5 col-sm-6 allign-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                            url={"https://www.drcash.com.br"}
                            quote={"iClinic inspirational challange"}
                            hashtag="#react"
                            >
                            <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>

                            <TwitterShareButton
                            url={"https://www.drcash.com.br"}
                            quote={"iClinic inspirational challange"}
                            hashtag="#react"
                            >
                            <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>

                            <LinkedinShareButton
                            url={"https://www.drcash.com.br"}
                            quote={"iClinic inspirational challange"}
                            hashtag="#react"
                            >
                            <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>

                            <WhatsappShareButton
                            url={"https://www.drcash.com.br"}
                            quote={"iClinic inspirational challange"}
                            hashtag="#react"
                            >
                            <WhatsappIcon className="mx-3" size={36}/>
                            </WhatsappShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;iClinic | Todos os direitos reservados
                        </p>
                    
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
