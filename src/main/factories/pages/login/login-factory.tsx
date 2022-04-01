import React from 'react'
import { makeRemoteAuthentication } from '../../usecases/authentication/remote-authentication-factory'
import { Login } from '@/presentation/pages'
import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/builder/validation-builder'

export const makeLogin: React.FC = () => {
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()

  ])
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={validationComposite}
    />
  )
}
