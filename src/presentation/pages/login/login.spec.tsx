import React from 'react'
import { render } from '@testing-library/react'
import { Login } from './login'

// garantir que os components nao sejam renderizados no inicio.
describe('Login Component', () => {
  test('Should not render spinner and error on start', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})