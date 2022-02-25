/* eslint-disable no-unused-vars */
export enum ClinicEnum {
  Id = 'id',
  Name = 'name',
  Cpf = 'cpf',
  Address = 'address',
  SocialCapital = 'socialCapital'
}

export type Clinic = {
  [ClinicEnum.Id]: string
  [ClinicEnum.Name]: string
  [ClinicEnum.Cpf]: string
  [ClinicEnum.Address]: string
  [ClinicEnum.SocialCapital]: string
}

export type AddClinicPayload = {
  [ClinicEnum.Name]: string
  [ClinicEnum.Cpf]: string
  [ClinicEnum.Address]: string
  [ClinicEnum.SocialCapital]: string
}
