import React, { useMemo } from 'react'
import './Progress.css'

const progressData = [
  { label: 'Workouts', value: 42, target: 50, color: '#f97316' },
  { label: 'Calories', value: 1560, target: 1800, color: '#22c55e' },
  { label: 'Hydration', value: 2.3, target: 3, color: '#0ea5e9' },
]

const suggestedChallenges = [
  { name: 'Morning Mobility', desc: '5-minute joint flow before workout', bonus: '+4 XP' },
  { name: 'Protein Punch', desc: 'Add 15g protein at dinner', bonus: '+3 XP' },
  { name: 'Hydrate Boost', desc: 'Drink one extra glass in afternoon', bonus: '+2 XP' },
]

const Progress = () => {
  const forecast = useMemo(() => {
    const avg = progressData.reduce((sum, item) => sum + (item.value / item.target), 0) / progressData.length
    return Math.round(Math.min(100, avg * 100))
  }, [])

  return (
    <div className="progress-page">
      <div className="progress-header">
        <div>
          <p className="label">Your Progress</p>
          <h1>Weekly Health Snapshot</h1>
          <p className="subtitle">Track your fitness data, habits, and AI recommendations in one place.</p>
        </div>

        <div className="progress-badge">
          <span>New</span>
          <strong>AI Forecast</strong>
        </div>
      </div>

      <div className="forecast-card">
        <div>
          <p className="forecast-title">Next Week Performance Forecast</p>
          <h2>{forecast}% goal attainment</h2>
          <p className="forecast-sub">Adaptive algorithm estimates your week based on current habits and sleep trend.</p>
        </div>
        <div className="forecast-ring"><span>{forecast}%</span></div>
      </div>

      <div className="progress-grid">
        <div className="habit-card">
          <div className="habit-head"><span>Streak</span><p>🔥 15 days</p></div>
          <p className="habit-desc">Keep momentum: complete one micro-habit each morning to maintain streak.</p>
          <div className="habit-meta"><small>Next badge: 20 days</small><strong>+3 XP</strong></div>
        </div>

        <div className="insight-card">
          <div className="insight-head"><span>AI Insight</span><p>Adaptive Nutrition</p></div>
          <p className="insight-desc">Based on your logs, a higher evening protein boost raises muscle recovery by 8% this week.</p>
          <button>Open AI Coach</button>
        </div>

        <div className="challenge-card">
          <div className="goals-head"><span>Daily Boosts</span><p>Tap to complete</p></div>
          <ul>
            {suggestedChallenges.map((item) => (
              <li key={item.name}>
                <div className="challenge-left"><strong>{item.name}</strong><small>{item.desc}</small></div>
                <span>{item.bonus}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="calendarheat-card">
        <div className="calendar-head"><span>Habit heatmap</span><p>7-day pattern</p></div>
        <div className="heat-grid">
          {[...Array(14)].map((_, i) => (
            <div key={i} className={`heat-cell h${(i % 5) + 1}`} />
          ))}
        </div>
        <p className="heat-note">Darker squares = stronger consistency.</p>
      </div>
    </div>
  )
}

export default Progress