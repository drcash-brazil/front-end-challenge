import { Clinic, AddClinicPayload } from '@/domain/models'

export interface AddClinic {
  add(clinic: AddClinicPayload): Promise<Clinic>
}

export namespace AddClinic {
  export type Model = Clinic
}
