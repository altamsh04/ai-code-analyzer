import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Chat from './pages/Chat';
import Home from './pages/Home';
// Import other page components as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
