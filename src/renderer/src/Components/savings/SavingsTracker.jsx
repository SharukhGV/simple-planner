import React, { useState, useEffect } from 'react';
import './SavingsTracker.css';
import SavingsGoalSetter from '../goals/SavingsGoalSetter';
const SavingsTracker = () => {
  const [entries, setEntries] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('savingsEntries')) || [];
    setEntries(savedEntries);
    calculateTotal(savedEntries);
  }, []);

  const calculateTotal = (entries) => {
    const sum = entries.reduce((acc, entry) => acc + entry.amount, 0);
    setTotal(sum);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      date: new Date().toLocaleDateString()
    };
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem('savingsEntries', JSON.stringify(updatedEntries));
    calculateTotal(updatedEntries);
    setAmount('');
    setDescription('');
  };

  const handleDelete = (id) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem('savingsEntries', JSON.stringify(updatedEntries));
    calculateTotal(updatedEntries);
  };

  return (
    <div className="savings-tracker">
      <h2>Savings Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input 
            type="number" 
            id="amount"
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input 
            type="text" 
            id="description"
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Entry</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>${entry.amount.toFixed(2)}</td>
              <td>{entry.description}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(entry.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-savings">
        Total Savings: ${total.toFixed(2)}
      </div>
      <SavingsGoalSetter currentSavings={total} />

    </div>
  );
};

export default SavingsTracker;
