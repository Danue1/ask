import React, { useContext, createContext, useMemo } from 'react'
import { withRouter } from 'react-router-dom'

type Context = State & Dispatch

interface State {
  readonly path: string
}

interface Dispatch {
  readonly goTo: (url: string) => void
}

const Context = createContext<Context>({} as Context)

export const useRouter = () => useContext(Context)

export const RouterProvider = withRouter(({ history, children }) => {
  const { pathname: path } = history.location

  const createContext = (): Context => ({
    path,
    goTo: history.push
  })

  const context = useMemo(createContext, [path])

  return <Context.Provider value={context}>{children}</Context.Provider>
})
