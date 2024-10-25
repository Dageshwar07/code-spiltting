import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { NavBar } from './components/Navbar';

const Profile = lazy(() => import('./pages/Profile'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Login = lazy(() => import('./pages/Login'));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Routes>
          {
            isAuthenticated
              ? <Route path="/*" element={<PrivateRoutes />} />
              : <Route path="/*" element={<PublicRoutes setIsAuthenticated={setIsAuthenticated} />} />
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;

export const PublicRoutes = ({ setIsAuthenticated }) => {
  return (
    <Routes>
      <Route
        path='login'
        element={
          <div className="flex items-center justify-center min-h-screen bg-blue-50">
            <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
              <Login setIsAuthenticated={setIsAuthenticated} />
            </Suspense>
          </div>
        }
      />
      <Route path='/*' element={<Navigate to='/login' replace />} />
    </Routes>
  );
};

export const PrivateRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path='profile' element={<Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}> <Profile /></Suspense>} />
          <Route path='about' element={<Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}> <About /></Suspense>} />
          <Route path='contact' element={<Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}> <Contact /></Suspense>} />
          <Route path='faqs' element={<Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}> <FAQ /></Suspense>} />
          <Route path='/*' element={<Navigate to='/profile' replace />} />
        </Routes>
      </div>
    </>
  );
};
