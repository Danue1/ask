import React, { FC } from 'react'
import styled from 'styled-components'
import { useAnswerList } from './useAnswerList'

const Layout = styled.div`
  padding: 1rem;

  background-color: white;
`

const Card = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`

const Question = styled.div`
  font-weight: bolder;
`

const AnswerText = styled.div``

const AnswerDatetime = styled.div``

export const Answers: FC = () => {
  const [answerList] = useAnswerList()

  if (!answerList.length) {
    return <Layout>답변이 아직 없어요</Layout>
  }

  return (
    <Layout>
      {answerList.map(({ question, answer }, index) => (
        <Card key={index}>
          <Question>{question.text}</Question>
          <AnswerText>{answer.text}</AnswerText>
          <AnswerDatetime>{answer.createdAt.toISOString()}</AnswerDatetime>
        </Card>
      ))}
    </Layout>
  )
}
