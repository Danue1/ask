import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Clearfix } from './styles/Clearfix'

const app = (
  <>
    <Clearfix />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)
const Root = window.document.getElementById('Root')
ReactDOM.render(app, Root)

serviceWorker.unregister()
