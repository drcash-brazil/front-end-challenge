import { LoadClinics } from '@/domain/usecases'
import { RemoteLoadClinics } from '@/data/usecases/http'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteLoadClinics = (): LoadClinics =>
  new RemoteLoadClinics(makeApiUrl('clinics'), makeAxiosHttpClient())
