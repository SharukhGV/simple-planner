import React, { useState, useEffect } from 'react';

function EditForm() {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    // Convert the stored date string back to a format that datetime-local input can use
    const dateObj = new Date(entry.date);
    const formattedDate = dateObj.toISOString().slice(0, 16); // Format: "YYYY-MM-DDTHH:mm"

    setDate(formattedDate);
    setAmount(entry.amount.toString());
    setNotes(entry.notes);
  }, [entry]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert date to local time
    const localDate = new Date(date);
    const formattedDate = localDate.toLocaleString();

    const updatedEntry = {
      ...entry,
      date: formattedDate,
      amount: parseFloat(amount),
      notes: notes,
    };

    onSave(updatedEntry);
  };

  return (
    <div className="parent">
      <h2>Edit Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="datetime-local"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Monetary Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="0.01"
            min="0"
            placeholder="0.00"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter any additional notes here"
            rows="4"
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="save-btn">Save Changes</button>
          <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;