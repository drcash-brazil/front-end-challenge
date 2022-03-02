import { render, screen } from '@/__mocks__'

import { FormCarousel } from './form-carousel'

const dataItems = [1, 2, 3]

const makeSut = (props?: any) => render(<FormCarousel items={props ?? dataItems} />)

describe('Button Component', () => {
  it('Should render 3 dots', () => {
    makeSut([1, 2, 3])

    expect(screen.getAllByRole('navigation')).toHaveLength(3)
  })

  it('Should render 3 dots', () => {
    makeSut([1, 2, 3, 4])

    expect(screen.getAllByRole('navigation')).toHaveLength(4)
  })
})
