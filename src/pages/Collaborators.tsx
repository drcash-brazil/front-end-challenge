import { useParams } from "react-router-dom"

const Collaborators: React.FC = () => {
   const { rede, clinica, funcionario } = useParams()
   return (
      <>
         <h1>Hello world!</h1>
         <h1>
            Oi funcionario {funcionario} da clinica {clinica} da rede {rede}
         </h1>
      </>
   )
}

export default Collaborators

