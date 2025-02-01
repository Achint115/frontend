import React, { useState } from 'react';
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    role:"user"
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.email || !formData.name || !formData.password || !formData.phoneNumber) {
        return;
      }

      const response = await axios.post("https://crud-backend-y21o.onrender.com/api/auth/register", formData);
      setMessage(response.data);
      alert("Registration Successful!");

      // Clear form after successful registration
      setFormData({ name: '', email: '', password: '', phoneNumber: '' });

    } catch (err) {
      console.log("Registration Error:", err);
      alert("Registration Failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md shadow-xl rounded-2xl p-6 bg-white">
        <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
