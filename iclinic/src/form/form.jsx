import React ,{ useState } from "react";
import Pagination from './pagination/index';
import 'antd/dist/antd.css';
import openNotification from '../components/UI/notification'
import Button from "@material-ui/core/Button";
import Step1 from './pages/first';
import Step2 from './pages/second';
import Preview from './pages/preview';
import axios from 'axios';
export default function Form(props) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  function goNextPage() {
    if (page === 4) return;
    setPage((page) => page + 1);
  }


  const handleSetData1 =(data)=> {
  console.log(data);
  setData(data);
  }

  const handleSetData2 =(data)=> {
  console.log(data);
  setData1(data);
  }

   const submit = () => {
  const {nome ,cpf , capital } = data;
  const {  Estado ,rua ,municipio } = data1;
   axios.post('https://620fa753ec8b2ee283481997.mockapi.io/Iclinic/clinicas', {
  nome,
  cpf,
  capital ,
  Estado ,
  municipio ,
  rua

   });


    openNotification('Clinica registada com sucesso') 
   
   }
  return (
    <div className="FormParent">

      <div>
      <Pagination current={page} />
      </div>

      <div>
        {page === 1 && <Step1  onChange={handleSetData1}  />}
        {page === 2 && (
          <Step2   onChange={handleSetData2} />
        )}
        {page === 3 && (
          <Preview data={[ data , data1]} >  </Preview>
        )}
        
      </div>

      {page !== 3 && <Button onClick={goNextPage} type="submit" color="primary" variant="contained" >Avançar</Button>}
      {page === 3 && (
        <Button type="submit"  variant="contained" color="primary" onClick={submit}>
          Submit
        </Button>
      )}
    </div>
  );
}

