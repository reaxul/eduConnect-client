import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
