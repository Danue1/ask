import React, { FC, createContext, useContext, useMemo } from 'react'

type Context = State & Dispatch

interface State {
  readonly mentionId: string
}

interface Dispatch {}

const Context = createContext<Context>({} as Context)

export const useAsk = () => useContext(Context)

type Props = State

export const AskProvider: FC<Props> = ({ mentionId, children }) => {
  const createContext = (): Context => ({
    mentionId
  })

  const context = useMemo(createContext, [mentionId])

  return <Context.Provider value={context}>{children}</Context.Provider>
}
