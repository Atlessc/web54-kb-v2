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
import AlreadyLoggedIn from './pages/already-logged-in'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading, isAuthenticated } = useAuth0()

  // create a useEffect that sets the role from auth0 user metadata if the user is authenticated
  // if the user is not authenticated, set the role to 'guest'
  // this will be used to determine if isAuthenticated is false

  return (
    <div className='app-container'>
      <TopNav />
      <LeftNav />
      <div className='main-content'>
        {/* protected components */}
        {
          isAuthenticated &&
          !isLoading &&
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/articles/:id' element={<Article />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/profile/' element={<Profile />} />
            <Route path='/callback' element={<AlreadyLoggedIn />} />
            <Route path='*' element={<_404 />} />
          </Routes>
        }
        {
          !isAuthenticated &&
          !isLoading &&
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotLoggedIn />} />
          </Routes>
        }
        {
          isAuthenticated &&
          isLoading &&
          <div>
            <h2 className='loading'>Loading...</h2>
          </div>
        }
      </div>
    </div>
  )
}

export default App
