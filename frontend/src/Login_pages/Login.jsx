import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginPage_css/Login.css';

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your real client ID

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    mobile: '',
  });
  const [showMobileInput, setShowMobileInput] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // Google Sign-In handler
  const handleGoogleLogin = () => {
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: (response) => {
        const decoded = JSON.parse(atob(response.credential.split('.')[1]));
        setForm((prev) => ({ ...prev, email: decoded.email }));
      },
    });
    window.google.accounts.id.prompt();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1000);
    setTimeout(() => navigate('/userdetails'), 1200);
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
      <button className="login-google" type="button" onClick={handleGoogleLogin}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
        Login With Google
      </button>
      <button className="login-mobile" type="button" onClick={() => setShowMobileInput(true)}>
        <span role="img" aria-label="mobile">📞</span> Login With Mobile Number
      </button>
      {showMobileInput && (
        <div className="mobile-input-modal">
          <label>Mobile Number*</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            value={form.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength="10"
          />
          <button type="button" className="save-btn" onClick={() => setShowMobileInput(false)}>Save</button>
        </div>
      )}
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
        <label>Mobile Number*</label>
        <input
          type="tel"
          name="mobile"
          placeholder="Enter your mobile number"
          value={form.mobile}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          maxLength="10"
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
          <button type="button" className="cancel-btn" onClick={() => setForm({ email: '', password: '', mobile: '' })}>Cancel</button>
          <button type="submit" className="login-btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
