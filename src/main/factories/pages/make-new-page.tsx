import { NewPage } from '@/presentation/pages'
import { makeRemoteLoadAddressByZipCode, makeRemoteAddClinic } from '@/main/usecases'

export const MakeNewPage = () =>
  <NewPage
    loadAddress={makeRemoteLoadAddressByZipCode()}
    addClinic={makeRemoteAddClinic()}
  />
