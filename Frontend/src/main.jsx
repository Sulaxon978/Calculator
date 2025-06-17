import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Calculation from './Calculation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculation />
  </StrictMode>,
)
