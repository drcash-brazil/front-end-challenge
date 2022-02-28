import { ClinicEnum, ClinicFields } from '@/domain/models'

type FormProps = { name: ClinicFields, placeholder: string }

export const formDateOne: FormProps[] = [
  {
    name: ClinicEnum.Name,
    placeholder: 'Name'
  },
  {
    name: ClinicEnum.Cpf,
    placeholder: 'CPF'
  },
  {
    name: ClinicEnum.SocialCapital,
    placeholder: 'Social Capital'
  }
]

export const formDateTwo: FormProps[] = [
  {
    name: ClinicEnum.Address,
    placeholder: '01001000'
  }
]
