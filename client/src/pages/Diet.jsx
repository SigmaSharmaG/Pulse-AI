import React from "react";
import "./Diet.css";

const Diet = () => {
  return (
    <div className="diet">

      {/* Header */}
      <div className="diet-header">
        <h1>Nutrition Intelligence</h1>
        <p>Your AI-powered personalized diet plan</p>
      </div>

      {/* Macro Section */}
      <div className="macro-section">
        <h2>Daily Macros</h2>
        <div className="macros">
          <div className="macro-card protein">
            <h3>Protein</h3>
            <p>180g / 200g</p>
          </div>

          <div className="macro-card carbs">
            <h3>Carbs</h3>
            <p>220g / 250g</p>
          </div>

          <div className="macro-card fats">
            <h3>Fats</h3>
            <p>65g / 80g</p>
          </div>

          <div className="macro-card calories">
            <h3>Calories</h3>
            <p>2450 / 2600</p>
          </div>
        </div>
      </div>

      {/* Meals Section */}
      <div className="meals">
        <h2>Today's Meal Plan</h2>

        <div className="meal-grid">
          <div className="meal-card">
            <h3>Breakfast</h3>
            <p>Oatmeal with protein powder & berries</p>
          </div>

          <div className="meal-card">
            <h3>Lunch</h3>
            <p>Grilled chicken with brown rice & veggies</p>
          </div>

          <div className="meal-card">
            <h3>Snack</h3>
            <p>Greek yogurt with almonds</p>
          </div>

          <div className="meal-card">
            <h3>Dinner</h3>
            <p>Salmon with quinoa & broccoli</p>
          </div>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="ai-section">
        <h2>AI Suggestions</h2>
        <div className="ai-cards">
          <div className="ai-card">
            <p>💡 Increase protein intake for muscle gain</p>
          </div>
          <div className="ai-card">
            <p>⚡ Best meal time: 6:30 PM - 7:30 PM</p>
          </div>
          <div className="ai-card">
            <p>🔥 You're 94% on track with your calorie goal</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Diet;
