import { RequiredFieldValidation } from './required-field-validation'
import { RequiredFieldError } from '../erros'

describe('RequiredFieldValidation', () => {
  test('Should return erro if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })
})
