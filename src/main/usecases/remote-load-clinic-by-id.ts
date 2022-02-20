import { LoadClinicById } from '@/domain/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadClinicById } from '@/data/usecases'

export const makeRemoteLoadClinicById = (id: string): LoadClinicById =>
  new RemoteLoadClinicById(makeApiUrl(`clinics${id}`), makeAxiosHttpClient())
