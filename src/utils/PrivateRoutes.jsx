import { lazy, Suspense, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const Profile = lazy(() => import('../pages/Profile'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Login = lazy(() => import('../pages/Login'));
import { Navbar } from '../components/Navbar';


export const PrivateRoutes = ({ setIsAuthenticated }) => {
    return (
      <>
        <Navbar setIsAuthenticated={setIsAuthenticated} /> 
        <div className="container mx-auto mt-4">
          <Routes>
    {console.log("private route is rendered")}

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