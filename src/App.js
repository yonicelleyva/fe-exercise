import React, { useState, useEffect } from "react";
import api from './components/api';
import Table from './components/Table';
import './App.css';
import "gestalt/dist/gestalt.css";

function App() {
  const [hiringList, setHiringList] = useState([]);
  const hiringListColumns = [
    {
      id: 'id',
      label: 'Id'
    },
    {
      id: 'listId',
      label: 'ListId'
    },
    {
      id: 'name',
      label: 'Name'
    }
  ]

  useEffect(() => {
    api.getHiringList()
    .then(list => {
      const sortedList = list
      .filter(item => item.name)
      .sort((a, b) => a.listId - b.listId || a.name.localeCompare(b.name));

      const multiList = [];
      [...new Set([...sortedList.map(item => item.listId)])]
      .map(listId => multiList.push(sortedList.filter(item => item.listId === listId)))

      setHiringList(multiList)
    })
  }, []);

  return (
    <div className="App">
      {hiringList.map(list =>
        <div className="hiring-list">
          <Table columns={hiringListColumns} data={list}>        
          </Table>
        </div>
      )}
    </div>
  );
}

export default App;
