import React, { FC } from 'react'
import { AskProvider } from './Context'
import { RouteComponentProps } from 'react-router'
import { QuestionInput } from './QuestionInput'

interface Params {
  readonly mentionId: string
}

const Ask: FC<RouteComponentProps<Params>> = ({ match }) => (
  <AskProvider mentionId={match.params.mentionId}>
    <QuestionInput />
  </AskProvider>
)

export default Ask
