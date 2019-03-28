import React, { FC, createContext, useContext, useMemo, useEffect, useState } from 'react'

type Context = State & Dispatch

interface State {
  readonly mentionId: string
  readonly name: string
  readonly profile: string
  readonly profileImage: string
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
  const [profileImage, setProfileImage] = useState<string>('')
  const [questionCount, setQuestionCount] = useState<number>(0)
  const [answerCount, setAnswerCount] = useState<number>(0)

  const updateUser = () => {
    if (process.env.NODE_ENV === 'production') {
      const proxyUrl = `https://lzp2g5v9a9.execute-api.ap-northeast-2.amazonaws.com/production/${mentionId}`
      fetch(proxyUrl, { mode: 'cors' })
        .then(value => value.text())
        .then(profileImage => {
          setProfileImage(profileImage)
          setName('다뉴엘')
          setProfile('profile')
          setQuestionCount(0)
          setAnswerCount(0)
        })
    } else {
      setProfileImage('https://pbs.twimg.com/profile_images/1093519811466866689/3jjO2o91.jpg')
      setName('다뉴엘')
      setProfile('profile')
      setQuestionCount(0)
      setAnswerCount(0)
    }
  }

  useEffect(updateUser, [mentionId])

  const createContext = (): Context => ({
    mentionId,
    name,
    profile,
    profileImage,
    questionCount,
    answerCount
  })

  const context = useMemo(createContext, [mentionId, name])

  return <Context.Provider value={context}>{children}</Context.Provider>
}
