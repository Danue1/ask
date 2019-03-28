import React, { FC } from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  fill: none;
  stroke: #000;
  stroke-miterlimit: 10;
  stroke-width: 2px;
`

export const ArrowRight: FC = () => (
  <SVG viewBox="0 0 64 64">
    <polyline points="32 8 56 32 32 56" />
    <line x1="8" y1="32" x2="56" y2="32" />
  </SVG>
)
