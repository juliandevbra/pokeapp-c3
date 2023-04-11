import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorBoundary from './Clase 26/ErrorBoundary'
import Context from './Context/global.context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context>
      {/* <ErrorBoundary> */}
      <App />
      {/* </ErrorBoundary> */}
    </Context>
  </BrowserRouter>
)
