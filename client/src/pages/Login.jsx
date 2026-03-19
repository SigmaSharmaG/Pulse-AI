import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const quickPrompts = [
  'Show me a 15-min HIIT plan',
  'Suggest protein snacks',
  'How to track water intake?'
]

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [prompt, setPrompt] = useState('')

  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-header">
          <h1>Welcome back</h1>
          <p>Secure access to your Pulse AI fitness dashboard.</p>
        </div>

        <div className="login-progress">
          <div className="dot active" />
          <div className="dot" />
          <div className="dot" />
        </div>

        <div className="social-login">
          <button className="social-btn google">Continue with Google</button>
          <button className="social-btn apple">Continue with Apple</button>
        </div>

        <div className="prompt-row">
          {quickPrompts.map((item) => (
            <button key={item} className="prompt-btn" onClick={() => setPrompt(item)}>{item}</button>
          ))}
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label className="password-label">
            <span className="password-row">
              Password
              <button
                type="button"
                className="show-hide"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              required
            />
          </label>

          <div className="login-meta">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot" className="forgot">Forgot password?</Link>
          </div>

          <button type="submit" className="primary">Sign In</button>
        </form>

        <div className="login-footer">
          <div>
            <span>Instant tip:</span>
            <strong>{prompt || 'Try a quick prompt above.'}</strong>
          </div>
          <div>
            <span>Don't have an account? </span>
            <Link to="/signup">Create account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login