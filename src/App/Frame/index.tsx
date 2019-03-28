import React, { FC } from 'react'
import styled from 'styled-components'
import { Header } from './Header'

const Main = styled.main`
  height: 100vh;

  padding-top: 3rem;
`

export const Frame: FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
)
