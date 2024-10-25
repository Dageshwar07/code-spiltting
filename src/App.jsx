import {useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './utils/PrivateRoutes';
import { PublicRoutes } from './utils/PublicRoutes';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Routes>
          {
            isAuthenticated
              ? <Route path="/*" element={<PrivateRoutes setIsAuthenticated={setIsAuthenticated} />} />
              : <Route path="/*" element={<PublicRoutes setIsAuthenticated={setIsAuthenticated} />} />
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;


