import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="landing">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Transform Your Fitness Journey</h1>
          <p>Your AI coach that learns with you and helps you reach your goals — workouts, diet, progress & more.</p>

          <div className="hero-buttons">
            <a href="#features" className="btn primary">Explore Features</a>
            <a href="#signup" className="btn secondary">Get Started</a>
          </div>

          <div className="hero-form" id="signup">
            <input type="email" placeholder="Enter your email" />
            <button className="btn signup-btn">Join Early Access</button>
          </div>
        </div>
        <div className="hero-image"></div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>What You Get</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>AI‑Powered Workouts</h3>
            <p>Smart workouts tailored to your goals and performance.</p>
          </div>
          <div className="card">
            <h3>Personalized Diet</h3>
            <p>Nutrition plans based on your preferences and targets.</p>
          </div>
          <div className="card">
            <h3>Progress Tracking</h3>
            <p>Know your metrics and how you’re improving.</p>
          </div>
          <div className="card">
            <h3>24/7 Chat Support</h3>
            <p>Get help and guidance whenever you need it.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to start your transformation?</h2>
        <a href="#signup" className="btn primary large">Join Now</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 FitTrack • All rights reserved</p>
      </footer>

    </div>
  );
};

export default Home;