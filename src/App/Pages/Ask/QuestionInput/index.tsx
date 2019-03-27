import React, { FC } from 'react'
import { useAsk } from '../Context'

export const QuestionInput: FC = () => {
  const { mentionId } = useAsk()

  console.log(mentionId)

  return <div>QuestionInput</div>
}
