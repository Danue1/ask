import React, { FC } from 'react'
import styled from 'styled-components'
import { useAsk } from '../../Context'

const Layout = styled.div``

const Nickname = styled.div``

const MentionId = styled.div``

export const Profile: FC = () => {
  const { mentionId } = useAsk()

  return (
    <Layout>
      <MentionId>@{mentionId}</MentionId>
      <Nickname>Nickname</Nickname>
    </Layout>
  )
}
