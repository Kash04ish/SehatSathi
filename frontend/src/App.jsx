import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Assistant from './pages/Assistant';
import Scanner from './pages/Scanner';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Offline from './pages/Offline';

import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/dashboard" element={<Dashboard />} />  */}
            <Route path="/offline" element={<Offline />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
