import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Nav from "./Components/Nav";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";

import "./App.css";
import { useEffect } from "react";
import Receipts from "./Components/receipts/Receipts";
import ReceiptDetails from "./Components/receipts/ReceiptDetails";
import EditForm from "./Components/forms/EditForm";
import NewForm from "./Components/forms/NewForm";
// import StoreInfo from "./Pages/StoreInfo";


function App() {
  const [fileData, setFileData] = useState(null);

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  useEffect(() => {

    if (window.localStorage.getItem("dataJSON")) {

      window.localStorage.getItem("dataJSON");

    } else {
      window.localStorage.setItem("dataJSON", JSON.stringify([]));
    }
  }, [])

  return (
    <Router>
      <Nav toggleTheme={toggleTheme} theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home fileData={fileData} setFileData={setFileData} />} />
        <Route path="/receipts" element={<Receipts fileData={fileData} />} />
        <Route path="/receipts/:id" element={<ReceiptDetails toggleTheme={toggleTheme} theme={theme} setTheme={setTheme} />} />
        <Route path="/receipts/:id/edit" element={<EditForm />} />
        <Route path="/receipts/new" element={<NewForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
