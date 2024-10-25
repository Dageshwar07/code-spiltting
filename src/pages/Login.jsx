// Login.jsx
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUsername = 'dageshwar';
    const validPassword = 'admin@123';

    // Check if the entered credentials are valid
    if (username === validUsername && password === validPassword) {
      setTimeout(() => {
      setIsAuthenticated(true);
      }, 1000);
      toast.success('login successfully!');

    } else {
      toast.error('Invalid username or password!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="mb-4 text-xl font-bold">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
