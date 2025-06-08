import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import './App.css'

import SampleOne from './pages/SampleOne'
import SampleTwo from './pages/SampleTwo'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SampleOne />} />
        <Route path="/sample-two" element={<SampleTwo />} />
      </Routes>
    </Router>
  )
}

export default App
