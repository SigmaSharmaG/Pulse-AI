import React from "react";
import "./Workout.css";

const Workout = () => {
  return (
    <div className="workout">

      {/* Header */}
      <div className="workout-header">
        <h1 className="title">AI Workout Planner</h1>
        <p>Your personalized weekly training plan</p>
      </div>

      {/* Difficulty Selector */}
      <div className="difficulty">
        <h2 className="heading">Select Difficulty</h2>
        <div className="difficulty-cards">
          <div className="diff-card beginner">Beginner</div>
          <div className="diff-card intermediate">Intermediate</div>
          <div className="diff-card advanced">Advanced</div>
        </div>
      </div>

      {/* Weekly Plan */}
      <div className="weekly-plan">
        <h2 className="heading">Weekly Plan</h2>

        <div className="week-grid">

          <div className="day-card">
            <h3>Monday</h3>
            <p>Chest + Triceps</p>
          </div>

          <div className="day-card">
            <h3>Tuesday</h3>
            <p>Back + Biceps</p>
          </div>

          <div className="day-card">
            <h3>Wednesday</h3>
            <p>Leg Day</p>
          </div>

          <div className="day-card">
            <h3>Thursday</h3>
            <p>Shoulders + Core</p>
          </div>

          <div className="day-card">
            <h3>Friday</h3>
            <p>Full Body</p>
          </div>

          <div className="day-card rest">
            <h3>Saturday</h3>
            <p>Rest / Active Recovery</p>
          </div>

          <div className="day-card rest">
            <h3>Sunday</h3>
            <p>Rest</p>
          </div>

        </div>
      </div>

      {/* Exercises Section */}
      <div className="exercise-section">
        <h2>Today's Exercises</h2>

        <div className="exercise-cards">
          <div className="exercise-card">
            <h3>Bench Press</h3>
            <p>4 sets × 10 reps</p>
          </div>

          <div className="exercise-card">
            <h3>Push Ups</h3>
            <p>3 sets × 15 reps</p>
          </div>

          <div className="exercise-card">
            <h3>Tricep Dips</h3>
            <p>3 sets × 12 reps</p>
          </div>

          <div className="exercise-card">
            <h3>Cable Fly</h3>
            <p>3 sets × 10 reps</p>
          </div>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="ai-workout">
        <h2 className="heading">AI Recommendations</h2>

        <div className="ai-cards">
          <div className="ai-card">
            💡 Increase weight by 5% next week
          </div>
          <div className="ai-card">
            ⚡ Rest time: 60–90 seconds
          </div>
          <div className="ai-card">
            🔥 You're performing better than last week
          </div>
        </div>
      </div>

    </div>
  );
};

export default Workout;