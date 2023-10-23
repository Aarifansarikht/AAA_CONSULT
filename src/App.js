import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/landing/homepage/Homepage';
import "./App.css";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/service" />
        <Route path="/contact" />
      </Routes>
    </Router>
  );
}


