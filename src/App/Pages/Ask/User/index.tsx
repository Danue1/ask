import React, { FC } from 'react'
import styled from 'styled-components'
import { useAsk } from '../Context'
import { At } from '../../../../Components/Icon/At'

const Layout = styled.div`
  display: grid;
  grid-gap: 0.25rem;

  padding: 1rem;

  background-color: white;
`

const Name = styled.div`
  font-size: 1.5rem;
`

const MentionId = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1.25rem;

  color: hsl(0 0% 36%);
`

const Profile = styled.div`
  margin: 0.5rem 0;
`

const QuestionCount = styled.div``

const AnswerCount = styled.div``

export const User: FC = () => {
  const { mentionId, name, profile, questionCount, answerCount } = useAsk()

  return (
    <Layout>
      <Name>{name}</Name>
      <MentionId>
        <At />
        {mentionId}
      </MentionId>
      <Profile>{profile}</Profile>
      <QuestionCount>받은 질문 {questionCount}개</QuestionCount>
      <AnswerCount>답변 {answerCount}개</AnswerCount>
    </Layout>
  )
}
