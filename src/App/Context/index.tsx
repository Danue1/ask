import React, { FC } from 'react'
import { RouterProvider } from './Router'

export const AppProvider: FC = ({ children }) => <RouterProvider>{children}</RouterProvider>
