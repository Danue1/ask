import React, { FC, useContext, createContext, useMemo, useState } from 'react'
import { requestToPost } from '../../../functions/request'

type Context = State & Dispatch

interface State {
  readonly mentionId: string
}

interface Dispatch {
  readonly loginByMentionId: (mentionId: string) => void
}

const Context = createContext<Context>({} as Context)

export const useSElf = () => useContext(Context)

export const SelfProvider: FC = ({ children }) => {
  const [mentionId, setMentionId] = useState<string>('')

  const createContext = (): Context => ({
    mentionId,
    loginByMentionId(mentionId) {
      const path = ''
      requestToPost(path)
      setMentionId(mentionId)
    }
  })

  const context = useMemo(createContext, [mentionId])

  return <Context.Provider value={context}>{children}</Context.Provider>
}
