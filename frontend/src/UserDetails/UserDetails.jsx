import React, { useState } from 'react';
import './UserDetails.css';

const initialState = {
  name: '',
  age: '',
  weight: '',
  height: '',
  bmi: '',
  gender: '',
  bloodGroup: '',
};

const UserDetails = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'weight' || name === 'height') {
      const weight = name === 'weight' ? value : form.weight;
      const height = name === 'height' ? value : form.height;
      if (weight && height) {
        const bmi = (parseFloat(weight) / ((parseFloat(height) / 100) ** 2)).toFixed(2);
        setForm((prev) => ({ ...prev, bmi }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="userdetails-box">
      <div className="header-with-icon">
        <img
          src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
          alt="Profile Icon"
          className="profile-icon"
        />
        <h2>User Details</h2>
      </div>
      <form onSubmit={handleSubmit} className="userdetails-form">
        <label>Name*</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />

        <label>Age*</label>
        <input type="number" name="age" value={form.age} onChange={handleChange} required min="0" />

        <label>Weight (kg)*</label>
        <input type="number" name="weight" value={form.weight} onChange={handleChange} required min="0" />

        <label>Height (cm)*</label>
        <input type="number" name="height" value={form.height} onChange={handleChange} required min="0" />

        <label>BMI</label>
        <input type="text" name="bmi" value={form.bmi} readOnly />

        <label>Gender*</label>
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Blood Group*</label>
        <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} required>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        {submitted && <div className="success-message">✅ Details saved successfully!</div>}

        <div className="button-group">
          <button type="reset" onClick={() => setForm(initialState)} className="cancel-btn">Reset</button>
          <button type="submit" className="save-btn">Save</button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
