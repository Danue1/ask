import React, { FC } from 'react'
import styled from 'styled-components'
import { Icon } from '../../../Components/Icon'

const Container = styled.div`
  height: 100%;

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
`

const Left = styled.div`
  grid-area: Left;
`

export const Header: FC = () => (
  <Container>
    <Layout>
      <Left>
        <Icon name="Logo" />
      </Left>
    </Layout>
  </Container>
)
