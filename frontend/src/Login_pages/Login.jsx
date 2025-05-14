import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginPage_css/Login.css';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle authentication
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="login-box">
      <div className="header-with-icon">
        <img
          src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
          alt="Profile Icon"
          className="profile-icon"
        />
        <h2>Login</h2>
      </div>
      <p>
        Don't have an account?{' '}
        <span className="signup-link" onClick={() => navigate('/')}>Sign up</span>
      </p>
      <button className="login-google">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
        Login With Google
      </button>
      <button className="login-mobile">
        <span role="img" aria-label="mobile">📞</span> Login With Mobile Number
      </button>
      <div className="divider">
        <hr /> <span>Or</span> <hr />
      </div>
      <form onSubmit={handleSubmit}>
        <label>Email*</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label>Password*</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
          minLength="8"
        />
        <small>Must be at least 8 Characters</small>
        {submitted && (
          <div className="success-message">
            ✅ Logged in successfully!
          </div>
        )}
        <div className="button-group">
          <button type="button" className="cancel-btn" onClick={() => setForm({ email: '', password: '' })}>Cancel</button>
          <button type="submit" className="login-btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
