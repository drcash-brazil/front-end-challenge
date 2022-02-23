import React ,  {useState , useEffect} from 'react'
import {NavBar , Hero} from '../../components';
import Splash from '../splash';

function Home() {

const [loading , setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 4000);

  }, []);
  return (
<>
     {

   loading ? (<Splash/>) : (<> <NavBar/><Hero/></>)

     }
  </>

    )
}

export default Home;
