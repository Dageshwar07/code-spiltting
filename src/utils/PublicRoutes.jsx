import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const Login = lazy(() => import('../pages/Login'));


export const PublicRoutes = ({ setIsAuthenticated }) => {
    return (
      <Routes>
    {console.log("public is rendered")}

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
  