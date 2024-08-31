// import { useNavigate, Link } from "react-router-dom";//
// import { useState, useEffect } from "react";
// import moment from "moment";
// import { v4 as uuidv4 } from 'uuid';
// import "./newForm.css"

// function NewForm() {
//   const date7 = new Date();
//   // Combine date and time into a single Date object
//   const combinedDateTime = new Date(`${date}T${time}`);
    
//   // Format the date to local date string
//   const localDate = combinedDateTime.toLocaleDateString();
  
//   // Format the time to local time string
//   const localTime = combinedDateTime.toLocaleTimeString();
//   // const [products, setProducts] = useState([]);
//   // const [grandTotal, setGrandTotal] = useState(0)

//   // const [taxable, settaxable] = useState(0)
//   // const [totalTax, setTotalTax] = useState(0)

//   // const [receipt, setreceipt] = useState({
//   //   id: uuidv4(),
//   //   name: "",
//   //   product_list: [products],
//   //   total: grandTotal,
//   //   date: date7,
//   //   tax_Amount: 0,
//   //   receipt_description: "",
//   //   total_tax: totalTax
//   // });

//   // useEffect(() => {

//   //   window.localStorage.getItem("dataJSON");
//   // }, [])


//   // const navigate = useNavigate();

//   // const handleTextChange = (e, fieldName, index) => {
//   //   const value = e.target.value;

//   //   if (fieldName === 'name') {
//   //     setreceipt({ ...receipt, [fieldName]: value });
//   //   } else if (fieldName === 'date') {
//   //     setreceipt({ ...receipt, [fieldName]: new Date(value) });
//   //   } else if (fieldName === 'tax_Amount') {
//   //     setreceipt({ ...receipt, [fieldName]: value });
//   //   } else if (fieldName === 'receipt_description') {
//   //     setreceipt({ ...receipt, [fieldName]: value });
//   //   }
//   //   else if (fieldName === 'productName') {
//   //     const updatedProducts = [...products];
//   //     updatedProducts[index].name = value;
//   //     setProducts(updatedProducts);
//   //     setreceipt({ ...receipt, product_list: updatedProducts });

//   //   } else if (fieldName === 'productCost') {
//   //     const updatedProducts = [...products];
//   //     updatedProducts[index].cost = Number(value);
//   //     setProducts(updatedProducts);
//   //     setreceipt({ ...receipt, product_list: updatedProducts });

//   //   }
//   //   else if (fieldName === 'taxable') {
//   //     const updatedProducts = [...products];
//   //     updatedProducts[index].taxable = value;
//   //     setProducts(updatedProducts);
//   //     setreceipt({ ...receipt, product_list: updatedProducts });
//   //     if (updatedProducts[index].taxable === "include") {
  
//   //       let costDeductTaxInclusive = (Number(updatedProducts[index].cost) / ((1 + (Number(receipt.tax_Amount) * .01))));
//   //       updatedProducts[index].cost = costDeductTaxInclusive.toFixed(2)
//   //       setProducts(updatedProducts);
//   //       setreceipt({ ...receipt, product_list: updatedProducts });

//   //     }}
//   //     else {
//   //       const updatedProducts = [...products];
//   //       updatedProducts[index].taxable = value;
//   //       setProducts(updatedProducts);
//   //       setreceipt({ ...receipt, product_list: updatedProducts });
//   //     }
//   //   }




//   // const addProduct = () => {
//   //   // When the button is clicked, add a new product to the state
//   //   setProducts([...products, { name: '', cost: 0, taxable: "" }]);
//   // };

//   // const removeProduct = () => {
//   //   if (products.length > 1) {
//   //     setProducts(products.filter((_, index) => index !== products.length - 1));
//   //   }
//   // };



//   // useEffect(() => {
//   //   function totalCostProducts() {
//   //     let cost = 0
//   //     let totTAX = 0
//   //     setGrandTotal(0)
//   //     let totalArray = products
//   //       .filter((y) => y.taxable === "true")
//   //       .map((x) => {
//   //         cost += (Number(x.cost) + (Number(x.cost) * (Number(receipt.tax_Amount) * .01)))
//   //       });

//   //     let noTaxArray = products
//   //       .filter((y) => y.taxable === "false")
//   //       .map((x) => cost += Number(x.cost));

//   //     let includeTaxArray = products
//   //       .filter((y) => y.taxable === "include")
//   //       .map((x) => cost += (Number(x.cost)*(1+ Number(receipt.tax_Amount)*.01)));


//   //     let includeTaxAmount = products
//   //       .filter((x) => x.taxable === "include")
//   //       .map((z) => totTAX += (((Number(z.cost) * (1 + (Number(receipt.tax_Amount) * .01)))) - Number(z.cost)));

//   //     let trueTaxArray = products
//   //       .filter((x) => x.taxable === "true")
//   //       .map((z) => {
//   //         totTAX += (Number(z.cost) * (Number(receipt.tax_Amount) * .01))
//   //       });

//   //     setGrandTotal((Number(cost)).toFixed(2))
//   //     setTotalTax((Number(totTAX)).toFixed(2))
//   //     setreceipt({ ...receipt, "total": grandTotal, total_tax: totalTax })

//   //   }
//   //   totalCostProducts();
//   // }, [products, grandTotal, setProducts, totalTax, receipt.tax_Amount]);

//   // console.log(receipt)

//   // console.log(products)

//   // const [change, setChange] = useState(0)
//   // function handleChangeAmount(event) {
//   //   setChange(event.target.value)

//   // }
//   // function changetoGiveBack() {
//   //   let amount = change - grandTotal
//   //   return amount.toFixed(2)
//   // }
//   // function handleSubmit(event) {
//   //   event.preventDefault();


//   //   let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));
//   //   newObj.push(receipt);
//   //   const updatedArray = JSON.stringify(newObj);
//   //   window.localStorage.setItem("dataJSON", updatedArray);

//   //   navigate("/receipts")

//   // }

//   const [date, setDate] = useState('');
//   const [amount, setAmount] = useState('');
//   const [notes, setNotes] = useState('');

//     const [formInfo, setFormInfo] = useState({
//     id: uuidv4(),
//     date: date7,
//     amount: amount,
//     notes: notes
//   });

//     useEffect(() => {

//     window.localStorage.getItem("dataJSON");
//   }, [])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', { date, amount, notes });
//     // Reset form fields after submission

//     let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));
//     newObj.push(formInfo);
//     const updatedArray = JSON.stringify(newObj);
//     window.localStorage.setItem("dataJSON", updatedArray);

//   // setDate('');
//   //   setAmount('');
//   //   setNotes('');

//     navigate("/receipts")
//   };

//   return (
//     <div className="new-form-container">
//     <h2>New Entry</h2>
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="date">Date:</label>
//         <input
//           type="date"
//           id="date"
//           value={moment(formInfo.date).format("YYYY-MM-DD")}
//           onChange={(e) => setFormInfo({ ...formInfo, date: new Date(e.target.value) })
//         }
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="amount">Monetary Amount:</label>
//         <input
//           type="number"
//           id="amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           step="0.01"
//           min="0"
//           placeholder="0.00"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="notes">Notes:</label>
//         <textarea
//           id="notes"
//           value={notes}
//           onChange={(e) => setNotes(e.target.value)}
//           placeholder="Enter any additional notes here"
//           rows="4"
//         ></textarea>
//       </div>
//       <button type="submit" className="submit-btn">Submit</button>
//     </form>
//   </div>
// );
// };



// export default NewForm;

import React, { useState, useEffect } from 'react';

function NewForm() {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const [dataJSON, setDataJSON] = useState([]);

  useEffect(() => {
    // Load existing data from localStorage when component mounts
    const storedData = window.localStorage.getItem("dataJSON");
    if (storedData) {
      setDataJSON(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert date to local time
    const localDate = new Date(date);
    const formattedDate = localDate.toLocaleString(); // This will give date and time in local format

    const formInfo = {
      date: formattedDate,
      amount: parseFloat(amount),
      notes: notes,
      id: Date.now() // Adding a unique id for each entry
    };

    // Update state and localStorage
    const newData = [...dataJSON, formInfo];
    setDataJSON(newData);
    window.localStorage.setItem("dataJSON", JSON.stringify(newData));

    console.log('Form submitted:', formInfo);

    // Reset form fields after submission
    setDate('');
    setAmount('');
    setNotes('');
  };

  return (
    <div className="parent">
      <h2>New Entry</h2>
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
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default NewForm;
