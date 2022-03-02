import { render, screen } from '@/__mocks__'

import { Footer } from './footer'

const makeSut = () => render(<Footer />)

describe('Button Component', () => {
  it('Should render as expected', () => {
    makeSut()

    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('message')).toBeInTheDocument()
    expect(screen.getByText('Send')).toBeInTheDocument()
    expect(screen.getByText(`Reclins ${new Date().getFullYear()} © Copyright`)).toBeInTheDocument()
  })
})
