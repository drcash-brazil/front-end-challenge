import React from 'react'
import Helmet from 'react-helmet';
function Layout({title ,children}) {
  return (
    <>
     <Helmet>
       <meta charSet="utf-8" />
       <title>{title}</title>            
     </Helmet>
     <main>
         {children}
     </main>
    </>
  )
}

export default Layout