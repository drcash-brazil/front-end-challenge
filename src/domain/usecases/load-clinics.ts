import { Clinic } from '@/domain/models'

export interface LoadClinics {
  load(): Promise<Clinic[]>
}

export namespace LoadClinics {
  export type Model = Clinic[]
}
