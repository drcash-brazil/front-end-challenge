import React from 'react'
import {Layout} from '../../components'
import MainContent from '../../components/UI/clinic-content'
import AddButon from '../../components/UI/clinic-content/button';
function Clinic() {
  return (
    <Layout title="Iclinic | Clinicas">
    <MainContent/>
    <AddButon/>
    </Layout>
  )
}

export default Clinic;