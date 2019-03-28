import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'
import { AskProvider } from './Context'
import { User } from './User'
import { QuestionInput } from './QuestionInput'
import { Answers } from './Answers'

const Layout = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 3fr;

  height: 100%;
`

const Left = styled.div``

const Right = styled.div``

const Scroll = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`

interface Params {
  readonly mentionId: string
}

const Ask: FC<RouteComponentProps<Params>> = ({ match }) => (
  <AskProvider mentionId={match.params.mentionId}>
    <Layout>
      <Left>
        <User />
      </Left>
      <Right>
        <Scroll>
          <QuestionInput />
          <Answers />
        </Scroll>
      </Right>
    </Layout>
  </AskProvider>
)

export default Ask
