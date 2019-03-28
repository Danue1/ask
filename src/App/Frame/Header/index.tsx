import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SearchMentionId } from './SearchMentionId'
import { Logo } from '../../../Components/Icon/Logo'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 3rem;

  background-color: white;
  border-bottom: 1px solid hsl(0 0% 84%);
`

const Layout = styled.div`
  display: grid;
  grid-template:
    'Left Center Right'
    / min-content 1fr min-content;

  max-width: 64rem;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 0 0.5rem;
`

const Left = styled.div`
  grid-area: Left;
`

const Right = styled.div`
  grid-area: Right;
  display: grid;
  align-items: center;
`

const Anchor = styled(Link)`
  height: 3rem;
`

export const Header: FC = () => (
  <Container>
    <Layout>
      <Left>
        <Anchor to="/">
          <Logo />
        </Anchor>
      </Left>
      <Right>
        <SearchMentionId />
      </Right>
    </Layout>
  </Container>
)
