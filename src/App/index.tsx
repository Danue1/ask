import React, { FC } from 'react'
import { AppProvider } from './Context'
import { Pages } from './Pages'

export const App: FC = () => (
  <AppProvider>
    <Pages />
  </AppProvider>
)
