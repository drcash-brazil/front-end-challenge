import { AddClinic } from '@/domain/usecases'
import { RemoteAddClinic } from '@/data/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteLoadClinics = (): AddClinic =>
  new RemoteAddClinic(makeApiUrl('clinics'), makeAxiosHttpClient())
