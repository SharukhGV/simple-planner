import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Receipt from "./Receipt"
function Receipts({ fileData }) {
  const [dreams7, setdreams7] = useState([]);



  useEffect(() => {
    const newObj = JSON.parse(window.localStorage.getItem('dataJSON'))
    setdreams7(newObj)

  }, [])


  const [query, setQuery] = useState("")
  function handletextChangeSearch(e) {
    setQuery(e.target.value)
  }

  return (

    <div style={{marginLeft:"15px",marginRight:"15px"}} className="cardContact">
      <h1>All Receipts</h1>
      <div>Your Receipts are stored locally. You can choose to download your data as a PDF (for your records) or JSON File (for reupload). This app utilizes local storage instead of an external database. </div>
      <input type="text" onChange={handletextChangeSearch} placeholder="Search by id..." value={query}></input>
      <div className="cardContact">

        <table className="thedreamtable">
          <thead>
            <tr>
              <th>Date</th>
              <th>ID</th>
              <th>Amount</th>
            </tr></thead>
          {!!query ? <>{filterById.map((receipt) => {

            return (

       <Receipt receipt={receipt} />
            );
          })}</>
            :
            dreams7.map((receipt) => {

              return (

                <Receipt
                  key={receipt.id} receipt={receipt}
                />
              );
            })}


        </table>
      
      </div></div>
  );
}


export default Receipts;