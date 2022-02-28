import { LoadClinicById } from '@/domain/usecases'
import { RemoteLoadClinicById } from '@/data/usecases/http'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteLoadClinicById = (): LoadClinicById =>
  new RemoteLoadClinicById(makeApiUrl('clinics'), makeAxiosHttpClient())
