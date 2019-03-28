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

  margin-left: 0.5rem;
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
  grid-gap: 0.5rem;
  align-items: flex-end;
  grid-template-columns: 1fr 8ch;
`

const Side = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  align-items: flex-end;
`

const Counter = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-end;

  margin-right: 0.5rem;
`

const TextLength = styled.div``

const Limit = styled.div`
  color: hsl(0 0% 64%);
`

const Submit = styled.div`
  cursor: pointer;

  padding: 0.5rem;

  border: 1px solid hsl(0 0% 84%);
  border-radius: 0.25rem;
`

export const QuestionInput: FC = () => {
  const { name } = useAsk()

  const ref = useRef<HTMLTextAreaElement>(null)

  const [textLength, setTextLength] = useState<number>(0)

  const MAX_LENGTH = 255

  const updateTextLength = () => {
    const element = ref.current!
    const textLength = element.value.length
    if (textLength > MAX_LENGTH) {
      element.value = element.value.slice(0, MAX_LENGTH)
      setTextLength(MAX_LENGTH)
    } else {
      setTextLength(textLength)
    }
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
      <Container>
        <Textarea rows={3} ref={ref} onChange={updateTextLength} placeholder="무슨 일이 일어나고 있나요?" />
        <Side>
          <Counter>
            <TextLength>{textLength}</TextLength>
            <Limit>/{MAX_LENGTH}</Limit>
          </Counter>
          <Submit onClick={submitQuestion}>보내기</Submit>
        </Side>
      </Container>
    </Layout>
  )
}
