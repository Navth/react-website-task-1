import React from 'react';
import '../App.css';

export const Auth = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email..." />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password..." />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
