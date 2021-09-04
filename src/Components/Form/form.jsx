import './form.css'
import First from './First/first'

export default function Form(){

    return(
        <>
        {/*Começo do html do form*/}
        <form className="form" id="form" method="get" action=".">
            {/*Chamando o component que renderizará a primeira página do form*/}
            <First />
        </form>
        {/*Fim do html do form*/}
        </>
    )
}