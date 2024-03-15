import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './Hero'
import Skills from './Skills'
import Trayecto from './Trayecto'
import Footer from './Footer'
import Proyecto from './Proyectos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='flex flex-col gap-40 bg-black'>
    <Hero />
    <Proyecto />
    <Trayecto />
    <Skills />
    <Footer />
  </div>,
)
