import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone No. is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'Pan No. is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No. is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      navigate('/success', { state: formData });
    }
  };

  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const isFormValid = Object.values(formData).every(field => field !== '');

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-6">Registration Form</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.firstName && <span className="text-red-600 text-sm">{errors.firstName}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.lastName && <span className="text-red-600 text-sm">{errors.lastName}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.username && <span className="text-red-600 text-sm">{errors.username}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password:</label>
        <div className="mt-1 relative">
          <input
            type={formData.showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            {formData.showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.password && <span className="text-red-600 text-sm">{errors.password}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone No.:</label>
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.phoneNo && <span className="text-red-600 text-sm">{errors.phoneNo}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          {/* Add more countries as needed */}
        </select>
        {errors.country && <span className="text-red-600 text-sm">{errors.country}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">City:</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select City</option>
          <option value="New York">New York</option>
          <option value="Delhi">Delhi</option>
          {/* Add more cities as needed */}
        </select>
        {errors.city && <span className="text-red-600 text-sm">{errors.city}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">PAN No.:</label>
        <input
          type="text"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.panNo && <span className="text-red-600 text-sm">{errors.panNo}</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Aadhar No.:</label>
        <input
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.aadharNo && <span className="text-red-600 text-sm">{errors.aadharNo}</span>}
      </div>
      <button
        type="submit"
        disabled={!isFormValid}
        className={`mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isFormValid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300'}`}
      >
        Submit
      </button>
    </form>
  </div>
  );
};

export default Form;
