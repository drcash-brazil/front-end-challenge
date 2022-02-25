import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { PagesRoutes } from '@/main/constants'

import { MakeHomePage, MakeClinicPage, MakeClinicsPage, MakeNewPage } from '@/main/factories/pages'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={PagesRoutes.Homepage} element={<MakeHomePage />} />
      <Route path={PagesRoutes.Clinics} element={<MakeClinicsPage />} />
      <Route path={`${PagesRoutes.Clinics}/:id`} element={<MakeClinicPage />} />
      <Route path={PagesRoutes.New} element={<MakeNewPage />} />
    </Routes>
  )
}

export default Router
