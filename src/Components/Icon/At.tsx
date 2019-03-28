import React, { FC } from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  fill: none;
  stroke: currentColor;
  stroke-width: 2px;
`

export const At: FC = () => (
  <SVG viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="10" />
    <path d="M48,42a6,6,0,0,0,6-6V32A22,22,0,1,0,32,54H44" />
    <path d="M48,42a6,6,0,0,1-6-6V32" />
  </SVG>
)
