import React, { useState, useEffect } from "react";
import api from './components/api';
import Table from './components/Table';
import './App.css';
import logo from './logo.svg';

function App() {
  const [hiringList, setHiringList] = useState([]);

  useEffect(() => {
    api.getHiringList()
    .then(list => {
      console.log(list);
    })
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
