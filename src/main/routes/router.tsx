import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { PagesRoutes } from '@/main/constants'
import { MakeHomePage, MakeClinicPage } from '@/main/factories/pages'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={PagesRoutes.Homepage} element={<MakeHomePage />} />
      <Route path={`${PagesRoutes.Clinics}/:id`} element={<MakeClinicPage />} />
    </Routes>
  )
}

export default Router
