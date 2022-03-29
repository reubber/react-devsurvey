import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import { Spinner } from '@/presentation/components'

type Props = {
  state: any
}

const FormStatus: React.FC<Props> = (props: Props) => {
  const { state, errorState } = useContext(Context)
  const { isLoading } = state
  const { mainError } = errorState
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainError && <span data-testid="main-error" className={Styles.error}>{mainError}</span>}
    </div>
  )
}

export default FormStatus
