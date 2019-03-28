import React, { FC, createContext, useContext, useMemo, useEffect, useState } from 'react'

type Context = State & Dispatch

interface State {
  readonly mentionId: string
  readonly name: string
  readonly profile: string
  readonly questionCount: number
  readonly answerCount: number
}

interface Dispatch {}

const Context = createContext<Context>({} as Context)

export const useAsk = () => useContext(Context)

type Props = Pick<State, 'mentionId'>

export const AskProvider: FC<Props> = ({ mentionId, children }) => {
  const [name, setName] = useState<string>('')
  const [profile, setProfile] = useState<string>('')
  const [questionCount, setQuestionCount] = useState<number>(0)
  const [answerCount, setAnswerCount] = useState<number>(0)

  useEffect(() => {
    setName(mentionId)
    setProfile('profile')
    setQuestionCount(0)
    setAnswerCount(0)
  }, [mentionId])

  const createContext = (): Context => ({
    mentionId,
    name,
    profile,
    questionCount,
    answerCount
  })

  const context = useMemo(createContext, [mentionId, name])

  return <Context.Provider value={context}>{children}</Context.Provider>
}
