import { render, screen, userEvent } from '@/__mocks__/test-suite'

import { SpaceButton } from './space-button'

const makeSut = (props?: any) => render(<SpaceButton {...props}>Button</SpaceButton>)

describe('Button Component', () => {
  it('Should render as expected', () => {
    makeSut()

    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  it('Should accept clicks', () => {
    const clickFn = jest.fn()

    render(<SpaceButton onClick={clickFn}>Click Me</SpaceButton>)
    const btn = screen.getByText('Click Me')
    userEvent.click(btn)

    expect(clickFn).toHaveBeenCalled()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })

  it('Should render button in light mode', () => {
    makeSut()

    const btn = screen.getByText('Button')

    expect(btn).toHaveStyle({
      background: 'transparent'
    })
  })

  it('Should render button in dark mode', () => {
    makeSut({ dark: true })

    const btn = screen.getByText('Button')

    expect(btn).not.toHaveStyle({
      background: 'transparent'
    })
  })
})
