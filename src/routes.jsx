import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { App } from './App'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Cast } from './components/Cast'

const Paths = () => {
  return (
    <section className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/episodes/:id" element={<Episodes/>}/>
        <Route path="/cast/:id" element={<Cast/>}/>
      </Routes>
    </section>
  )
}

export default Paths