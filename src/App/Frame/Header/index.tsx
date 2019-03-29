import React, { FC, lazy, Suspense } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SearchMentionId } from './SearchMentionId'
import { Logo } from '../../../Components/Icon/Logo'
import { useModal } from '../../../Components/Modal/hooks/useModal'
import { Modal } from '../../../Components/Modal'

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
  display: grid;
  grid-gap: 0.5rem;
  grid-auto-flow: column;
  align-items: center;
`

const Anchor = styled(Link)`
  height: 3rem;
`

const Right = styled.div`
  grid-area: Right;
  display: grid;
  grid-gap: 0.5rem;
  grid-auto-flow: column;
  align-items: center;
`

const Button = styled.div`
  cursor: pointer;

  padding: 0.5rem;
`

const LoginToAdmin = lazy(() => import('./LoginToAdmin').then(({ LoginToAdmin }) => ({ default: LoginToAdmin })))

export const Header: FC = () => {
  const adminModal = useModal()

  return (
    <Container>
      <Layout>
        <Left>
          <Anchor to="/">
            <Logo />
          </Anchor>
        </Left>
        <Right>
          <SearchMentionId />
          <Button onClick={adminModal.open}>로그인</Button>
          <Modal isOpen={adminModal.state}>
            <Suspense fallback={null}>
              <LoginToAdmin closeModal={adminModal.close} />
            </Suspense>
          </Modal>
        </Right>
      </Layout>
    </Container>
  )
}
