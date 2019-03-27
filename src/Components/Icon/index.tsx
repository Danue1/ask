import React, { FC } from 'react'
import styled from 'styled-components'

const Image = styled.img`
  height: 100%;
`

interface Props {
  readonly name: string
}

export const Icon: FC<Props> = ({ name }) => <Image src={require(`../../assets/icons/${name}.svg`)} />
