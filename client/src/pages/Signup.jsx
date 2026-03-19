import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const strength = () => {
    if (password.length > 9 && /[A-Z]/.test(password) && /\d/.test(password)) return 'strong'
    if (password.length > 6) return 'medium'
    if (password.length > 0) return 'weak'
    return ''
  }

  const strengthLabel = strength()

  return (
    <div className="signup-page">
      <div className="signup-panel">
        <div className="signup-header">
          <h1>Create your Pulse account</h1>
          <p>Get personalized workout & diet recommendations with AI.
          </p>
        </div>

        <div className="creative-banner">New: Visual onboarding score, friendly progress meter, and strength AI hints.</div>
        <div className="feature-list">
          <li>Instant AI goal scoring</li>
          <li>Smart password health meter</li>
          <li>In-app onboarding with progress stars</li>
        </div>

        <form className="signup-form">
          <div className="field-row">
            <label>
              Full Name
              <input type="text" placeholder="John Doe" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
          </div>

          <label>
            Password
            <div className="password-row">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create strong password"
                required
              />
              <button type="button" className="show-hide" onClick={() => setShowPassword((v) => !v)}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className={`strength ${strengthLabel}`}>{strengthLabel ? `${strengthLabel} password` : 'Enter password'}</div>
          </label>

          <label className="checkbox-label">
            <input type="checkbox" required />
            I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
          </label>

          <button className="signup-btn" type="submit">Create Account</button>
        </form>

        <div className="socials">
          <span>Or sign up with</span>
          <div className="social-row">
            <button className="sbtn google">Google</button>
            <button className="sbtn facebook">Facebook</button>
          </div>
        </div>

        <div className="small-note">
          Already a member? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup