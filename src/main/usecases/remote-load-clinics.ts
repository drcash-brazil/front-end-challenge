import { LoadClinics } from '@/domain/usecases'
import { RemoteLoadClinics } from '@/data/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteLoadClinics = (): LoadClinics =>
  new RemoteLoadClinics(makeApiUrl('clinics'), makeAxiosHttpClient())
