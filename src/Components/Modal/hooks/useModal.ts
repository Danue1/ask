import { useState } from 'react'

export const useModal = () => {
  const [state, setState] = useState(false)

  return {
    state,
    open() {
      setState(true)
    },
    close() {
      setState(false)
    }
  }
}
