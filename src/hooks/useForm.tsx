/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'

export const useForm = <T extends Object> (initState: T) => {
  const [state, setState] = useState(initState)

  const onChange = <K extends Object> (value: K, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value
    })
  }

  return {
    ...state,
    form: state,
    onChange
  }
}
