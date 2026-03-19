import React, { useState } from "react";
import "./Dashboard.css";

const statCards = [
  { title: "Calories Burned", value: "1,562 kcal", icon: "🔥", color: "#f97316" },
  { title: "Steps", value: "9,320", icon: "👟", color: "#22d3ee" },
  { title: "Workout", value: "52 min", icon: "🏋️", color: "#c084fc" },
  { title: "BMI", value: "22.1", icon: "⚖️", color: "#4ade80" },
];

const workoutTasks = [
  { name: "Barbell Squats", reps: "4 x 10", done: true },
  { name: "Incline Push Press", reps: "3 x 12", done: false },
  { name: "Kettlebell Swings", reps: "3 x 20", done: false },
  { name: "Core Plank", reps: "3 x 60s", done: true },
];

const achievements = [
  "3000+ kcal week",
  "5-day streak",
  "New PR: 120 kg deadlift",
];

const leaderBoard = [
  { name: "Ava", points: "1340" },
  { name: "Leo", points: "1290" },
  { name: "Mia", points: "1245" },
];

const Dashboard = () => {
  const [tasks, setTasks] = useState(workoutTasks);
  const [timer, setTimer] = useState(0);

  const complete = tasks.filter((t) => t.done).length;
  const completion = Math.round((complete / tasks.length) * 100);

  const getCompliment = () => {
    if (completion === 100) return "🔥 Goal Complete! PulseAI says: You crushed it today!";
    if (completion >= 75) return "💪 Almost there! You're building unstoppable momentum.";
    if (completion >= 50) return "✨ Great work! Keep the energy and finish strong.";
    return "Keep going—small wins every day add up to greatness.";
  };

  const toggleTask = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  // ✅ Better timer (interval based)
  const startTimer = () => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setTimer(count);

      if (count >= 60) clearInterval(interval);
    }, 1000);
  };

  return (
    <div className="pulse-ai-dashboard">
      {/* HEADER */}
      <header className="topNav">
        <div className="brandBlock">
          <div className="brandBadge">PulseAI</div>
          <div>
            <h1>PulseAI Gym Intelligence</h1>
            <p>Train smarter every day 🚀</p>
          </div>
        </div>

        <div className="topActions">
          <button className="navBtn">AI Coach</button>
          <button className="navBtn">Notifications (3)</button>
          <div className="avatar">JD</div>
        </div>
      </header>

      {/* HERO */}
      <section className="heroSection">
        <div className="heroLeft">
          <div className="summaryHead">
            <h2>Today's AI Summary</h2>
            <span className="badge">Live AI</span>
          </div>

          <div className="summaryCards">
            <div className="summaryCard">
              <p>Calories</p>
              <strong>1630 kcal</strong>
            </div>
            <div className="summaryCard">
              <p>Goal</p>
              <strong>{completion}%</strong>
            </div>
            <div className="summaryCard">
              <p>Workout</p>
              <strong>Upper Strength</strong>
            </div>
          </div>

          <div className="aiFeatureList">
            <div className="aiFeatureItem">
              <strong>✨ Micro-Burst AI Nudges</strong>
              <p>Instant workout tweak based on your real-time heart rhythm.</p>
            </div>
            <div className="aiFeatureItem">
              <strong>⚡ Adaptive Metabolic Sync</strong>
              <p>Auto-adjusts meals and macros for your daily energy curve.</p>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="statsGrid">
            {statCards.map((card, i) => (
              <div
                className="statCard"
                key={i}
                style={{ borderTop: `3px solid ${card.color}` }}
              >
                <span>{card.icon}</span>
                <p>{card.title}</p>
                <h3>{card.value}</h3>
              </div>
            ))}
          </div>

          <div className="motivationalQuote">
            <p>“The only bad workout is the one that didn't happen.”</p>
            <span>- PulseAI Motivation</span>
          </div>
          <div className="goalCompliment">
            <p>{getCompliment()}</p>
          </div>
        </div>
      </section>

      {/* WORKOUT */}
      <section className="workoutSection">
        <div className="workoutCard">
          <h3>Daily Workout Tracker</h3>

          {tasks.map((task, index) => (
            <div
              key={index}
              className={`taskRow ${task.done ? "done" : ""}`}
              onClick={() => toggleTask(index)}
            >
              <span>{task.done ? "✓" : "○"}</span>
              <div>
                <strong>{task.name}</strong>
                <p>{task.reps}</p>
              </div>
            </div>
          ))}

          <div className="timerActions">
            <button className="startBtn" onClick={startTimer}>Start Workout</button>
            <button className="stopBtn" onClick={() => setTimer(0)}>Stop Workout</button>
          </div>
          <p>Timer: {timer} sec</p>
        </div>

        {/* INSIGHTS */}
        <div className="insightPanel">
          <h3>Health Insights</h3>

          <div className="insightGrid">
            <div>Sleep: 7h 45m</div>
            <div>Heart: 72 bpm</div>
            <div>Stress: Low</div>
            <div>Water: 1.8L</div>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="bottomArea">
        <div className="communityCard">
          <div className="communityHeader">
            <div>
              <h3>Leaderboard</h3>
              <p>Weekly champion zone</p>
            </div>
            <div className="dateBadge">
              <span>Mon, Mar 20</span>
              <strong>Day 125</strong>
            </div>
          </div>

          <div className="leaderboardRows">
            {leaderBoard.map((user, i) => (
              <div className="leaderRow" key={i}>
                <div className="leaderLeft"><span>#{i + 1}</span><strong>{user.name}</strong></div>
                <div className="leaderRight">{user.points} pts</div>
              </div>
            ))}
          </div>

          <div className="achievementWrap">
            <span>🏅</span>
            <p>{achievements[0]}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;