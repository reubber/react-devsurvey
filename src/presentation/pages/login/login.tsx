import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import { LoginHeader, Footer, InputBase, FormStatusBase } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation

}

const LoginCmp: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })
  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <InputBase type='email' name='email' placeholder='Digite seu e-mail' state={undefined} setState={undefined} />
          <InputBase type='password' name='password' placeholder='Digite sua senha' state={undefined} setState={undefined} />
          <button data-testid="submit" disabled className={Styles.submit} type='submit'>Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatusBase state={state.isLoading} />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export const Login = LoginCmp
