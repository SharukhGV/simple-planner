import React, { useState, useEffect } from 'react';

const GoalSetter = () => {
  const [goalAmount, setGoalAmount] = useState('');
  const [goalTopic, setGoalTopic] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [hasGoal, setHasGoal] = useState(false);

  useEffect(() => {
    // Load goal from localStorage on component mount
    const storedGoal = localStorage.getItem('userGoal');
    if (storedGoal) {
      const { amount, topic } = JSON.parse(storedGoal);
      setGoalAmount(amount);
      setGoalTopic(topic);
      setHasGoal(true);
    } else {
      setIsEditing(true); // If no goal is stored, show the input fields
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goalAmount && goalTopic) {
      const goal = { amount: goalAmount, topic: goalTopic };
      localStorage.setItem('userGoal', JSON.stringify(goal));
      setHasGoal(true);
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="goal-form">
        <div className="form-group">
          <label htmlFor="goalAmount">Goal Amount:</label>
          <input
            type="number"
            id="goalAmount"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            placeholder="Enter your goal amount"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="goalTopic">Goal Topic:</label>
          <input
            type="text"
            id="goalTopic"
            value={goalTopic}
            onChange={(e) => setGoalTopic(e.target.value)}
            placeholder="Enter the topic of your goal"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Set Goal</button>
      </form>
    );
  }

  return (
    <div className="goal-display">
      <h2>Your Goal</h2>
      <p>Amount: ${goalAmount}</p>
      <p>Topic: {goalTopic}</p>
      <button onClick={handleEdit} className="edit-btn">Edit Goal</button>
    </div>
  );
};

export default GoalSetter;