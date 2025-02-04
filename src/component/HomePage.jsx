import React from 'react';
import { useLocation } from 'react-router-dom';
import EditPage from './EditPage';
const HomePage = () => {
  const location = useLocation();
  const user = location.state?.user; // Safely accessing user data

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user ? user.name : "Guest"}!</h1>
      {user && (
        <div className="mt-4">
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
      <div>
        <EditPage/>
      </div>
    </div>
  );
};

export default HomePage;
