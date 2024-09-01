import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Receipt from "./Receipt"
import TotalAmount from "./TotalAmount";

function Receipts({ fileData }) {
  const [receipts, setReceipts] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredReceipts, setFilteredReceipts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedData = window.localStorage.getItem("dataJSON");
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

  function calculateTotal(data) {
    return data.reduce((acc, receipt) => {
      const amount = parseFloat(receipt.amount);
      return acc + (isNaN(amount) ? 0 : amount);
    }, 0);
  }

  useEffect(() => {
    const sum = calculateTotal(receipts);
    setTotal(sum);
  }, [receipts]);

  return (
    <div style={{marginLeft:"15px", marginRight:"15px"}} className="cardContact">
      <h1>Simple Planner</h1>
      <div>Your information is stored locally. Here is your funds log</div>
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