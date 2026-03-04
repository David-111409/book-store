import { useState } from 'react';
import './forms.css';
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === '') {
      return toast.error('Email is required');
    }

    if (username.trim() === '') {
      return toast.error('Username is required');
    }

    if (password.trim() === '') {
      return toast.error('Password is required');
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords don't match");
    }

    return toast.success('Registration successful!');
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={formSubmitHandler} className="form">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit" className="form-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
