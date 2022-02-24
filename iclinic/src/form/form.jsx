import React ,{ useState } from "react";

import Pagination from './pagination/index';
import 'antd/dist/antd.css';
import Swal from 'sweetalert2';

import Step1 from './pages/first';
export default function Form() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    user: {},
    profile: {},
    settings: {}
  });


  function goNextPage() {
    if (page === 4) return;
    setPage((page) => page + 1);
  }

  function updateData(type, newData) {
    setData((data) => {
      return { ...data, [type]: newData };
    });
  }

  function submit() {
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className="App">

      <div>
      <Pagination current={page} />
      </div>


      {/* the content goes here */}
      <div>
        {page === 1 && <Step1 />}
        {page === 2 && (
          <OnboardingTwo data={data.profile} update={updateData} />
        )}
        {page === 3 && (
          <OnboardingThree data={data.settings} update={updateData} />
        )}
        {page === 4 && <Step1 />}
      </div>

      {page !== 4 && <button onClick={goNextPage}>Go Next</button>}
      {page === 4 && (
        <button type="submit" onClick={submit}>
          Submit
        </button>
      )}
    </div>
  );
}

function OnboardingOne({ data, update }) {
  const newData = {};

  return (
    <div>
      i am page one
      <button onClick={() => update("user", newData)}></button>
    </div>
  );
}

function OnboardingTwo({ data, update }) {
  return <div>i am page two</div>;
}

function OnboardingThree({ data, update }) {
  return <div>i am page three</div>;
}

function OnboardingFour({ data, update }) {
  return <div>i am page four</div>;
}
