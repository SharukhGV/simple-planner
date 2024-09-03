import React, { useState, useEffect } from 'react';
import './SavingsGoalSetter.css';

const SavingsGoalSetter = ({ currentSavings }) => {
  const [goal, setGoal] = useState(0);
  const [inputGoal, setInputGoal] = useState('');

  useEffect(() => {
    const savedGoal = localStorage.getItem('savingsGoal');
    if (savedGoal) {
      setGoal(parseFloat(savedGoal));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = parseFloat(inputGoal);
    if (!isNaN(newGoal) && newGoal > 0) {
      setGoal(newGoal);
      localStorage.setItem('savingsGoal', newGoal.toString());
      setInputGoal('');
    }
  };

  const calculateProgress = () => {
    if (goal === 0) return 0;
    const progress = (currentSavings / goal) * 100;
    return Math.min(progress, 100);
  };

  return (
    <div className="savings-goal-setter">
      <h3>Savings Goal</h3>
      <form onSubmit={handleSubmit} className="goal-form">
        <input
          type="number"
          value={inputGoal}
          onChange={(e) => setInputGoal(e.target.value)}
          placeholder="Enter your savings goal"
          required
        />
        <button type="submit">Set Goal</button>
      </form>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
      <div className="goal-info">
        <span>Current: ${currentSavings.toFixed(2)}</span>
        <span>Goal: ${goal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default SavingsGoalSetter;
