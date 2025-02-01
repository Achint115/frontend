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
    <div className="max-w-md mx-auto p-4 border rounded-xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4">Edit Email</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-700">Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className={`mt-4 w-full py-2 px-4 rounded-md text-white ${
            isEdited ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!isEdited} // Disable button if not edited
        >
          Submit
        </button>
      </form>
      {submittedEmail && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded-md">
          <strong>Submitted Email:</strong> {submittedEmail}
        </div>
      )}
    </div>
  );
};

export default EditPage;
