import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './Hero'
import Skills from './Skills'
import Trayecto from './Trayecto'
import Footer from './Footer'
import Proyecto from './Proyectos'
import Stela from './Stelas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='flex flex-col gap-40 bg-[#0d0d0d]'>
    <Hero />
    <Proyecto />
    <Trayecto />
    <Skills />
    <Stela />
    <Footer />
  </div>,
)
