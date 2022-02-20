export type Clinic = {
  id: string
  name: string
  cpf: string
  address: string
}

export type AddClinicPayload = {
  name: string
  cpf: string
  address: string
}
