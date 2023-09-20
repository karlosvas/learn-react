import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, AppMap } from './App'
import './main.css'

// React es muy declarativo. 
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
  {/* <AppMap /> */}
  <App />
  </>
)
