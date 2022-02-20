import { Clinic } from '@/domain/models'

export interface LoadClinicById {
  load(): Promise<Clinic>
}

export namespace LoadClinicById {
  export type Model = Clinic
}
