import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Add more Route elements for other routes as needed */}
      </Routes>
    </Router>
  );
}

// Example Home component
function Home() {
  return <div>Home Page Content</div>;
}

export default App;
