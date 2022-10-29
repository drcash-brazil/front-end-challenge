import { useParams } from "react-router-dom"

const Clinics: React.FC = () => {
   const { rede, clinica } = useParams()
   return (
      <>
         <h1>Hello world!</h1>
         <h1>
            Hello clinica {clinica} da rede {rede}
         </h1>
      </>
   )
}

export default Clinics

