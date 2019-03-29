import React, { FC } from 'react'
import styled from 'styled-components'
import { useAsk } from '../Context'
import { At } from '../../../../Components/Icon/At'

const Layout = styled.div`
  display: grid;
  grid-gap: 1rem;

  padding: 1rem;

  background-color: white;
`

const Item = styled.div`
  display: grid;
  grid-gap: 0.25rem;
`

const Image = styled.img`
  width: 100%;

  border: 1px solid hsl(0 0% 84%);
  border-radius: 0.25rem;
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

const Profile = styled.div``

const QuestionCount = styled.div``

const AnswerCount = styled.div``

export const User: FC = () => {
  const { mentionId, name, profile, profileImage, questionCount, answerCount } = useAsk()

  return (
    <Layout>
      <Image src={profileImage} />
      <Item>
        <Name>{name}</Name>
        <MentionId>
          <At />
          {mentionId}
        </MentionId>
      </Item>
      <Profile>{profile}</Profile>
      <Item>
        <QuestionCount>받은 질문 {questionCount}개</QuestionCount>
        <AnswerCount>답변 {answerCount}개</AnswerCount>
      </Item>
    </Layout>
  )
}
