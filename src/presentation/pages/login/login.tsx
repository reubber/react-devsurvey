import React, { useState } from 'react'
import Styles from './login-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import { LoginHeader, Footer, InputBase, FormStatusBase } from '@/presentation/components'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const LoginCmp: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <InputBase type='email' name='email' placeholder='Digite seu e-mail' state={undefined} setState={undefined} />
          <InputBase type='password' name='password' placeholder='Digite sua senha' state={undefined} setState={undefined} />
          <button className={Styles.submit} type='submit'>Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatusBase state={state.isLoading} />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export const Login = LoginCmp
