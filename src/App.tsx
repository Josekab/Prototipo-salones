import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Community } from './pages/Community';
import { Bookings } from './pages/Bookings';
import { Saved } from './pages/Saved';
import { Profile } from './pages/Profile';
import { Navigation } from './components/Navigation';
import { SalonDetail } from './pages/SalonDetail';
import { Payment } from './pages/Payment';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/salon/:id" element={<SalonDetail />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;