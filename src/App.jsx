import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login.jsx'
import { Home } from './pages/Home'
import { TestSupabase} from './pages/TestSupabase'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        {/* <Route path='/test' element={<TestSupabase />}/> */}
      </Routes>
    </Router>
  )
}

export default App
