import { LoadAddressByZipCode } from '@/domain/usecases'
import { RemoteLoadAddressByZipCode } from '@/data/usecases'

import { makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteLoadAddressByZipCode = (): LoadAddressByZipCode =>
  new RemoteLoadAddressByZipCode('viacep.com.br/ws/', makeAxiosHttpClient())
