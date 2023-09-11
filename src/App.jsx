import { useState } from 'react'
import './App.css'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  const [page, setPage] = useState('/')

  function selectPage(event, myPage) {
    event.preventDefault();
    setPage(myPage);
  }

  if(page === '/contact') {
    return <Contact customSelectPage={selectPage}/>
  }

  if(page === '/about') {
    return <About customSelectPage={selectPage}/>
  }

  return (
    <>
      <nav>
        <ul>
          <li><a href='/' onClick={(e) => selectPage(e, '/')}>Home</a></li>
          <li><a href='/contact' onClick={(e) => selectPage(e, '/contact')}>Contact</a></li>
          <li><a href='/about' onClick={(e) => selectPage(e, '/about')}>About</a></li>
        </ul>
      </nav>
      <h1>Index</h1>
    </>
  )
}

export default App
