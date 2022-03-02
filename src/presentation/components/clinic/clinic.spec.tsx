import { mockClinic, render, screen } from '@/__mocks__'

import { Clinic } from './clinic'

const mockedClinic = mockClinic()

const makeSut = () => render(<Clinic {...mockedClinic} />)

describe('Button Component', () => {
  it('Should render as expected', () => {
    makeSut()

    expect(screen.getByText(mockedClinic.name)).toBeInTheDocument()
    expect(screen.getByText('CPF')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText(`: ${mockedClinic.cpf}`)).toBeInTheDocument()
    expect(screen.getByText(`: ${mockedClinic.address}`)).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })
})
