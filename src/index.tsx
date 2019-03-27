import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

const app = <App />
const Root = window.document.getElementById('Root')
ReactDOM.render(app, Root)

serviceWorker.unregister()
