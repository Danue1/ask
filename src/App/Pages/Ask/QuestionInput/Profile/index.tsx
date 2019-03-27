import React, { FC } from 'react'
import styled from 'styled-components'
import { useAsk } from '../../Context'

const Layout = styled.div``

const Image = styled.img`
  width: 8rem;
  height: 8rem;

  border: 0.25rem solid pink;
  border-radius: 50%;
`

const Nickname = styled.div``

const MentionId = styled.div``

const src = ''

export const Profile: FC = () => {
  const { mentionId } = useAsk()

  return (
    <Layout>
      <Image src={src} />
      <MentionId>{mentionId}</MentionId>
      <Nickname>Nickname</Nickname>
    </Layout>
  )
}
