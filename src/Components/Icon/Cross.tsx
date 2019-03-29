import React, { FC } from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  fill: none;
  stroke: currentColor;
  stroke-width: 2px;
`

export const Cross: FC = () => (
  <SVG viewBox="0 0 64 64">
    <line x1="8" y1="8" x2="56" y2="56" />
    <line x1="56" y1="8" x2="8" y2="56" />
  </SVG>
)
