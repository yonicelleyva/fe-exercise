import React, { useState, useEffect } from "react";
import {Table, Text} from "gestalt";

function DataTable({
  columns,
  data
}) {
  const [showData, setShowData] = useState(false)
  useEffect(() => {
    setShowData(Boolean(data.length));
  }, [data])
  return (
    <div className="data-table">
      {!showData && 
        <div className="no-results">
          No Results...
        </div>
      }
      {showData && 
        <Table>
          <Table.Header>
            <Table.Row>
              {columns.map((col, i) =>
                <Table.HeaderCell key={i}>
                  <Text weight="bold">{col.label}</Text>
                </Table.HeaderCell>
              )}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((row, i) => 
              <Table.Row key={i}>
              {columns.map((col, i) =>
                <Table.Cell key={i}>
                  <Text>{row[col.id]}</Text>
                </Table.Cell>
              )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      }
    </div>
  );
}

export default DataTable;