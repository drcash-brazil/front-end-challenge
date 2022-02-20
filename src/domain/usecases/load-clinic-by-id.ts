import { Clinic } from '@/domain/models'

export interface LoadClinicById {
  load(id: string): Promise<Clinic>
}

export namespace LoadClinicById {
  export type Model = Clinic
}
