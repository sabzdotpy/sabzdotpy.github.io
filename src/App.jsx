import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home.jsx';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
