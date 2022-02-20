import * as faker from 'faker'

import { AddClinicPayload, Clinic } from '@/domain/models'

export const mockClinic = (): Clinic => ({
  id: faker.datatype.uuid(),
  name: faker.internet.userName(),
  address: faker.address.cityName(),
  cpf: faker.datatype.string()
})

export const mockAddClinicPayload = (): AddClinicPayload => ({
  name: faker.internet.userName(),
  address: faker.address.cityName(),
  cpf: faker.datatype.string()
})
