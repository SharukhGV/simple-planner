import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Receipt from "./Receipt"
import TotalAmount from "./TotalAmount";

function Receipts({ fileData }) {
  const [receipts, setReceipts] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredReceipts, setFilteredReceipts] = useState([]);
  const [total, setTotal] = useState(0);
  const [displayMode, setDisplayMode] = useState('all'); // 'all', 'expenses', or 'funds'
  const [searchField, setSearchField] = useState('all'); // 'all', 'notes', 'date', or 'id'

  useEffect(() => {
    const storedData = window.localStorage.getItem("dataJSON");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setReceipts(parsedData);
    }
  }, []);

  useEffect(() => {
    let filtered = receipts.filter(receipt => {
      if (query === "") return true;
      
      switch(searchField) {
        case 'notes':
          return receipt.notes.toLowerCase().includes(query.toLowerCase());
        case 'date':
          return receipt.date.toLowerCase().includes(query.toLowerCase());
        case 'id':
          return receipt.id.toString().includes(query);
        default: // 'all'
          return receipt.id.toString().includes(query) ||
                 receipt.date.toLowerCase().includes(query.toLowerCase()) ||
                 receipt.amount.toString().includes(query) ||
                 receipt.notes.toLowerCase().includes(query.toLowerCase());
      }
    });

    // Apply display mode filter
    if (displayMode === 'expenses') {
      filtered = filtered.filter(receipt => parseFloat(receipt.amount) < 0);
    } else if (displayMode === 'funds') {
      filtered = filtered.filter(receipt => parseFloat(receipt.amount) >= 0);
    }

    setFilteredReceipts(filtered);
  }, [query, receipts, displayMode, searchField]);

  function handleTextChangeSearch(e) {
    setQuery(e.target.value);
  }

  function calculateTotal(data) {
    return data.reduce((acc, receipt) => {
      const amount = parseFloat(receipt.amount);
      return acc + (isNaN(amount) ? 0 : amount);
    }, 0);
  }

  useEffect(() => {
    const sum = calculateTotal(filteredReceipts);
    setTotal(sum);
  }, [filteredReceipts]);

  return (
    <div style={{marginLeft:"15px", marginRight:"15px"}} className="cardContact">
      <h1>Simple Planner</h1>
      <div>Your information is stored locally. Here is your funds log</div>
      <div className="search-container">
        <input 
          type="text" 
          onChange={handleTextChangeSearch} 
          placeholder="Search receipts..." 
          value={query}
        />
        <div className="search-buttons">
          <button onClick={() => setSearchField('all')} className={searchField === 'all' ? 'active' : ''}>All Fields</button>
          <button onClick={() => setSearchField('notes')} className={searchField === 'notes' ? 'active' : ''}>Notes</button>
          <button onClick={() => setSearchField('date')} className={searchField === 'date' ? 'active' : ''}>Date</button>
          <button onClick={() => setSearchField('id')} className={searchField === 'id' ? 'active' : ''}>ID</button>
        </div>
      </div>
      <p>Filter Funds</p>
      <div className="filter-buttons">
        <button onClick={() => setDisplayMode('all')} className={displayMode === 'all' ? 'active' : ''}>All Totals</button>
        <button onClick={() => setDisplayMode('expenses')} className={displayMode === 'expenses' ? 'active' : ''}>Expenses</button>
        <button onClick={() => setDisplayMode('funds')} className={displayMode === 'funds' ? 'active' : ''}>Funds</button>
      </div>
      <div className="cardContact">
        <table className="thedreamtable">
          <thead>
            <tr>
              <th>Date</th>
              <th>ID</th>
              <th>Amount</th>
            </tr>
          </thead>
            {filteredReceipts.map((receipt) => (
              <Receipt
                key={receipt.id}
                receipt={receipt}
              />
            ))}
        </table>
      </div>
      <div className="total-amount">
        <TotalAmount total={Number(total)} />
      </div>
    </div>
  );
}

export default Receipts;