import React, { useState } from 'react';
import '../LoginPage_css/Signup.css';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    termsAccepted: true,
  });

  const [submitted, setSubmitted] = useState(false); // For showing success message

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    setSubmitted(true);

    // Optional: reset form after submission
    setForm({
      name: '',
      email: '',
      password: '',
      termsAccepted: true,
    });

    // Optional: Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="signup-box">
      <div className="header-with-icon">
        <img
          src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
          alt="Profile Icon"
          className="profile-icon"
        />
        <h2>Create an Account</h2>
      </div>
      <p>
        Already have an account? <span className="login-link">Log in</span>
      </p>

      <button className="signup-google">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
        Signup With Google
      </button>

      <button className="signup-mobile">
        <span role="img" aria-label="mobile">📞</span> Sign in With Mobile Number
      </button>

      <div className="divider">
        <hr /> <span>Or</span> <hr />
      </div>

      <form onSubmit={handleSubmit}>
        <label>Name*</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

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
          placeholder="Create a Password"
          value={form.password}
          onChange={handleChange}
          required
          minLength="8"
        />
        <small>Must be at least 8 Characters</small>

        <div className="checkbox-row">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={form.termsAccepted}
            onChange={handleChange}
            required
          />
          <label>I agree with terms & conditions</label>
        </div>

        {submitted && (
          <div className="success-message">
            ✅ Signed in successfully!
          </div>
        )}

        <div className="button-group">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="signup-btn">Sign Up</button>
        </div>
      </form>
    </div>
    
  );
};

export default Signup;
