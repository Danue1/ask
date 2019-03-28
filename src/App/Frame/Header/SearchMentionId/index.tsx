import React, { FC, useRef } from 'react'
import styled from 'styled-components'
import { ArrowRight } from '../../../../Components/Icon/ArrowRight'
import { At } from '../../../../Components/Icon/At'

const Layout = styled.div`
  overflow: hidden;

  display: grid;
  align-items: center;
  grid-template-columns: 1.5rem 1fr 1.5rem;

  width: 12rem;

  padding: 0 0.125rem;

  color: hsl(0 0% 36%);
  background-color: hsl(0 0% 96%);
  border: 1px solid hsl(0 0% 84%);
  border-radius: 1rem;
`

const Icon = styled.div`
  display: grid;

  padding: 0.25rem;
`

const Input = styled.input`
  padding: 0.25rem;
`

const Redirect = styled.div`
  cursor: pointer;

  display: grid;

  padding: 0.25rem;

  /* background-color: hsl(0 0% 84%); */
`

export const SearchMentionId: FC = () => {
  const ref = useRef<HTMLInputElement>(null)

  const redirectToMentionId = () => {
    const mentionId = ref.current!.value
    console.log(mentionId)
  }

  return (
    <Layout>
      <Icon>
        <At />
      </Icon>
      <Input ref={ref} />
      <Redirect onClick={redirectToMentionId}>
        <ArrowRight />
      </Redirect>
    </Layout>
  )
}
