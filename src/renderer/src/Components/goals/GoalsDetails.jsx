import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function GoalsDetails() {
  const { id } = useParams();
  const [receipt, setReceipt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReceipt = () => {
      const storedData = window.localStorage.getItem("goals");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const foundReceipt = parsedData.find(item => item.id === parseInt(id, 10));
        setReceipt(foundReceipt || null);
      }
      setIsLoading(false);
    };

    fetchReceipt();
  }, [id]);

  useEffect(() => {
    console.log("receipt", receipt);
  }, [receipt]);

  const deleteReceipt = () => {
    const existingArray = JSON.parse(window.localStorage.getItem('goals')) || [];
    const updatedArray = existingArray.filter(obj => obj.id !== parseInt(id, 10));
    window.localStorage.setItem('goals', JSON.stringify(updatedArray));
    navigate(`/receipts`);
  };

  const handleDelete = () => {
    deleteReceipt();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!receipt) {
    return <div>Receipt not found</div>;
  }

  return (
    <div className="apple">
      <div className="spacerDIV"></div>
      <div className="showNavigation">
        <table className="thedreamtable">
          <tbody>
            <tr>
              <th>Category</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>ID</td>
              <td>{receipt.id}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{receipt.date}</td>
            </tr>
            <tr>
              <td>Notes</td>
              <td>{receipt.notes}</td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>{receipt.amount}</td>
            </tr>
          </tbody>
        </table>
        
        <span>
          <Link to={`/goals`}>
            <button className="backButton">Back</button>
          </Link>
        </span>
        <span>
          <Link to={`/goals/${receipt.id}/edit`}>
            <button className="editbutton">Edit</button>
          </Link>
        </span>
        <span>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
}

export default GoalsDetails;