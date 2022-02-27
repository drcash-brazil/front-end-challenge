import React ,  {useState , useEffect} from 'react'
import {NavBar , Hero , MiddleBannerQ , MiddleBannerA , Features} from '../../components';
import Splash from '../splash';

function Home() {

const [loading , setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1500);

  }, []);
  return (
<>
     {

   loading ? (<Splash/>) : (<> <NavBar/><Hero/> <Features/> <MiddleBannerA/> <MiddleBannerQ/> </>)

     }
  </>

    )
}

export default Home;
