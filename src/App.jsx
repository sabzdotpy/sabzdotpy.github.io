import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import PageTransition from "./components/TransitionWrapper/TransitionWrapper.jsx";
import Home from "./pages/Home.jsx";
import Freelance from "./pages/Freelance.jsx";
import Contact from "./pages/Contact.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition locationKey={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}
