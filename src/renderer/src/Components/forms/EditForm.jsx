import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

function EditForm() {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const [receipt, setReceipt] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReceipt = () => {
      const storedData = window.localStorage.getItem("dataJSON");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const foundReceipt = parsedData.find(item => item.id === parseInt(id, 10));
        if (foundReceipt) {
          setReceipt(foundReceipt);
          setDate(new Date(foundReceipt.date).toISOString().slice(0, 16));
          setAmount(foundReceipt.amount.toString());
          setNotes(foundReceipt.notes);
        }
      }
    };

    fetchReceipt();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const localDate = new Date(date);
    const formattedDate = localDate.toLocaleString();

    const updatedEntry = {
      ...receipt,
      date: formattedDate,
      amount: parseFloat(amount),
      notes: notes,
    };

    const storedData = JSON.parse(window.localStorage.getItem("dataJSON"));
    const updatedData = storedData.map(item => 
      item.id === parseInt(id, 10) ? updatedEntry : item
    );
    window.localStorage.setItem("dataJSON", JSON.stringify(updatedData));

    navigate('/receipts');
  };

  const handleCancel = () => {
    navigate('/receipts');
  };

  if (!receipt) {
    return <div>Loading...</div>;
  }

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
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;