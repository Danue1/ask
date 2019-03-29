import React, { FC, useRef } from 'react'
import styled from 'styled-components'
import { ModalHandlerProps } from '../../../../Components/Modal'
import { Header } from '../../../../Components/Modal/Header'
import { Side } from '../../../../Components/Modal/Side'

const Layout = styled.form`
  display: grid;
  grid-gap: 1rem;
`

const List = styled.div`
  display: grid;
  grid-gap: 1rem;
`

const Item = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`

const Label = styled.div`
  font-weight: bolder;

  margin-left: 0.5rem;
`

const Input = styled.input`
  width: 12rem;

  padding: 0.5rem;

  background-color: hsl(0 0% 96%);
  border: 1px solid hsl(0 0% 84%);
  border-radius: 0.25rem;
`

const Id = Input

const Password = Input

const Button = styled.div`
  cursor: pointer;

  padding: 0.5rem;

  text-align: center;

  border: 1px solid hsl(0 0% 84%);
  border-radius: 0.25rem;

  &:hover {
    background-color: hsl(0 0% 96%);
  }
`

export const LoginToAdmin: FC<ModalHandlerProps> = ({ closeModal }) => {
  const idRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const submitToLogin = () => {
    const id = idRef.current!.value
    const password = passwordRef.current!.value

    console.log(id, password)
  }

  return (
    <Layout>
      <Header name="로그인" closeModal={closeModal} />

      <List>
        <Item>
          <Label>아이디</Label>
          <Id ref={idRef} minLength={64} type="text" autoComplete="id" />
        </Item>

        <Item>
          <Label>비밀번호</Label>
          <Password ref={passwordRef} type="password" autoComplete="password" />
        </Item>
      </List>

      <Button onClick={submitToLogin}>로그인하기</Button>

      <Side.Right>Right</Side.Right>
    </Layout>
  )
}
