import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navBar'
import Footer from './components/footer'
import Conocenos from './pages/conocenos'
import Soluciones from './pages/soluciones'
import Servicios from './pages/servicios'
import PostVenta from './pages/postVenta'
import Contacto from './pages/contacto'
import Home from './pages/Home'


function App() {


  return (
    <Router >
      <div className='font-sans font-medium'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/conocenos' element={<Conocenos />} />
          <Route path='/soluciones' element={<Soluciones />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/postventa' element={<PostVenta />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
