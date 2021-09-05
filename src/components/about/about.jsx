import React from "react"
import MyFoto from "../images/myfoto.jpg"
import './about.css'

const About = () => {

    return (

        // **ESTILIZAÇÃO DA PÁGINA USANDO O BOOTSTRAP** //
        <div id="About" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap">
                <img className="profile-img" src={MyFoto} alt="Michael.."></img>
                </div>
                </div>

                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">Sobre nós</h1>   {/* TÍTULO DO ABOUT */}
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur fermentum dui non eleifend. Fusce ipsum lacus, vehicula nec pharetra in, sagittis id lectus. Maecenas pretium nisl eget scelerisque dapibus. Praesent odio libero, tempor et mattis non, iaculis a risus. Maecenas sit amet aliquam leo, ac pharetra erat. Aenean venenatis mattis nisi, a elementum lacus cursus accumsan. Curabitur consequat metus ac lacus eleifend iaculis. Praesent id lorem vitae tortor tincidunt hendrerit. Ut mattis efficitur mi vitae tempus. Quisque nec pulvinar nibh. Sed consequat nisi at tortor tempus, et molestie nibh egestas.
                    Fusce in est ligula. Aenean lacinia ultricies ante sed imperdiet. Suspendisse sit amet neque risus. Mauris lacinia dapibus mi eget vulputate. Fusce vulputate eu sem at volutpat. Suspendisse accumsan porta eros et blandit. Etiam tristique elit non nulla euismod vehicula. Maecenas at risus felis. Aenean augue elit, sollicitudin tincidunt dui quis, condimentum dictum turpis. Morbi nibh est, ultrices nec imperdiet ut, egestas ut arcu. Aliquam erat volutpat. Nullam eleifend placerat eros, molestie feugiat lorem laoreet nec. Proin luctus tellus id purus pellentesque venenatis. Aenean eget lacinia dolor. Etiam eget egestas libero. Nullam nec risus non nibh gravida hendrerit.
                    </p> {/* PARÁGRAFO MERAMENTE ILUSTRATIVO PARA TESTE */}
                </div>
            </div>
        </div>
    )
}

export default About
