import * as faker from 'faker'

import { Address } from '@/domain/models'
import { RemoteAddressModel } from '@/data/models/remote-address-model'

export const mockAddress = (): Address => ({
  complement: faker.address.secondaryAddress(),
  publicPlace: faker.address.direction(),
  cityShortFrom: faker.address.stateAbbr(),
  district: faker.address.cityName(),
  zipCode: faker.address.zipCode(),
  city: faker.address.city()
})

export const mockRemoteAddressModel = (): RemoteAddressModel => ({
  complemento: faker.address.secondaryAddress(),
  logradouro: faker.address.direction(),
  localidade: faker.address.cityName(),
  uf: faker.address.stateAbbr(),
  cep: faker.address.zipCode(),
  bairro: faker.address.city()
})
