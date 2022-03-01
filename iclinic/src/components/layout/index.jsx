import React from 'react'
import Helmet from 'react-helmet';
import  NavBar  from '../UI/app-bar/index';
import Footer from '../UI/footer';
function Layout({title ,children}) {
  return (
    <>
     <Helmet>
       <meta charSet="utf-8" />
       <title>{title}</title>            
     </Helmet>
     <NavBar/>
     <main>
         {children}
     </main>
     <Footer/>
    </>
  )
}

export default Layout