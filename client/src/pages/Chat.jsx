import React, { useState, useRef, useEffect } from 'react'
import './Chat.css'

const mockResponses = [
  'Great progress! Keep your streak alive with a short evening stretch.',
  'Calories are solid. Add 120 calories from lean protein to stay in your muscle-gain window.',
  'Your sleep trend is up 8%. A 5-minute breathing session before bed would keep that momentum.',
  'Hydration check: 2.8L today is excellent. Aim for 3.1L to support recovery.'
]

const quickQuestions = [
  'Best pre-workout snack?',
  'How many calories to lose weight?',
  'Quick shoulder mobility routine',
  'How to improve sleep quality?'
]

const Chat = () => {
  const [messages, setMessages] = useState([
    { from: 'assistant', text: 'Hi! I’m your AI health coach. Ask me about workouts, diet, or habit tips.' }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage2 = (text) => {
    if (!text.trim()) return

    setMessages((prev) => [...prev, { from: 'user', text: text.trim() }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const reply = mockResponses[Math.floor(Math.random() * mockResponses.length)]
      setMessages((prev) => [...prev, { from: 'assistant', text: reply }])
      setTyping(false)
    }, 380)
  }

  const sendMessage = async (text) => {
  if (!text.trim()) return;

  const userMessage = { role: "user", content: text.trim() };

  // Show user message instantly
  setMessages((prev) => [...prev, { from: "user", text: text.trim() }]);
  setInput("");
  setTyping(true);

  try {
    const res = await fetch("http://localhost:4000/api/ai/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "user", // replace with real user later
        messages: [userMessage],
      }),
    });

    const data = await res.json();

    // Backend returns: reply
    setMessages((prev) => [
      ...prev,
      { from: "assistant", text: data.reply },
    ]);
  } catch (error) {
    console.error(error);
    setMessages((prev) => [
      ...prev,
      { from: "assistant", text: "Something went wrong 😢" },
    ]);
  } finally {
    setTyping(false);
  }
};


  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="chat-page">
      <div className="chat-shell">
        <div className="chat-header">
          <div>
            <p className="tag">AI Chat</p>
            <h1>Your personal fitness coach</h1>
            <small>Ask anything about workouts, nutrition, or wellness habits.</small>
          </div>
          <div className="status-pill">Online</div>
        </div>

        <div className="quick-actions">
          {quickQuestions.map((q) => (
            <button key={q} type="button" onClick={() => sendMessage(q)}>{q}</button>
          ))}
        </div>

        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-msg ${msg.from}`}>
              <span>{msg.text}</span>
            </div>
          ))}
          {typing && (
            <div className="chat-msg assistant typing"><span>Typing...</span></div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat