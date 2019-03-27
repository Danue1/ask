import React, { FC } from 'react'
import styled from 'styled-components'
import { Header } from './Header'

const Layout = styled.div`
  display: grid;
  grid-template:
    'Header' 3.5rem
    'Main' calc(100vh - 3.5rem)
    / 100vw;
`

const HeaderItem = styled.header`
  grid-area: Header;
`

const MainItem = styled.main`
  grid-area: Main;
`

export const Frame: FC = ({ children }) => (
  <Layout>
    <HeaderItem>
      <Header />
    </HeaderItem>
    <MainItem>{children}</MainItem>
  </Layout>
)
