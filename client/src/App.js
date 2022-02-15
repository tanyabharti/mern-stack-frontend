import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LandingPage from './screens/LandingPage/LandingPage'
import LoginPage from './screens/LoginPage/LoginPage'
import RegisterPage from './screens/RegisterPage/RegisterPage'
import CreateNote from './screens/CreateNote/CreateNote'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes'
import { useState } from 'react'
import SingleNote from './screens/SingleNote/SingleNote'

function App() {
  const [search, setSearch] = useState('')
  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main className='App'>
        <Routes>
          <Route path='/' element={<LandingPage />} exact />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/createnote' element={<CreateNote />} />
          <Route path='/note/:id' element={<SingleNote />} />
          <Route path='/mynotes' element={<MyNotes search={search} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
