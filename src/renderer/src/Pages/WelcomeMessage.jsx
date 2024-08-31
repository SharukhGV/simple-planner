import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    // Load name from localStorage on component mount
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setName(storedName);
    } else {
      setIsEditing(true); // If no name is stored, show the input field
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      setName(inputName.trim());
      localStorage.setItem('userName', inputName.trim());
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setInputName(name);
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="welcome-form">
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Enter your name"
          className="name-input"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    );
  }

  return (
    <div className="welcome-message">
      Welcome back, <span onClick={handleEdit} className="editable-name">{name}</span>!
    </div>
  );
};

export default WelcomeMessage;