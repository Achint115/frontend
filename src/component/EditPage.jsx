import React, { useState } from 'react';

const EditPage = () => {
  const initialEmail = ''; // Default email state
  const [email, setEmail] = useState(initialEmail);
  const [submittedEmail, setSubmittedEmail] = useState(null);
  const [isEdited, setIsEdited] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsEdited(e.target.value !== initialEmail); // Check if it's edited
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdited) {
      setSubmittedEmail(email);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex items-center justify-between">
          <div className="menu-toggle cursor-pointer text-2xl" id="menu-toggle">
            &#9776;
          </div>
          <ul className="flex space-x-4" id="nav-list">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#courses" className="hover:underline">Courses</a></li>
            <li>
              <a href="signin.html" className="hover:underline">Sign in</a> /{' '}
              <a href="signup.html" className="hover:underline">Sign up</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Welcome Section */}
      <section id="home" className="welcome text-center py-20 bg-blue-100">
        <div className="welcome-container">
          <h1 className="text-4xl font-bold">
            Welcome to A<sub>3</sub>S
          </h1>
          <input
            type="text"
            placeholder="Search Courses..."
            className="search-bar mt-4 p-2 border rounded w-1/2"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
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
          <div key={index} className="course-card border p-4 rounded shadow-lg">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <select className="semester-dropdown p-2 border rounded w-full">
              <option value="sem-1">Semester 1</option>
              <option value="sem-2">Semester 2</option>
              <option value="sem-3">Semester 3</option>
            </select>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 Course Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EditPage;
