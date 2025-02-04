import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const user = location.state?.user; // Safely accessing user data
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('#sidebar') && !event.target.closest('#sidebar-toggle')) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <> 
      <nav className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 flex items-center justify-between md:justify-start md:space-x-8 shadow-lg">
        <button 
          id="sidebar-toggle"
          className="md:hidden text-2xl"
          onClick={toggleSidebar}
        >
          &#9776;
        </button>
        <h1 className="text-lg font-bold">A3S</h1>

        {/* Top Navigation for Large Screens */}
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#courses" className="hover:underline">Courses</a>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar Section for Small Screens */}
        <div id="sidebar" className={`fixed md:hidden top-0 left-0 h-full bg-gradient-to-b from-gray-900 to-gray-700 text-white w-64 transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:underline" onClick={toggleSidebar}>Home</a></li>
              <li><a href="#about" className="hover:underline" onClick={toggleSidebar}>About</a></li>
              <li><a href="#courses" className="hover:underline" onClick={toggleSidebar}>Courses</a></li>
             
            </ul>
          </div>
        </div>

        <div className="flex-1 p-4 bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, {user ? user.name : "Guest"}!</h1>
          {user && (
            <div className="mt-4 bg-white p-4 rounded shadow">
              <p className="text-gray-700">Email: {user.email}</p>
              <p className="text-gray-700">Role: {user.role}</p>
            </div>
          )}

          {/* Welcome Section */}
          <section id="home" className="welcome text-center py-20 bg-gradient-to-r from-blue-100 to-purple-200 rounded-lg shadow-md mt-6">
            <div className="welcome-container">
              <h1 className="text-5xl font-extrabold text-gray-800">
                Welcome to A<sub>3</sub>S
              </h1>
              <input
                type="text"
                placeholder="Search Courses..."
                className="search-bar mt-6 p-3 border rounded-lg w-3/4 md:w-1/2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </section>

          {/* Courses Section */}
          <section id="courses" className="courses-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8 "  style={{ backgroundImage: "url('board-5599231_1280.png')" }} >
            {[
              { title: 'BCA (DS+AI)', image: 'Screenshot_3-2-2025_17553_i.pinimg.com.jpeg' },
              { title: 'BCA', image: 'Screenshot_3-2-2025_17553_i.pinimg.com.jpeg' },
              { title: 'B TECH (DS+AI)', image: 'Screenshot_3-2-2025_17553_i.pinimg.com.jpeg' },
              { title: 'BSc Agriculture', image: 'Screenshot_3-2-2025_17553_i.pinimg.com.jpeg' },
              { title: 'B Pharma', image: 'Screenshot_3-2-2025_17553_i.pinimg.com.jpeg' },
              { title: 'Diploma', image: 'Screenshot_3-2-2025_17553_i.pinimg.com.jpeg' },
              { title: 'Polytechnique', image: 'Screenshot_3-2-2025_17553_i.pinimg.com.jpeg' },
              { title: 'MCA', image: 'Screenshot_3-2-2025_17553_i.pinimg.com.jpeg' },
              { title: 'M TECH', image: 'Screenshot_3-2-2025_17553_i.pinimg.com.jpeg' },
            ].map((course, index) => (
              <div key={index} className="course-card bg-white border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover mb-4 rounded" />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h2>
                <select className="semester-dropdown p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-400">
                  <option value="sem-1">Semester 1</option>
                  <option value="sem-2">Semester 2</option>
                  <option value="sem-3">Semester 3</option>
                </select>
              </div>
            ))}
          </section>

          {/* Footer Section */}
          <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center p-4 rounded-t-lg shadow-lg mt-8">
            <p>&copy; 2025 Course Website. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;