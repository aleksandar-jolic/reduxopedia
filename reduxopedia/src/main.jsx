import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import Header from './layout/Header'
import Footer from './layout/Footer'
import AppRouter from './routes/AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <div className='flex-grow-1'>Main content</div>
      <Footer />
    </div>
  </StrictMode>,
)
