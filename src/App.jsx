import Navbar from './components/Navbar'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import Portafolio from './pages/Portafolio'
import Servicio from './pages/Servicios'
import Footer from './components/Footer'
import Certificaciones from './components/Certificaciones'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Portafolio/>
    <Certificaciones/>
    <Servicio/>
    <Contacto/>
    <Footer/>
    </>
  )
}

export default App
