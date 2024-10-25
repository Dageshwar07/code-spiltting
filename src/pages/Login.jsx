// Login.jsx
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true); // Set the user as authenticated
    navigate('/profile');     // Redirect to the private route, e.g., profile
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <button
        onClick={handleLogin}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
