import { RemoteAddressModel } from '@/data/models'
import { Address } from '@/domain/models'
import { PagesRoutes } from '@/main/constants'

export const thisElseThat = (item: boolean, doThis: any, doThat: any) => item ? doThis : doThat

export const makeSpecificClinicLink = (name: string) => `${PagesRoutes.Clinics}/${name.replace(' ', '-')}`

export const mapRemoteAddress = (remoteAddress: RemoteAddressModel): Address => {
  if (remoteAddress) {
    return {
      city: remoteAddress.bairro,
      cityShortFrom: remoteAddress.uf,
      complement: remoteAddress.complemento,
      district: remoteAddress.bairro,
      publicPlace: remoteAddress.logradouro,
      zipCode: remoteAddress.cep
    }
  }

  return {} as Address
}
