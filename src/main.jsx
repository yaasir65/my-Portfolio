import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Header from './components/Header'
import App from './App'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  {/* <Header/> */}
 <App/>
  </BrowserRouter>
)
