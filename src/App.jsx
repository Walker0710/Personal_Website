import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Cursor from './components/Cursor/Cursor';

function AppContent() {

  return (
    <>
      <Navbar />
      <Cursor/>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
