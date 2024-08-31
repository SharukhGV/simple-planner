import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Receipt({ receipt }) {

  const [theId, settheId] = useState([]);
  const [date1, setdate1] = useState([]);
  const [total1, settotal1] = useState([]);

  useEffect(() => {

    window.localStorage.getItem("dataJSON");
    settheId(receipt.id)
    setdate1(receipt.date)
    settotal1(receipt.amount)
  }, [receipt.id, receipt.date, receipt.amount])


  return (
    <>
      <tbody>
        <tr>
          <td>{date1}</td>
          <td><Link to={`/receipts/${theId}`}>{theId}</Link>
          </td>
          <td>{total1}</td>
        </tr>
      </tbody>


    </>


  );
}

export default Receipt;