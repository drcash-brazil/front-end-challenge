import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { MakeHomePage } from '@/main/factories/pages'
import { PagesRoutes } from '../constants'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PagesRoutes.Homepage} element={<MakeHomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
