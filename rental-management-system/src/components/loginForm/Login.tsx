import './login.css';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Add your login logic here
    if (username && password) {
      alert(`Username: ${username}, Password: ${password}`);
    } else {
      setError("Both fields are required.");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        {error && <div className="error-message">{error}</div>}
        <input type="submit" value="Login" />
      </form>
      <div className="footer">
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;