import React, { FC, useRef, useState } from 'react'
import styled from 'styled-components'
import { useAsk } from '../Context'

const Layout = styled.div`
  display: grid;
  grid-gap: 0.5rem;

  padding: 1rem;

  background-color: white;
`

const Label = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  width: min-content;
`

const Name = styled.div`
  font-weight: bolder;
`

const Text = styled.div``

const Textarea = styled.textarea`
  padding: 0.5rem;

  color: hsl(0 0% 36%);
  background-color: hsl(0 0% 96%);
  border: 1px solid hsl(0 0% 84%);
  border-radius: 0.25rem;

  &::placeholder {
    color: hsl(0 0% 64%);
  }
`

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
`

const Counter = styled.div`
  display: grid;
  grid-auto-flow: column;
`

const TextLength = styled.div``

const Limit = styled.div`
  color: hsl(0 0% 64%);
`

const Submit = styled.div`
  cursor: pointer;

  padding: 0.5rem;

  border: 1px solid hsl(0 0% 84%);
`

export const QuestionInput: FC = () => {
  const { name } = useAsk()

  const ref = useRef<HTMLTextAreaElement>(null)

  const [textLength, setTextLength] = useState<number>(0)

  const updateTextLength = () => {
    setTextLength(ref.current!.value.length)
  }

  const submitQuestion = () => {
    const question = ref.current!.value

    console.log(question)

    if (!question) {
      return
    }
  }

  return (
    <Layout>
      <Label>
        <Name>{name}</Name>
        <Text>님에게 질문하기</Text>
      </Label>
      <Textarea rows={3} ref={ref} onChange={updateTextLength} placeholder="무슨 일이 일어나고 있나요?" />
      <Container>
        <Counter>
          <TextLength>{textLength}</TextLength>
          <Limit>/200</Limit>
        </Counter>
        <Submit onClick={submitQuestion}>보내기</Submit>
      </Container>
    </Layout>
  )
}
