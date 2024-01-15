import React, { useState } from "react";
import DataEntry from "./Board/DataEntry";
import Board from "./Board/Board";

const App = () => {
  const [parts, setParts] = useState([]);

  const addPart = (part) => {
    setParts([...parts, part]);
  };

  const editPart = (index, updatedPart) => {
    const updatedParts = [...parts];
    updatedParts[index] = updatedPart;
    setParts(updatedParts);
  };

  const deletePart = (index) => {
    const updatedParts = [...parts];
    updatedParts.splice(index, 1);
    setParts(updatedParts);
  };

  return (
    <div>
      <h1>Optimal Cutting Program</h1>
      <DataEntry
        addPart={addPart}
        editPart={editPart}
        deletePart={deletePart}
        parts={parts}
      />
      <Board parts={parts} boardWidth={1830} boardHeight={3630} />
    </div>
  );
};

export default App;
