import { render, screen } from '@/__mocks__'

import { Container } from './container'

const makeSut = () => render(<Container>Child Component</Container>)

describe('Button Component', () => {
  it('Should render as expected', () => {
    makeSut()

    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })
})
