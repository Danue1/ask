import React, { FC } from 'react'
import { AppProvider } from './Context'
import { Frame } from './Frame'
import { Pages } from './Pages'

export const App: FC = () => (
  <AppProvider>
    <Frame>
      <Pages />
    </Frame>
  </AppProvider>
)
