import React, { useState } from 'react'
import './Diet.css'

const vegItems = [
  { name: 'Greek Yogurt Parfait', type: 'veg', calories: 250, protein: 16, carbs: 30, fat: 7, description: 'Protein-rich dairy parfait with berries and oats.', meals: [{ item: 'Greek Yogurt', qty: '200g', price: '$1.6' }, { item: 'Berries', qty: '100g', price: '$1.2' }] },
  { name: 'Chickpea Salad', type: 'veg', calories: 310, protein: 14, carbs: 38, fat: 11, description: 'High-fiber salad with olive oil and lemon.', meals: [{ item: 'Chickpeas', qty: '200g', price: '$1.5' }, { item: 'Olive oil', qty: '2 tbsp', price: '$0.4' }] },
  { name: 'Lentil Curry', type: 'veg', calories: 420, protein: 22, carbs: 50, fat: 12, description: 'Warm lentil stew with tomatoes and spices.' },
  { name: 'Tofu Stir-fry', type: 'veg', calories: 360, protein: 20, carbs: 30, fat: 14, description: 'Sautéed veggies with tofu and sesame sauce.' },
  { name: 'Quinoa Bowl', type: 'veg', calories: 400, protein: 13, carbs: 55, fat: 14, description: 'Protein-packed quinoa with greens and seeds.' },
  { name: 'Black Bean Wrap', type: 'veg', calories: 340, protein: 15, carbs: 52, fat: 8, description: 'Whole wheat wrap loaded with beans and veggies.' },
  { name: 'Avocado Toast', type: 'veg', calories: 290, protein: 8, carbs: 32, fat: 15, description: 'Whole grain toast topped with avocado & seeds.' },
  { name: 'Vegetable Omelette', type: 'veg', calories: 230, protein: 18, carbs: 6, fat: 14, description: 'Egg omelette with spinach, peppers and mushrooms.' },
  { name: 'Peanut Butter Smoothie', type: 'veg', calories: 320, protein: 18, carbs: 35, fat: 12, description: 'Smoothie with banana, peanut butter, and milk.' },
  { name: 'Sweet Potato Fries', type: 'veg', calories: 250, protein: 3, carbs: 36, fat: 10, description: 'Baked sweet potatoes with herbs.' },
  { name: 'Mixed Bean Chili', type: 'veg', calories: 430, protein: 25, carbs: 50, fat: 14, description: 'Hearty chili with beans and spices.' },
  { name: 'Spinach Smoothie', type: 'veg', calories: 200, protein: 10, carbs: 28, fat: 5, description: 'Green smoothie with spinach, apple, and chia.' },
  { name: 'Oatmeal Bowl', type: 'veg', calories: 290, protein: 11, carbs: 45, fat: 8, description: 'Oats with nuts, cinnamon, and berries.' },
  { name: 'Hummus Plate', type: 'veg', calories: 280, protein: 10, carbs: 28, fat: 14, description: 'Hummus with veggies and pita.' },
  { name: 'Caprese Salad', type: 'veg', calories: 260, protein: 14, carbs: 7, fat: 20, description: 'Tomato, mozzarella, basil with olive oil.' },
  { name: 'Veggie Pasta', type: 'veg', calories: 420, protein: 18, carbs: 62, fat: 12, description: 'Whole grain pasta with veggies and tomato sauce.' },
  { name: 'Spinach Dal', type: 'veg', calories: 340, protein: 18, carbs: 42, fat: 10, description: 'Indian lentil dish with spinach.' },
  { name: 'Pea & Mint Soup', type: 'veg', calories: 210, protein: 12, carbs: 28, fat: 6, description: 'Creamy pea soup with mint.' },
  { name: 'Stuffed Bell Peppers', type: 'veg', calories: 360, protein: 18, carbs: 44, fat: 12, description: 'Peppers stuffed with quinoa and veggies.' },
  { name: 'Veggie Sushi', type: 'veg', calories: 280, protein: 8, carbs: 55, fat: 4, description: 'Rice rolls with avocado, cucumber and tofu.' },
  { name: 'Bean Burrito', type: 'veg', calories: 370, protein: 16, carbs: 50, fat: 12, description: 'Whole wheat burrito with beans and rice.' },
  { name: 'Greek Salad', type: 'veg', calories: 220, protein: 8, carbs: 10, fat: 16, description: 'Fresh salad with feta, olives and cucumber.' },
  { name: 'Cottage Cheese Bowl', type: 'veg', calories: 230, protein: 24, carbs: 10, fat: 8, description: 'Cottage cheese with fruits and seeds.' },
  { name: 'Vegetable Kebab', type: 'veg', calories: 250, protein: 12, carbs: 30, fat: 10, description: 'Grilled veggie skewers with herbs.' },
  { name: 'Berry Chia Pudding', type: 'veg', calories: 270, protein: 9, carbs: 34, fat: 12, description: 'Chia pudding made with almond milk & berries.' },
  { name: 'Mushroom Risotto', type: 'veg', calories: 410, protein: 13, carbs: 64, fat: 12, description: 'Creamy risotto with mushrooms.' },
  { name: 'Veggie Burger', type: 'veg', calories: 380, protein: 17, carbs: 42, fat: 14, description: 'Plant-based burger with wholegrain bun.' },
  { name: 'Kale & Tofu Salad', type: 'veg', calories: 300, protein: 18, carbs: 20, fat: 14, description: 'Kale salad with baked tofu and nuts.' },
  { name: 'Fruit & Nut Oats', type: 'veg', calories: 310, protein: 10, carbs: 48, fat: 12, description: 'Oats loaded with dried fruit and nuts.' },
  { name: 'Soba Noodle Bowl', type: 'veg', calories: 360, protein: 14, carbs: 54, fat: 10, description: 'Soba noodles with veggies and sesame.' },
]

const nonVegItems = [
  { name: 'Grilled Chicken Breast', type: 'nonveg', calories: 300, protein: 52, carbs: 0, fat: 6, description: 'Lean high-protein chicken grilled with spices.', meals: [{ item: 'Chicken breast', qty: '200g', price: '$2.5' }, { item: 'Mixed herbs', qty: '1 tsp', price: '$0.2' }] },
  { name: 'Salmon Fillet', type: 'nonveg', calories: 360, protein: 34, carbs: 0, fat: 22, description: 'Omega-3 rich salmon with lemon and herbs.', meals: [{ item: 'Salmon fillet', qty: '180g', price: '$4.0' }, { item: 'Lemon', qty: '1', price: '$0.5' }] },
  { name: 'Turkey Burger', type: 'nonveg', calories: 340, protein: 29, carbs: 22, fat: 14, description: 'Lean turkey patty in wholegrain bun.' },
  { name: 'Shrimp Stir-fry', type: 'nonveg', calories: 280, protein: 30, carbs: 18, fat: 10, description: 'Shrimp with mixed vegetables and sauce.' },
  { name: 'Tuna Salad', type: 'nonveg', calories: 320, protein: 35, carbs: 8, fat: 14, description: 'Tuna with greens, eggs, and vinaigrette.' },
  { name: 'Beef Steak', type: 'nonveg', calories: 420, protein: 38, carbs: 0, fat: 28, description: 'Sirloin steak for muscle recovery and B12.' },
  { name: 'Chicken Caesar', type: 'nonveg', calories: 380, protein: 30, carbs: 24, fat: 16, description: 'Classic salad with grilled chicken and dressing.' },
  { name: 'Egg Omelette', type: 'nonveg', calories: 240, protein: 18, carbs: 5, fat: 16, description: 'Eggs with vegetables and cheese.' },
  { name: 'Mackerel Toast', type: 'nonveg', calories: 310, protein: 22, carbs: 24, fat: 14, description: 'Wholegrain toast with mackerel and avocado.' },
  { name: 'Paneer Chicken', type: 'nonveg', calories: 420, protein: 32, carbs: 30, fat: 18, description: 'Mixed paneer and chicken curry.' },
  { name: 'Lamb Stew', type: 'nonveg', calories: 450, protein: 36, carbs: 20, fat: 24, description: 'Hearty stew with vegetables and lamb.' },
  { name: 'Seafood Paella', type: 'nonveg', calories: 480, protein: 34, carbs: 52, fat: 14, description: 'Rice dish with seafood and saffron.' },
  { name: 'Chicken Tikka', type: 'nonveg', calories: 310, protein: 26, carbs: 8, fat: 16, description: 'Spiced grilled chicken with yogurt marinade.' },
  { name: 'Prawn Pasta', type: 'nonveg', calories: 430, protein: 28, carbs: 52, fat: 14, description: 'Pasta with prawns and light cream sauce.' },
  { name: 'Turkey Wrap', type: 'nonveg', calories: 360, protein: 28, carbs: 34, fat: 12, description: 'Whole wheat wrap with turkey and veggies.' },
  { name: 'Chicken Alfredo', type: 'nonveg', calories: 520, protein: 30, carbs: 50, fat: 26, description: 'Creamy pasta with chicken and parmesan.' },
  { name: 'Baked Cod', type: 'nonveg', calories: 280, protein: 31, carbs: 6, fat: 10, description: 'Light cod baked with herbs.' },
  { name: 'Beef & Broccoli', type: 'nonveg', calories: 360, protein: 28, carbs: 22, fat: 14, description: 'Stir-fried beef with broccoli in sauce.' },
  { name: 'Fish Tacos', type: 'nonveg', calories: 350, protein: 24, carbs: 38, fat: 12, description: 'Grilled fish with salsa in tortillas.' },
  { name: 'Chicken Biryani', type: 'nonveg', calories: 520, protein: 30, carbs: 56, fat: 18, description: 'Flavorful rice with chicken and spices.' },
  { name: 'Salmon Bowl', type: 'nonveg', calories: 420, protein: 32, carbs: 40, fat: 16, description: 'Rice bowl with salmon and greens.' },
  { name: 'Egg Fried Rice', type: 'nonveg', calories: 390, protein: 18, carbs: 63, fat: 12, description: 'Rice with eggs and vegetables.' },
  { name: 'Grilled Chicken Wrap', type: 'nonveg', calories: 340, protein: 27, carbs: 32, fat: 10, description: 'Wrap with grilled chicken and sauce.' },
  { name: 'Prawn Curry', type: 'nonveg', calories: 420, protein: 34, carbs: 16, fat: 22, description: 'Curry made with prawns and coconut milk.' },
  { name: 'Turmeric Chicken', type: 'nonveg', calories: 360, protein: 29, carbs: 10, fat: 18, description: 'Spiced chicken with turmeric and garlic.' },
  { name: 'Egg & Spinach', type: 'nonveg', calories: 210, protein: 16, carbs: 5, fat: 12, description: 'Scrambled eggs with spinach and herbs.' },
  { name: 'Chicken Salad', type: 'nonveg', calories: 330, protein: 28, carbs: 12, fat: 18, description: 'Mixed salad topped with grilled chicken.' },
  { name: 'Beef Chili', type: 'nonveg', calories: 450, protein: 33, carbs: 45, fat: 18, description: 'Spicy chili with lean beef and beans.' },
  { name: 'Tuna Sandwich', type: 'nonveg', calories: 320, protein: 24, carbs: 34, fat: 10, description: 'Whole grain bread with tuna and veggies.' },
  { name: 'Chicken & Quinoa', type: 'nonveg', calories: 390, protein: 30, carbs: 38, fat: 10, description: 'Balanced bowl with chicken and quinoa.' },
]

const Diet = () => {
  const [selected, setSelected] = useState(vegItems[0])
  const [goal, setGoal] = useState('Maintain')
  const [water, setWater] = useState(2.2)
  const [budget, setBudget] = useState(25)
  const [category, setCategory] = useState('veg')

  const waterGoal = 3.0
  const pct = Math.min(100, Math.round((water / waterGoal) * 100))
  const activeItems = category === 'veg' ? vegItems : nonVegItems

  return (
    <div className="diet-page">
      <div className="diet-panel">
        <header className="diet-header">
          <div>
            <p className="tag">AI Nutrition Lab</p>
            <h1>Smart Diet Intelligence</h1>
            <p className="sub">AI meal plans, water coaching, budget-aware groceries, and visual nutrient patterns.</p>
          </div>
          <div className="goal-pill">Goal: <strong>{goal}</strong></div>
        </header>

        <section className="status-row">
          <div className="status-card">
            <p>Smart Item Suggestion</p>
            <strong>{selected.name}</strong>
            <small>{selected.description}</small>
          </div>
          <div className="status-card">
            <p>Macros</p>
            <strong>{selected.protein}g P • {selected.carbs}g C • {selected.fat}g F</strong>
            <small>Nutrition balanced for recovery.</small>
          </div>
          <div className="status-card">
            <p>AI Suggestion</p>
            <strong>Try <span className="pill">Budget-smart swap</span></strong>
            <small>Save cost while hitting macros.</small>
          </div>
        </section>

        <section className="meter-section">
          <div className="meter-header"><h3>Water Intake Coach</h3><span>{water.toFixed(1)}L / {waterGoal}L</span></div>
          <div className="water-bar"><div className="water-fill" style={{ width: `${pct}%` }} /></div>
          <div className="water-controls">
            <button onClick={() => setWater((v) => Math.max(0, v - 0.3))}>- 300ml</button>
            <button onClick={() => setWater((v) => Math.min(5, v + 0.3))}>+ 300ml</button>
          </div>
        </section>

        <section className="recommend-section">
          <div className="rec-head">
            <div>
              <h2>AI Meal Planner</h2>
              <p>Targeted vegetarian and non-vegetarian macros with cost and nutritional labels.</p>
            </div>
            <div className="category-switch">
              <button className={category === 'veg' ? 'active' : ''} onClick={() => setCategory('veg')}>Veg</button>
              <button className={category === 'nonveg' ? 'active' : ''} onClick={() => setCategory('nonveg')}>Non-Veg</button>
            </div>
            <div>
              <label>Goal</label>
              <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                <option>Lose</option>
                <option>Maintain</option>
                <option>Gain</option>
              </select>
            </div>
          </div>

          <div className="rec-list">
            {activeItems.slice(0, 10).map((item) => (
              <button
                key={item.name}
                className={selected.name === item.name ? 'active' : ''}
                onClick={() => setSelected(item)}
              >
                <div>
                  <h3>{item.name}</h3>
                  <small>{item.description}</small>
                </div>
                <div>
                  <span>{item.calories} kcal</span>
                  <span>{item.protein}P/{item.carbs}C/{item.fat}F</span>
                </div>
              </button>
            ))}
          </div>

          <div className="selected">
            <p>Selected meal details: <strong>{selected.name}</strong></p>
            <p>{selected.description}</p>
            <p>Nutrition: <strong>{selected.calories} kcal</strong>, Protein <strong>{selected.protein}g</strong>, Carbs <strong>{selected.carbs}g</strong>, Fat <strong>{selected.fat}g</strong>.</p>
          </div>
        </section>

        <section className="grocery-section">
          <div className="grocery-head">
            <div><h3>Budget-aware Grocery Generator</h3><p>Auto-suggested list for your selected meal plan under ${budget} budget.</p></div>
            <div>
              <label>Budget: ${budget}</label>
              <input type="range" min="10" max="60" value={budget} onChange={(e) => setBudget(+e.target.value)} />
            </div>
          </div>
          <div className="grocery-grid">
            {selected.meals ? selected.meals.map((item) => (
              <div key={item.item} className="grocery-card">
                <div><strong>{item.item}</strong><small>{item.qty}</small></div>
                <span>{item.price}</span>
              </div>
            )) : (
              <div className="grocery-card"><strong>Default List</strong><small>Use selected meal to generate list</small></div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Diet