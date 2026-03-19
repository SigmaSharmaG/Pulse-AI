import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Workout from './pages/Workout';
import Diet from './pages/Diet';
import Chat from './pages/Chat';
import Progress from './pages/Progress.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Main App Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/progress" element={<Progress />} />

          {/* Fallback */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-screen text-xl">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
