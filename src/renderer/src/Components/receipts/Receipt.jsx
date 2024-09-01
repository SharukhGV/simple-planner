import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Receipt({ receipt }) {
  const [theId, settheId] = useState("");
  const [date1, setdate1] = useState("");
  const [total1, settotal1] = useState(0);

  useEffect(() => {
    settheId(receipt.id);
    setdate1(receipt.date);
    settotal1(parseFloat(receipt.amount));
  }, [receipt.id, receipt.date, receipt.amount]);

  const amountStyle = {
    color: total1 < 0 ? 'red' : 'inherit'
  };

  return (
    <tbody>
    <tr>
      <td>{date1}</td>
      <td>
        <Link to={`/receipts/${theId}`}>{theId}</Link>
      </td>
      <td style={amountStyle}>{total1.toFixed(2)}</td>
    </tr>
    </tbody>
  );
}

export default Receipt;