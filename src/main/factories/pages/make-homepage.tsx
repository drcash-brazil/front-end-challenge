import React from 'react'

import { HomePage } from '@/presentation/pages'
import { makeRemoteLoadClinics } from '@/main/usecases'

export const MakeHomePage: React.FC = () => {
  return (
    <HomePage loadClinics={makeRemoteLoadClinics()}/>
  )
}
