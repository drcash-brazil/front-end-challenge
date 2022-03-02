import React from 'react'
import  NavBar  from '../UI/app-bar/index';
import Footer from '../UI/footer';

function Layout({children}) {
  return (
    <>
     <NavBar/>
     <main>
         {children}
     </main>
     <Footer/>
    </>
  )
}

export default Layout