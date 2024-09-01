import React, { useEffect, useState } from 'react';

const TotalAmount = ({ total }) => {
  const [goalAmount, setGoalAmount] = useState(null);
  const [isGoalReached, setIsGoalReached] = useState(false);

  useEffect(() => {
    const storedGoal = localStorage.getItem('userGoal');
    if (storedGoal) {
      const { amount } = JSON.parse(storedGoal);
      setGoalAmount(parseFloat(amount));
    }
  }, []);

  useEffect(() => {
    setIsGoalReached(goalAmount !== null && typeof total === 'number' && total >= goalAmount);
  }, [total, goalAmount]);

  const formatAmount = (amount) => {
    return typeof amount === 'number' ? amount.toFixed(2) : '0.00';
  };

  return (
    <div className={`total-amount ${isGoalReached ? 'goal-reached' : ''}`}>
      <strong>Total Amount: ${formatAmount(total)}</strong>
      {goalAmount === null ? (
        <div className="no-goal-message">No goal set. Set a goal to track your progress!</div>
      ) : isGoalReached ? (
        <div className="goal-achieved">
          <span className="goal-achieved-message">Goal Surpassed!</span>
        </div>
      ) : (
        <div className="goal-progress">
          Goal: ${formatAmount(goalAmount)} (${formatAmount(goalAmount - (total || 0))} to go)
        </div>
      )}
    </div>
  );
};

export default TotalAmount;