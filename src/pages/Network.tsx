import { useParams } from "react-router-dom"

const Network: React.FC = () => {
   const { rede } = useParams()
   return (
      <>
         <h1>Hello world!</h1>
         <h1>Hello {rede}</h1>
      </>
   )
}

export default Network

