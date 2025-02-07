import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const user = location.state?.user;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    { title: 'BCA (DS+AI)' },
    { title: 'BCA' },
    { title: 'B TECH (DS+AI)' },
    { title: 'BSc Agriculture' },
    { title: 'B Pharma' },
    { title: 'Diploma' },
    { title: 'Polytechnique' },
    { title: 'MCA' },
    { title: 'M TECH' }
  ];

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const handleSemesterChange = (e, courseIndex) => {
    setSelectedSemester(prev => ({
      ...prev,
      [courseIndex]: e.target.value,
    }));
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white p-4 flex items-center justify-between md:justify-start md:space-x-8 shadow-xl">
        <button
          id="sidebar-toggle"
          className="md:hidden text-3xl"
          onClick={toggleSidebar}
        >
          &#9776;
        </button>
        <h1 className="text-2xl font-extrabold tracking-wide">A3S</h1>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#courses" className="hover:text-gray-300 transition-colors">Courses</a>
        </div>
      </nav>

      <div className="flex">
        <div id="sidebar" className={`fixed md:hidden top-0 left-0 h-full bg-gradient-to-b from-gray-800 to-gray-600 text-white w-64 transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Menu</h2>
            <ul className="space-y-6">
              <li><a href="#home" className="hover:text-gray-300" onClick={toggleSidebar}>Home</a></li>
              <li><a href="#about" className="hover:text-gray-300" onClick={toggleSidebar}>About</a></li>
              <li><a href="#courses" className="hover:text-gray-300" onClick={toggleSidebar}>Courses</a></li>
            </ul>
          </div>
        </div>

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <h1 className="text-4xl font-extrabold text-gray-800">Welcome, {user ? user.name : "Guest"}!</h1>
          {user && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">Email: {user.email}</p>
              <p className="text-gray-700">Role: {user.role}</p>
            </div>
          )}

          <section id="home" className="text-center py-20 bg-gradient-to-r from-teal-100 to-indigo-200 rounded-lg shadow-lg mt-8">
            <h1 className="text-5xl font-extrabold text-gray-800">
              Welcome to A<sub>3</sub>S
            </h1>
            <input
              type="text"
              placeholder="Search Courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mt-6 p-4 border rounded-lg w-3/4 md:w-1/2 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400"
            />
          </section>

          <section id="courses" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {filteredCourses.length > 0 ? filteredCourses.map((course, index) => (
              <div key={index} className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{course.title}</h2>
                <select
                  className="p-3 border rounded w-full focus:outline-none focus:ring-4 focus:ring-teal-400"
                  value={selectedSemester[index] || ''}
                  onChange={(e) => handleSemesterChange(e, index)}
                >
                  <option value="">Select Semester</option>
                  <option value="sem-1">Semester 1</option>
                  <option value="sem-2">Semester 2</option>
                  <option value="sem-3">Semester 3</option>
                </select>
                {selectedSemester[index] === 'sem-1' && (
  <ul className="mt-4 space-y-2">
    <li className="flex items-center justify-between">
      <a href="https://github.com/Achint115/frontend/blob/main/src/component/Structured%20programming%20using%20C%20IT-1.pdf" className="text-teal-600 hover:underline">
        Structure of C programming language
      </a>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
        Upload
        <input type="file" className="hidden" />
      </label>
    </li>
    <li className="flex items-center justify-between">
      <a href="/sem-1/Mathmatic" className="text-teal-600 hover:underline">Mathematic</a>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
        Upload
        <input type="file" className="hidden" />
      </label>
    </li>
    <li className="flex items-center justify-between">
      <a href="/sem-1/Data Science" className="text-teal-600 hover:underline">Data Science</a>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
        Upload
        <input type="file" className="hidden" />
      </label>
    </li>
  </ul>
)}

{selectedSemester[index] === 'sem-2' && (
  <ul className="mt-4 space-y-2">
    <li className="flex items-center justify-between">
      <a href="/sem-2/subject-1" className="text-teal-600 hover:underline">Subject 1</a>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
        Upload
        <input type="file" className="hidden" />
      </label>
    </li>
    <li className="flex items-center justify-between">
      <a href="/sem-2/subject-2" className="text-teal-600 hover:underline">Subject 2</a>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
        Upload
        <input type="file" className="hidden" />
      </label>
    </li>
    <li className="flex items-center justify-between">
      <a href="/sem-2/subject-3" className="text-teal-600 hover:underline">Subject 3</a>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
        Upload
        <input type="file" className="hidden" />
      </label>
    </li>
  </ul>
)}

{selectedSemester[index] === 'sem-3' && (
  <ul className="mt-4 space-y-2">
    <li className="flex items-center justify-between">
      <a href="/sem-3/subject-1" className="text-teal-600 hover:underline">Subject 1</a>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
        Upload
        <input type="file" className="hidden" />
      </label>
    </li>
    <li className="flex items-center justify-between">
      <a href="/sem-3/subject-2" className="text-teal-600 hover:underline">Subject 2</a>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
        Upload
        <input type="file" className="hidden" />
      </label>
    </li>
    <li className="flex items-center justify-between">
      <a href="/sem-3/subject-3" className="text-teal-600 hover:underline">Subject 3</a>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
        Upload
        <input type="file" className="hidden" />
      </label>
    </li>
  </ul>
)}

              </div>
            )) : (
              <p className="col-span-full text-center text-gray-500">No courses found</p>
            )}
          </section>

          <footer className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white text-center p-4 rounded-t-lg shadow-lg mt-12">
            <p>&copy; 2025 Course Website. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
