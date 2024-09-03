import React, { useState, useEffect } from 'react';

const SpendingLimitSetter = () => {
  const [spendingLimit, setSpendingLimit] = useState('');
  const [limitCategory, setLimitCategory] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [hasLimit, setHasLimit] = useState(false);

  useEffect(() => {
    // Load spending limit from localStorage on component mount
    const storedLimit = localStorage.getItem('userSpendingLimit');
    if (storedLimit) {
      const { amount, category } = JSON.parse(storedLimit);
      setSpendingLimit(amount);
      setLimitCategory(category);
      setHasLimit(true);
    } else {
      setIsEditing(true); // If no limit is stored, show the input fields
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (spendingLimit && limitCategory) {
      const limit = { amount: spendingLimit, category: limitCategory };
      localStorage.setItem('userSpendingLimit', JSON.stringify(limit));
      setHasLimit(true);
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="limit-form">
        <div className="form-group">
          <label htmlFor="spendingLimit">Spending Limit:</label>
          <input
            type="number"
            id="spendingLimit"
            value={spendingLimit}
            onChange={(e) => setSpendingLimit(e.target.value)}
            placeholder="Enter your spending limit"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="limitCategory">Limit Category:</label>
          <input
            type="text"
            id="limitCategory"
            value={limitCategory}
            onChange={(e) => setLimitCategory(e.target.value)}
            placeholder="Enter the category for this limit"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Set Spending Limit</button>
      </form>
    );
  }

  return (
    <div className="limit-display">
      <h2>Spending Limit Threshold</h2>
      <p>Amount: ${spendingLimit}</p>
      <p>Category: {limitCategory}</p>
      <button onClick={handleEdit} className="edit-btn">Edit Spending Limit</button>
    </div>
  );
};

export default SpendingLimitSetter;