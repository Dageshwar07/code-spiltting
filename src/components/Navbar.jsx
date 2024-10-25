import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const Navbar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {

    setTimeout(() => {
      setIsAuthenticated(false);
      navigate('/login');
    toast.success('Logout successfully!');

    });
  };
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/profile" className="text-lg font-semibold">MyApp</Link>
        <div className="flex space-x-4">
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/faqs" className="hover:underline">FAQs</Link>
          <button onClick={handleLogout} className="text-white bg-red-500 px-2 py-1 rounded">
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};
