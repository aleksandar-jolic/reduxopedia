import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import Header from './layout/Header'
import Footer from './layout/Footer'
import AppRouter from './routes/AppRouter'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import Destnation from './components/Destination'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <div className='d-flex flex-column min-vh-100'>
        <Header />
        <main className='flex-grow-1'>
          <div className='col-12'>
            {/* <Counter /> */}
            <Destnation />
          </div>
        </main>
        <Footer />
      </div>
    </Provider>
  </StrictMode>,
)
