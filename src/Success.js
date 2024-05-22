// Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const formData = location.state || {};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Submission Successful</h1>
      <p className="mb-4">Here are the details you submitted:</p>
      <ul className="list-disc pl-5 space-y-2">
        {Object.entries(formData).map(([key, value]) => (
          key !== 'showPassword' && <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Success;
