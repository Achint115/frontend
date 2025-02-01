import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role:"user"
  });
  const [token, setToken]=useState("")
  const [user, setUser]=useState({})
  const [message, setMessage] = useState("");
const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.email ||  !formData.password ) {
        return alert("All Fields required")
      }

      const response = await axios.post("https://crud-backend-y21o.onrender.com/api/auth/login", formData);
      setMessage(response.data);
     await localStorage.setItem("token", response.data.token);
    
      // Clear form after successful registration
      setFormData({ email: '', password: ''});
      navigate("/home", { state: { user: response.data.user } });

    } catch (err) {
      console.log("Registration Error:", err);
      alert("Registration Failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md shadow-xl rounded-2xl p-6 bg-white">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
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
         <div className="text-sm text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
