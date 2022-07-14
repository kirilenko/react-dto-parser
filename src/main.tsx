import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import env from 'constants/env'
import App from './domain/App'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <span style={{ display: 'none' }}>{env.timestamp}</span>
  </StrictMode>,
)
