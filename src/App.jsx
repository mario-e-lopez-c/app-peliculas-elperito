import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login.jsx'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { TestSupabase} from './pages/TestSupabase'
import { PrivateRoute } from './components/PrivateRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path='/home' element={<PrivateRoute />}>
            <Route index element={<Home />}/>
        </Route>
        {/* <Route path='/test' element={<TestSupabase />}/> */}
      </Routes>
    </Router>
  )
}

export default App
