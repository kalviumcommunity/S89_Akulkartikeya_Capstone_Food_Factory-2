import React, { useState } from 'react';
import './cooki.css';
import { useNavigate } from 'react-router-dom';

// Reuse the Navbar from recipes page for consistent theme
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="navbar-item home" onClick={() => navigate('/recipes')}>Home</span>
      </div>
      <span className="navbar-item" onClick={() => navigate('/explore-recipes')}>Explore Recipes</span>
      <span className="navbar-item active" onClick={() => navigate('/cooki-ai')}>COOKI(ai)</span>
      <span className="navbar-item" onClick={() => navigate('/shopping-grocery')}>Shopping and Grocery</span>
      <span className="navbar-item doctor" onClick={() => navigate('/doctor')}>Doctor</span>
    </nav>
  );
};

const COOKI = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I am COOKI(ai). Ask me anything about meals, nutrition, or health!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // TODO: Replace with your actual OpenAI API key
  const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY_HERE';

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          max_tokens: 150,
        }),
      });
      const data = await response.json();
      const aiReply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';
      setMessages([...newMessages, { role: 'assistant', content: aiReply }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: 'Error: Unable to connect to AI.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="cooki-bg">
      <Navbar />
      <main className="cooki-main">
        <img src="https://img.icons8.com/color/96/chef-hat.png" alt="COOKI AI" className="cooki-logo" />
        <h1 className="cooki-title">COOKI(ai)</h1>
        <p className="cooki-desc">
          Your personal AI-powered meal planner and nutrition assistant. Ask COOKI(ai) for healthy meal suggestions, personalized diet
          plans, or tips for your fitness goals!
        </p>
        {/* AI Chat Section */}
        <div className="cooki-chat-box">
          <h2 className="cooki-section-title">Ask COOKI(ai) anything:</h2>
          <div className="cooki-chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`cooki-chat-msg ${msg.role}`}> 
                <b className="cooki-chat-label">{msg.role === 'user' ? 'You' : 'COOKI(ai)'}:</b> {msg.content}
              </div>
            ))}
            {loading && <div className="cooki-chat-typing">COOKI(ai) is typing...</div>}
          </div>
          <div className="cooki-chat-input-row">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Type your prompt..."
              className="cooki-chat-input"
              disabled={loading}
            />
            <button onClick={handleSend} disabled={loading || !input.trim()} className="cooki-chat-send">
              Send
            </button>
          </div>
        </div>
        <div className="cooki-coming-soon">
          <span>More features coming soon...</span>
        </div>
      </main>
    </div>
  );
};




export default COOKI;
