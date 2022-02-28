import { Address } from '@/domain/models'

export interface LoadAddressByZipCode {
  load(zipCode: string): Promise<Address>
}

export namespace LoadAddressByZipCode {
  export type Model = Address
}
