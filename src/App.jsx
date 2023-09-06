import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import LeftNav from './components/left-nav'
import TopNav from './components/top-nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Admin from './pages/admin'
import Profile from './pages/profile'
import Login from './pages/login'
import Article from './pages/article'
import _404 from './pages/404'
import Articles from './pages/articles'
import NotLoggedIn from './pages/not-logged-in'
import useStore from './store'
import AlreadyLoggedIn from './pages/already-logged-in'

function App() {
  const isAuthenticated = useStore(state => state.isAuthenticated)
  const setIsAuthenticated = useStore(state => state.setIsAuthenticated)
  const setRole = useStore(state => state.setRole)
  const setTheme = useStore(state => state.setTheme)
  const navigate = useNavigate()

  return (
    <div className='app-container'>
      <TopNav />
      <LeftNav />
      <div className='main-content'>
        {isAuthenticated ? <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/:id' element={<Article />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/profile/:user' element={<Profile />} />
          <Route path='/login' element={<AlreadyLoggedIn />} />
          <Route path='*' element={<_404 />} />
        </Routes>
        :
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotLoggedIn />} />
        </Routes>}
      </div>
    </div>
  )
}

export default App
