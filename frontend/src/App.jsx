import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Assistant from './pages/Assistant';
import Scanner from './pages/Scanner';


import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </Router>
  );
}

export default App;
