import React from 'react'
import Styles from './login-styles.scss'
import { Spinner, LoginHeader, Footer, InputBase, FormStatusBase } from '@/presentation/components'

const LoginCmp: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2>Login</h2>
        <InputBase type='email' name='email' placeholder='Digite seu e-mail' state={undefined} setState={undefined} />
        <InputBase type='password' name='password' placeholder='Digite sua senha' state={undefined} setState={undefined} />
        <button className={Styles.submit} type='submit'>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatusBase state={{ isLoading: false }} >
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </FormStatusBase>
      </form>
      <Footer />
    </div>
  )
}

export const Login = LoginCmp
