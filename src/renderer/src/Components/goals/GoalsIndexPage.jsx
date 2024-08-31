import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GoalGateway from "./GoalGateway"

function GoalsIndexPage({ fileData }) {
  const [receipts, setReceipts] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredReceipts, setFilteredReceipts] = useState([]);

  useEffect(() => {
    const storedData = window.localStorage.getItem("goals");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setReceipts(parsedData);
    }
  }, []);

  useEffect(() => {
    const filtered = receipts.filter(receipt => 
      receipt.id.toString().includes(query) ||
      receipt.date.toLowerCase().includes(query.toLowerCase()) ||
      receipt.amount.toString().includes(query) ||
      receipt.notes.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredReceipts(filtered);
  }, [query, receipts]);

  function handleTextChangeSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div style={{marginLeft:"15px", marginRight:"15px"}} className="cardContact">
      <h1>Goals</h1>
      <div>Your information is stored locally. Here are your current financial goals</div>
      <input 
        type="text" 
        onChange={handleTextChangeSearch} 
        placeholder="Search receipts..." 
        value={query}
      />
      <div className="cardContact">
        <table className="thedreamtable">
          <thead>
            <tr>
              <th>Date</th>
              <th>ID</th>
              <th>Amount</th>
            </tr>
          </thead>
            {(query ? filteredReceipts : receipts).map((receipt) => (
              <GoalGateway
                key={receipt.id}
                receipt={receipt}
              />
            ))}
        </table>
      </div>
    </div>
  );
}

export default GoalsIndexPage;