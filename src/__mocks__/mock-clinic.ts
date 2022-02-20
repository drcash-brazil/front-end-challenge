import * as faker from 'faker'

import { Clinic } from '@/domain/models'

export const mockClinic = (): Clinic => ({
  id: faker.datatype.uuid(),
  name: faker.internet.userName(),
  address: faker.address.cityName(),
  cpf: faker.datatype.string()
})
