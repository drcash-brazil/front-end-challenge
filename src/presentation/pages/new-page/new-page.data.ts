import { AddClinicPayload, ClinicEnum } from '@/domain/models'

type FormDateOneProps = { name: any, placeholder: string }

export const formDateOne: FormDateOneProps[] = [
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

export const formDateTwo = [
  {
    name: ClinicEnum.Address,
    placeholder: 'Address'
  }
]
