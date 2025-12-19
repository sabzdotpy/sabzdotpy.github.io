import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home.jsx';
import Freelance from './pages/Freelance.jsx';
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
