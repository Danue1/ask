import { useState, useEffect } from 'react'
import { useAsk } from '../Context'

interface Info {
  readonly question: {
    readonly text: string
    readonly createdAt: Date
  }
  readonly answer: {
    readonly text: string
    readonly createdAt: Date
  }
}

type LoadNextAnswerList = () => void

export const useAnswerList = (): [Info[], LoadNextAnswerList] => {
  const { mentionId } = useAsk()

  const [answerList, setAnswerList] = useState<Info[]>([])

  useEffect(() => {
    setAnswerList(preset)
  }, [mentionId])

  const loadNextAnswerList = () => {
    //
  }

  return [answerList, loadNextAnswerList]
}

const preset: Info[] = [
  // {
  //   question: {
  //     text: 'QUESTION',
  //     createdAt: new Date()
  //   },
  //   answer: {
  //     text: 'ANSWER',
  //     createdAt: new Date()
  //   }
  // }
]
